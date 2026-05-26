// ==UserScript==
// @name         閒著上鉤-雲端同步跑商情報站
// @namespace    https://github.com/szerra/stella-trade-helper
// @version      1.5.2
// @description  跑商情報面板：嵌入目前選中港口詳情卡，顯示貨物情報、航程預估、雲端同步狀態，支援 GitHub 自動更新。
// @author       YourName
// @homepageURL  https://github.com/szerra/stella-trade-helper
// @updateURL    https://raw.githubusercontent.com/szerra/stella-trade-helper/main/stella_trade_helper.user.js
// @downloadURL  https://raw.githubusercontent.com/szerra/stella-trade-helper/main/stella_trade_helper.user.js
// @match        *://stellaidle.dpdns.org/*
// @grant        GM_xmlhttpRequest
// @grant        GM.xmlHttpRequest
// @connect      script.google.com
// @connect      script.googleusercontent.com
// @run-at       document-end
// ==/UserScript==

(() => {
  'use strict';

  console.log('[StellaTrade 1.5.2] 腳本已載入');

  const API_URL = 'https://script.google.com/macros/s/AKfycbyWdyVKqvwF2SlC8mrJKebK6vg3wsRLsrK4El8ziRj9o4tDV4oz4-rkHJRiWc36wG_pBA/exec';
  const DATA_KEY = 'stella_real_market_data';
  const SELECTED_PORT_KEY = 'stella_selected_port';

  const CLICK_UPDATE_DELAY = 1200;
  const RETURN_UPDATE_COOLDOWN = 2500;
  const CLOUD_PULL_INTERVAL = 90 * 1000;
  const TOAST_COOLDOWN = 60 * 1000;

  let clickTimer = null;
  let observerTimer = null;
  let injectTimer = null;
  let toastTimer = null;
  let lastClickUpdateAt = 0;
  let lastCloudPullAt = 0;
  let lastToastAt = 0;
  let started = false;
  let observerReady = false;
  let listenersReady = false;

  const syncState = {
    ok: null,
    lastSuccessAt: null,
    lastFailureAt: null,
  };

  const portNormalize = {
    '雾灯群岛': '霧燈群島',
    '霧燈群島': '霧燈群島',
    '星沉湾': '星沉灣',
    '星沉灣': '星沉灣',
    '夜帆市': '夜帆市',
    '鲸歌港': '鯨歌港',
    '鯨歌港': '鯨歌港',
    '潮镜礁': '潮鏡礁',
    '潮鏡礁': '潮鏡礁',
    '珊文港': '珊文港'
  };

  const itemNormalize = {
    '雾灯芯': '霧燈芯',
    '霧燈芯': '霧燈芯',
    '航雾铜牌': '航霧銅牌',
    '航霧銅牌': '航霧銅牌',
    '星砂瓶': '星砂瓶',
    '海妖咖啡': '海妖咖啡',
    '浮梦拿铁': '浮夢拿鐵',
    '浮夢拿鐵': '浮夢拿鐵',
    '礁糖玛奇朵': '礁糖瑪奇朵',
    '礁糖瑪奇朵': '礁糖瑪奇朵',
    '小急救包': '小急救包',
    '一次性醫療物品': '小急救包',
    '一次性医疗物品': '小急救包',
    '夜帆布': '夜帆布',
    '夜帆绸': '夜帆絹',
    '夜帆綢': '夜帆絹',
    '夜帆絹': '夜帆絹',
    '小米酒': '米酒',
    '米酒': '米酒',
    '烈酒': '烈酒',
    '中急救包': '中急救包',
    '鲸歌骨笛': '鯨歌骨笛',
    '鯨歌骨笛': '鯨歌骨笛',
    '安神贝露': '安神貝露',
    '安神貝露': '安神貝露',
    '潮镜贝': '潮鏡貝',
    '潮鏡貝': '潮鏡貝',
    '黑潮摩卡': '黑潮摩卡',
    '幻潮冷萃': '幻潮冷萃',
    '珊文签': '珊文簽',
    '珊文簽': '珊文簽'
  };

  const ports = [
    { port: '星沉灣', keywords: ['星沉', '星沉灣', '星沉湾'], items: ['星砂瓶', '海妖咖啡', '浮夢拿鐵', '礁糖瑪奇朵', '小急救包'] },
    { port: '夜帆市', keywords: ['夜帆'], items: ['夜帆布', '夜帆絹', '米酒', '烈酒', '安神貝露', '黑潮摩卡', '中急救包'] },
    { port: '鯨歌港', keywords: ['鯨歌', '鲸歌'], items: ['鯨歌骨笛', '海妖咖啡', '安神貝露'] },
    { port: '潮鏡礁', keywords: ['潮鏡', '潮镜'], items: ['潮鏡貝', '礁糖瑪奇朵'] },
    { port: '霧燈群島', keywords: ['霧燈', '雾灯', '擺燈', '摆灯'], items: ['霧燈芯', '航霧銅牌', '浮夢拿鐵', '黑潮摩卡', '幻潮冷萃'] },
    { port: '珊文港', keywords: ['珊文'], items: ['珊文簽'] },
  ];

  const normPort = value => portNormalize[String(value || '').trim()] || String(value || '').trim();
  const normItem = value => itemNormalize[String(value || '').trim()] || String(value || '').trim();

  function num(value) {
    if (value === null || value === undefined || value === '') return null;
    const n = Number(String(value).replace(/,/g, '').trim());
    return Number.isFinite(n) ? n : null;
  }

  function escapeHtml(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function nowText() {
    const d = new Date();
    return `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
  }

  function timeOnly(timestamp) {
    if (!timestamp) return '-';
    const d = new Date(timestamp);
    if (Number.isNaN(d.getTime())) return '-';
    return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
  }

  function defaultInfo() {
    return { count: 0, max: null, time: '尚未更新', price: '-', restock: '-' };
  }

  function defaultData() {
    const data = {};
    for (const def of ports) {
      data[def.port] = {};
      for (const item of def.items) data[def.port][item] = defaultInfo();
    }
    return data;
  }

  function readData() {
    try {
      const raw = localStorage.getItem(DATA_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (error) {
      console.warn('[StellaTrade] 本地資料讀取失敗', error);
      return null;
    }
  }

  function writeData(data) {
    localStorage.setItem(DATA_KEY, JSON.stringify(data));
  }

  function isInvalidItemName(name) {
    const text = String(name || '').trim();
    const lower = text.toLowerCase();
    if (!text || text.length > 18) return true;
    if (/[。！？!?，,；;：:]/.test(text)) return true;
    if (
      text.includes('一次性') ||
      text.includes('醫療物品') ||
      text.includes('医疗物品') ||
      text.includes('流行的') ||
      text.includes('描述') ||
      text.includes('說明') ||
      text.includes('说明')
    ) return true;

    return (
      text.includes('類別') ||
      text.includes('类别') ||
      lower.includes('category') ||
      lower === 'coffee' ||
      lower === 'souvenir' ||
      text.includes('效果') ||
      text.includes('冷卻') ||
      text.includes('冷却') ||
      text.includes('價格') ||
      text.includes('价格') ||
      text.includes('售價') ||
      text.includes('售价') ||
      text.includes('單價') ||
      text.includes('单价') ||
      text.includes('庫存') ||
      text.includes('库存') ||
      text.includes('補貨') ||
      text.includes('补货') ||
      text.includes('數量') ||
      text.includes('数量') ||
      text.includes('合計') ||
      text.includes('总计') ||
      text.includes('購買') ||
      text.includes('购买')
    );
  }

  function isDetailTextBlock(text) {
    const t = String(text || '');
    return (
      t.includes('類別') ||
      t.includes('类别') ||
      t.toLowerCase().includes('category') ||
      t.includes('效果') ||
      t.includes('冷卻') ||
      t.includes('冷却') ||
      t.includes('單價') ||
      t.includes('单价') ||
      t.includes('當前數量') ||
      t.includes('当前数量') ||
      t.includes('合計') ||
      t.includes('总计')
    );
  }

  function ensureData() {
    let data = readData();
    if (!data || typeof data !== 'object') {
      data = defaultData();
      writeData(data);
      return data;
    }

    const defs = defaultData();
    let changed = false;

    for (const [portName, items] of Object.entries({ ...data })) {
      const cleanPort = normPort(portName);
      if (cleanPort !== portName) {
        data[cleanPort] = Object.assign(data[cleanPort] || {}, items);
        delete data[portName];
        changed = true;
      }
    }

    for (const [portName, items] of Object.entries(data)) {
      if (!items || typeof items !== 'object') continue;
      for (const [itemName, info] of Object.entries({ ...items })) {
        if (isInvalidItemName(itemName)) {
          delete items[itemName];
          changed = true;
          continue;
        }
        const cleanItem = normItem(itemName);
        if (cleanItem !== itemName) {
          items[cleanItem] = Object.assign(items[cleanItem] || {}, info);
          delete items[itemName];
          changed = true;
        }
        const finalInfo = items[cleanItem];
        if (finalInfo && typeof finalInfo === 'object' && 'updater' in finalInfo) {
          delete finalInfo.updater;
          changed = true;
        }
      }
    }

    for (const [portName, items] of Object.entries(defs)) {
      if (!data[portName]) {
        data[portName] = {};
        changed = true;
      }
      for (const [itemName, info] of Object.entries(items)) {
        if (!data[portName][itemName]) {
          data[portName][itemName] = { ...info };
          changed = true;
          continue;
        }
        const old = data[portName][itemName];
        for (const [key, value] of Object.entries(info)) {
          if (!(key in old)) {
            old[key] = value;
            changed = true;
          }
        }
      }
    }

    if (changed) writeData(data);
    return data;
  }

  function pageText() {
    return document.body ? document.body.innerText || '' : '';
  }

  function detectCurrentPort(text) {
    return ports.find(def => def.keywords.some(keyword => text.includes(keyword))) || null;
  }

  function isTavernPage(text) {
    return (
      text.includes('酒館傳聞') ||
      text.includes('酒馆传闻') ||
      text.includes('庫存情報') ||
      text.includes('库存情报') ||
      text.includes('打聽庫存') ||
      text.includes('打听库存')
    );
  }

  function allKnownItems() {
    const set = new Set();
    for (const def of ports) for (const item of def.items) set.add(item);
    for (const item of Object.keys(itemNormalize)) set.add(item);
    for (const item of Object.values(itemNormalize)) set.add(item);
    return [...set].filter(Boolean);
  }

  function aliasesForItem(itemName) {
    const clean = normItem(itemName);
    const set = new Set([itemName, clean]);
    for (const [raw, fixed] of Object.entries(itemNormalize)) {
      if (fixed === clean) set.add(raw);
    }
    return [...set].filter(Boolean);
  }

  function visible(el) {
    if (!el || !el.isConnected) return false;
    const style = getComputedStyle(el);
    if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') return false;
    const rect = el.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0;
  }

  function extractStock(text) {
    const m = text.match(/(?:库存|庫存)\s*([0-9,]+)\s*\/\s*([0-9,]+)/);
    if (!m) return null;
    const count = num(m[1]);
    const max = num(m[2]);
    if (count === null || max === null) return null;
    return { count, max };
  }

  function extractPrice(text) {
    const labeled = text.match(/(?:價格|价格|售价|售價|單價|单价)[:：]?\s*([0-9,]+)/);
    if (labeled) return String(num(labeled[1]) ?? labeled[1]);
    const currency = text.match(/([0-9,]+)\s*(?:金币|金幣|鱼币|魚幣|幣|币)/);
    if (currency) return String(num(currency[1]) ?? currency[1]);
    return '-';
  }

  function extractRestock(text) {
    const m = text.match(/(?:補貨|补货|補貨時間|补货时间)[:：]?\s*([0-9/:.\-\s]+(?:上午|下午)?\s*[0-9/:.\-\s]*)/);
    return m ? m[1].trim() : '-';
  }

  function extractItemNameByKnownList(text, portDef) {
    const candidates = [...new Set([...portDef.items, ...allKnownItems()])];
    for (const item of candidates) {
      if (aliasesForItem(item).some(alias => text.includes(alias))) return normItem(item);
    }
    return null;
  }

  function extractItemNameFallback(text) {
    if (isDetailTextBlock(text)) return null;
    const lines = text.split('\n').map(x => x.trim()).filter(Boolean);

    for (const line of lines) {
      if (isInvalidItemName(line)) continue;
      if (/^[0-9,]+$/.test(line)) continue;
      if (line.length >= 2 && line.length <= 16) return normItem(line);
    }

    const beforePrice = text.split(/(?:價格|价格|售價|售价|單價|单价|[0-9,]+\s*(?:金币|金幣|鱼币|魚幣|幣|币))/)[0];
    const compact = beforePrice.replace(/[\n\r\t]/g, ' ').replace(/\s+/g, ' ').trim();

    if (compact.length >= 2 && compact.length <= 16 && !isInvalidItemName(compact)) {
      return normItem(compact);
    }

    return null;
  }

  function scanGoods(portDef) {
    const result = {};
    const elements = [...document.querySelectorAll('div, li, tr, section, article, button')];

    for (const el of elements) {
      if (!visible(el)) continue;
      const text = el.innerText?.trim();
      if (!text || text.length > 900) continue;
      if (isDetailTextBlock(text)) continue;

      const stocks = text.match(/(?:库存|庫存)\s*[0-9,]+\s*\/\s*[0-9,]+/g) || [];
      if (stocks.length !== 1) continue;

      const stock = extractStock(text);
      if (!stock) continue;

      let itemName = extractItemNameByKnownList(text, portDef);
      if (!itemName) itemName = extractItemNameFallback(text);
      if (!itemName || isInvalidItemName(itemName)) continue;

      const info = {
        name: itemName,
        count: stock.count,
        max: stock.max,
        price: extractPrice(text),
        restock: extractRestock(text),
        rawText: text
      };

      const old = result[itemName];
      if (!old || text.length < old.rawText.length) result[itemName] = info;
    }

    return Object.values(result);
  }

  function infoChanged(oldInfo, newInfo) {
    if (!oldInfo) return true;
    return (
      Number(oldInfo.count ?? -1) !== Number(newInfo.count ?? -1) ||
      Number(oldInfo.max ?? -1) !== Number(newInfo.max ?? -1) ||
      String(oldInfo.price ?? '-') !== String(newInfo.price ?? '-') ||
      String(oldInfo.restock ?? '-') !== String(newInfo.restock ?? '-')
    );
  }

  function scrapeCurrentVisibleData({ upload = true, silent = true } = {}) {
    const text = pageText();
    if (isTavernPage(text)) return false;

    const portDef = detectCurrentPort(text);
    if (!portDef) {
      if (!silent) console.log('[StellaTrade] 未偵測到可同步港口');
      return false;
    }

    const goods = scanGoods(portDef);
    if (!goods.length) {
      if (!silent) console.log(`[StellaTrade] ${portDef.port} 沒有讀到商品列`);
      return false;
    }

    const data = ensureData();
    if (!data[portDef.port]) data[portDef.port] = {};

    const time = nowText();
    const uploadGoods = [];
    let changed = 0;

    for (const good of goods) {
      const itemName = normItem(good.name);
      const oldInfo = data[portDef.port][itemName] || {};
      const newInfo = {
        count: good.count,
        max: good.max,
        time,
        price: good.price || oldInfo.price || '-',
        restock: good.restock || oldInfo.restock || '-'
      };

      if (!data[portDef.port][itemName] || infoChanged(oldInfo, newInfo)) {
        data[portDef.port][itemName] = newInfo;
        changed++;
      }

      uploadGoods.push({
        name: itemName,
        count: newInfo.count,
        quantity: newInfo.count,
        stock: newInfo.count,
        amount: newInfo.count,
        max: newInfo.max,
        price: newInfo.price,
        restock: newInfo.restock,
        restockTime: newInfo.restock,
        nextRestock: newInfo.restock
      });
    }

    writeData(data);
    localStorage.setItem(SELECTED_PORT_KEY, portDef.port);
    scheduleInject();

    if (upload && uploadGoods.length) uploadToCloud(portDef.port, time, uploadGoods);

    if (changed > 0) console.log(`[StellaTrade] 已更新 ${portDef.port}：${changed} 項商品`);
    return true;
  }

  function markSyncSuccess() {
    syncState.ok = true;
    syncState.lastSuccessAt = Date.now();
    scheduleInject();
  }

  function markSyncFailure(type = 'sync', detail = '') {
    syncState.ok = false;
    syncState.lastFailureAt = Date.now();
    console.warn('[StellaTrade] 雲端同步失敗：', type, detail || '');

    const now = Date.now();
    if (now - lastToastAt >= TOAST_COOLDOWN) {
      lastToastAt = now;
      if (type === 'upload') {
        showSyncToast('⚠️ 上傳雲端失敗', '資料目前只保存在本機。請開啟梯子後重新整理，或等待下次自動同步。');
      } else {
        showSyncToast('⚠️ 雲端同步失敗', '請開啟梯子後重新整理，或等待下次自動同步。');
      }
    }

    scheduleInject();
  }

  function parseCloudJsonResponse(response) {
    const text = String(response?.responseText || '').trim();
    if (!text) return { ok: false, message: '雲端沒有回傳資料' };

    if (text.startsWith('<!DOCTYPE') || text.startsWith('<html') || text.startsWith('<')) {
      return { ok: false, message: '雲端回傳 HTML，不是 JSON。請檢查部署權限。', preview: text.slice(0, 300) };
    }

    try {
      return { ok: true, data: JSON.parse(text) };
    } catch (error) {
      return { ok: false, message: '雲端回傳格式不是有效 JSON', preview: text.slice(0, 300), error };
    }
  }

  function uploadToCloud(port, time, goods) {
    request({
      method: 'POST',
      url: API_URL,
      data: JSON.stringify({
        action: 'update_v7',
        port: normPort(port),
        time,
        goods
      }),
      headers: { 'Content-Type': 'application/json' },
      onload(response) {
        if (response.status !== 200) {
          markSyncFailure('upload', `HTTP ${response.status}`);
          return;
        }

        const parsed = parseCloudJsonResponse(response);
        if (!parsed.ok) {
          markSyncFailure('upload', parsed.message);
          return;
        }

        if (parsed.data && parsed.data.status === 'error') {
          markSyncFailure('upload', parsed.data.message || '雲端回傳 error');
          return;
        }

        markSyncSuccess();
        console.log('[StellaTrade] 上傳成功');
      },
      onerror(error) {
        markSyncFailure('upload', error);
      }
    });
  }

  function fetchCloudData({ silent = true } = {}) {
    lastCloudPullAt = Date.now();

    request({
      method: 'GET',
      url: `${API_URL}?_=${Date.now()}`,
      headers: { Accept: 'application/json,text/plain,*/*' },
      onload(response) {
        if (response.status !== 200) {
          if (!silent) console.warn('[StellaTrade] 雲端讀取失敗 HTTP', response.status);
          markSyncFailure('download', `HTTP ${response.status}`);
          return;
        }

        const parsed = parseCloudJsonResponse(response);
        if (!parsed.ok) {
          if (!silent) console.warn('[StellaTrade] 雲端同步略過：', parsed.message);
          markSyncFailure('download', parsed.message);
          return;
        }

        if (parsed.data && parsed.data.status === 'error') {
          markSyncFailure('download', parsed.data.message || '雲端回傳 error');
          return;
        }

        try {
          const cloudData = parsed.data;
          const localData = ensureData();
          let hasUpdate = false;

          for (const [port, items] of Object.entries(cloudData || {})) {
            const cleanPort = normPort(port);
            if (!localData[cleanPort]) localData[cleanPort] = {};

            for (const [item, info] of Object.entries(items || {})) {
              const cleanItem = normItem(item);
              if (isInvalidItemName(cleanItem)) continue;

              const count = num(info.count ?? info.quantity ?? info.stock ?? info.amount);
              if (count === null) continue;

              localData[cleanPort][cleanItem] = {
                count,
                max: num(info.max) ?? localData[cleanPort][cleanItem]?.max ?? null,
                time: info.time || '未知',
                price: info.price || '-',
                restock: info.restockTime || info.nextRestock || info.restock || '-'
              };
              hasUpdate = true;
            }
          }

          markSyncSuccess();

          if (hasUpdate) {
            writeData(localData);
            console.log('[StellaTrade] 雲端同步完成');
          } else {
            console.log('[StellaTrade] 雲端同步完成，沒有新資料');
          }

          scheduleInject();
        } catch (error) {
          markSyncFailure('download', error);
        }
      },
      onerror(error) {
        markSyncFailure('download', error);
      }
    });
  }

  function request(config) {
    if (typeof GM_xmlhttpRequest === 'function') {
      GM_xmlhttpRequest(config);
      return;
    }

    if (typeof GM !== 'undefined' && typeof GM.xmlHttpRequest === 'function') {
      GM.xmlHttpRequest(config);
      return;
    }

    markSyncFailure('permission', 'GM_xmlhttpRequest 不存在');
  }

  function showSyncToast(title, message) {
    document.getElementById('stella-sync-toast')?.remove();

    const toast = document.createElement('div');
    toast.id = 'stella-sync-toast';
    toast.innerHTML = `
      <div class="stella-sync-toast-title">${escapeHtml(title)}</div>
      <div class="stella-sync-toast-message">${escapeHtml(message)}</div>
    `;
    document.body.appendChild(toast);

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.add('stella-sync-toast-hide');
      setTimeout(() => toast.remove(), 450);
    }, 10000);
  }

  function stockColor(count, max) {
    if (max && max > 0) {
      const ratio = count / max;
      if (ratio <= 0.15) return '#ff6b6b';
      if (ratio <= 0.45) return '#ffd166';
      return '#72f0b2';
    }
    if (count <= 5) return '#ff6b6b';
    if (count <= 10) return '#ffd166';
    return '#72f0b2';
  }

  function parseTravelDuration(text) {
    const matches = [...String(text || '').matchAll(/\b(\d{1,3}):(\d{2})(?::(\d{2}))?\b/g)];
    if (!matches.length) return null;

    for (const match of matches) {
      const raw = match[0];
      const a = Number(match[1]);
      const b = Number(match[2]);
      const c = match[3] === undefined ? null : Number(match[3]);
      if (!Number.isFinite(a) || !Number.isFinite(b) || b > 59) continue;

      let hours = 0;
      let minutes = 0;
      let seconds = 0;

      if (c === null) {
        minutes = a;
        seconds = b;
      } else {
        if (!Number.isFinite(c) || c > 59) continue;
        hours = a;
        minutes = b;
        seconds = c;
      }

      const totalMs = ((hours * 3600) + (minutes * 60) + seconds) * 1000;
      if (totalMs <= 0) continue;

      return { raw, totalMs };
    }

    return null;
  }

  function sameDate(a, b) {
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  }

  function tomorrow(date, now) {
    const t = new Date(now);
    t.setDate(now.getDate() + 1);
    return sameDate(date, t);
  }

  function formatClock(date, now = new Date()) {
    const hh = String(date.getHours()).padStart(2, '0');
    const mm = String(date.getMinutes()).padStart(2, '0');
    if (sameDate(date, now)) return `${hh}:${mm}`;
    if (tomorrow(date, now)) return `明天 ${hh}:${mm}`;
    return `${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')} ${hh}:${mm}`;
  }

  function buildSchedule(context) {
    const duration = parseTravelDuration(context?.innerText || '');
    if (!duration) return null;

    const now = new Date();
    return {
      durationRaw: duration.raw,
      arriveAtText: formatClock(new Date(now.getTime() + duration.totalMs), now),
      returnAtText: formatClock(new Date(now.getTime() + duration.totalMs * 2), now)
    };
  }

  function renderTravel(schedule) {
    if (!schedule) return '';
    return `
      <div class="stella-travel-schedule">
        <div class="stella-travel-title">航程預估</div>
        <div class="stella-travel-grid">
          <div><span class="stella-travel-label">航行時間</span><strong>${escapeHtml(schedule.durationRaw)}</strong></div>
          <div><span class="stella-travel-label">預計到達</span><strong>${escapeHtml(schedule.arriveAtText)}</strong></div>
          <div><span class="stella-travel-label">預計返航</span><strong>${escapeHtml(schedule.returnAtText)}</strong></div>
        </div>
      </div>
    `;
  }

  function renderSyncStatus() {
    if (syncState.ok === true) {
      const time = syncState.lastSuccessAt ? `　最後同步 ${timeOnly(syncState.lastSuccessAt)}` : '';
      return `<div class="stella-sync-status stella-sync-ok"><span>雲端同步：正常${escapeHtml(time)}</span></div>`;
    }

    if (syncState.ok === false) {
      const time = syncState.lastFailureAt ? `　${timeOnly(syncState.lastFailureAt)}` : '';
      return `<div class="stella-sync-status stella-sync-fail"><span>雲端同步：失敗${escapeHtml(time)}　請開啟梯子同步</span></div>`;
    }

    return `<div class="stella-sync-status stella-sync-wait"><span>雲端同步：確認中</span></div>`;
  }

  function renderGoods(portName, schedule) {
    const data = ensureData();
    const entries = Object.entries(data[portName] || {}).filter(([name]) => !isInvalidItemName(name));

    const travelHtml = renderTravel(schedule);
    const syncHtml = renderSyncStatus();

    if (!entries.length) {
      return `
        <div class="stella-detail-goods">
          ${travelHtml}
          ${syncHtml}
          <div class="stella-detail-goods-head"><span>貨物情報</span></div>
          <div class="stella-detail-empty">目前沒有同步資料</div>
        </div>
      `;
    }

    const rows = entries.map(([itemName, info]) => {
      const count = Number(info.count || 0);
      const max = Number(info.max || 0);
      const stock = max > 0 ? `${count}/${max}` : `${count}`;
      const price = info.price && info.price !== '-' ? `${info.price} 魚幣` : '-';
      return `
        <div class="stella-detail-good">
          <div class="stella-detail-good-top">
            <span class="stella-detail-name">${escapeHtml(itemName)}</span>
            <span class="stella-detail-stock" style="color:${stockColor(count, max)};">${escapeHtml(stock)}</span>
            <span class="stella-detail-price">${escapeHtml(price)}</span>
          </div>
          <div class="stella-detail-meta">更新：${escapeHtml(info.time || '尚未更新')}　補貨：${escapeHtml(info.restock || '-')}</div>
        </div>
      `;
    }).join('');

    return `
      <div class="stella-detail-goods">
        ${travelHtml}
        ${syncHtml}
        <div class="stella-detail-goods-head"><span>貨物情報</span><span>${entries.length} 項</span></div>
        <div class="stella-detail-goods-grid">${rows}</div>
      </div>
    `;
  }

  function detectPortFromText(text) {
    const cleanText = String(text || '');
    const lines = cleanText.split('\n').map(x => x.trim()).filter(Boolean);

    for (const line of lines) {
      const exact = ports.find(def => def.port === normPort(line));
      if (exact) return exact.port;
    }

    const matched = ports.filter(def => {
      if (cleanText.includes(def.port)) return true;
      return def.keywords.some(keyword => cleanText.includes(keyword));
    });

    if (!matched.length || matched.length > 2) return null;
    return matched[0].port;
  }

  function isDepartElement(el) {
    if (!el || !visible(el)) return false;
    const text = String(el.innerText || el.textContent || '').trim();
    if (!text || text.length > 20) return false;
    return text === '出發' || text === '出发' || text.includes('出發') || text.includes('出发');
  }

  function findDepartElements() {
    return [...document.querySelectorAll('button, a, [role="button"], div, span')]
      .filter(isDepartElement)
      .filter(el => {
        const rect = el.getBoundingClientRect();
        return rect.width >= 40 && rect.height >= 20;
      });
  }

  function portCount(text) {
    return ports.filter(def => String(text || '').includes(def.port)).length;
  }

  function findContextFromDepart(departEl) {
    let node = departEl;

    for (let depth = 0; depth < 10 && node && node !== document.body; depth++) {
      node = node.parentElement;
      if (!node || !visible(node)) continue;
      if (node.querySelector('.stella-detail-goods')) continue;

      const text = String(node.innerText || '').trim();
      if (!text || text.length < 12 || text.length > 1600) continue;
      if (!/\b\d{1,3}:\d{2}(?::\d{2})?\b/.test(text)) continue;

      const portName = detectPortFromText(text);
      if (!portName) continue;
      if (portCount(text) > 2) continue;

      if (
        text.includes('首頁') ||
        text.includes('倉庫') ||
        text.includes('市場') ||
        text.includes('Discord') ||
        text.includes('職業') ||
        text.includes('排行')
      ) {
        continue;
      }

      const rect = node.getBoundingClientRect();
      if (rect.width < 260 || rect.height < 110) continue;
      if (rect.width > Math.max(1120, window.innerWidth * 0.995)) continue;
      if (rect.height > Math.max(700, window.innerHeight * 0.92)) continue;

      return { context: node, portName };
    }

    return null;
  }

  function directChildOf(child, context) {
    let node = child;
    while (node && node.parentElement && node.parentElement !== context) node = node.parentElement;
    return node && node.parentElement === context ? node : null;
  }

  function insertTarget(departEl, context) {
    const directChild = directChildOf(departEl, context);
    if (!directChild) return context;

    const directText = String(directChild.innerText || '').trim();
    if (detectPortFromText(directText)) return directChild;

    return context;
  }

  function injectGoods() {
    ensureData();
    document.querySelectorAll('.stella-detail-goods').forEach(node => node.remove());

    const departElements = findDepartElements();
    const used = new Set();

    for (const departEl of departElements) {
      const found = findContextFromDepart(departEl);
      if (!found) continue;

      const { context, portName } = found;
      if (used.has(context)) continue;

      const target = insertTarget(departEl, context);
      const schedule = buildSchedule(context);
      target.insertAdjacentHTML('beforeend', renderGoods(portName, schedule));

      used.add(context);
      break;
    }
  }

  function scheduleInject() {
    clearTimeout(injectTimer);
    injectTimer = setTimeout(injectGoods, 120);
  }

  function installStyles() {
    if (document.getElementById('stella-detail-style')) return;

    const style = document.createElement('style');
    style.id = 'stella-detail-style';

    style.textContent = `
      .stella-detail-goods {
        margin-top: 14px !important;
        padding: 12px !important;
        border: 1px solid rgba(108, 190, 165, 0.28) !important;
        border-radius: 12px !important;
        background: linear-gradient(135deg, rgba(95, 180, 155, 0.12), rgba(255, 255, 255, 0.035)) !important;
        color: #dffaf3 !important;
        font-family: inherit !important;
        width: 100% !important;
        box-sizing: border-box !important;
      }

      .stella-travel-schedule {
        margin-bottom: 12px !important;
        padding: 10px 10px !important;
        border: 1px solid rgba(255, 209, 102, 0.26) !important;
        border-radius: 11px !important;
        background: rgba(255, 209, 102, 0.08) !important;
      }

      .stella-travel-title {
        margin-bottom: 8px !important;
        color: #ffd166 !important;
        font-size: 13px !important;
        font-weight: 900 !important;
      }

      .stella-travel-grid {
        display: grid !important;
        grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
        gap: 8px !important;
      }

      .stella-travel-grid div {
        padding: 7px 8px !important;
        border-radius: 9px !important;
        background: rgba(3, 22, 19, 0.28) !important;
        min-width: 0 !important;
      }

      .stella-travel-label {
        display: block !important;
        margin-bottom: 3px !important;
        color: #b6cfc8 !important;
        font-size: 10px !important;
        white-space: nowrap !important;
      }

      .stella-travel-grid strong {
        color: #fff3c4 !important;
        font-size: 13px !important;
        font-weight: 900 !important;
        white-space: nowrap !important;
      }

      .stella-sync-status {
        margin-bottom: 12px !important;
        padding: 8px 10px !important;
        border-radius: 10px !important;
        font-size: 12px !important;
        font-weight: 800 !important;
        line-height: 1.35 !important;
      }

      .stella-sync-ok {
        color: #b8ffe0 !important;
        border: 1px solid rgba(114, 240, 178, 0.28) !important;
        background: rgba(114, 240, 178, 0.08) !important;
      }

      .stella-sync-fail {
        color: #ffd1d1 !important;
        border: 1px solid rgba(255, 107, 107, 0.36) !important;
        background: rgba(255, 107, 107, 0.12) !important;
      }

      .stella-sync-wait {
        color: #d7e6ff !important;
        border: 1px solid rgba(150, 185, 255, 0.26) !important;
        background: rgba(150, 185, 255, 0.08) !important;
      }

      .stella-detail-goods-head {
        display: flex !important;
        justify-content: space-between !important;
        align-items: center !important;
        margin-bottom: 10px !important;
        color: #92f5d3 !important;
        font-weight: 900 !important;
        font-size: 14px !important;
      }

      .stella-detail-goods-head span:last-child {
        color: #b7d9cf !important;
        font-size: 12px !important;
        font-weight: 700 !important;
      }

      .stella-detail-goods-grid {
        display: grid !important;
        grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)) !important;
        gap: 8px !important;
      }

      .stella-detail-good {
        padding: 8px 9px !important;
        border: 1px solid rgba(140, 220, 190, 0.20) !important;
        border-radius: 10px !important;
        background: rgba(3, 22, 19, 0.32) !important;
        line-height: 1.35 !important;
        box-sizing: border-box !important;
        min-width: 0 !important;
      }

      .stella-detail-good-top {
        display: grid !important;
        grid-template-columns: minmax(52px, 1fr) auto auto !important;
        align-items: center !important;
        gap: 7px !important;
        min-width: 0 !important;
      }

      .stella-detail-name {
        color: #f4fffb !important;
        font-size: 13px !important;
        font-weight: 900 !important;
        overflow: hidden !important;
        text-overflow: ellipsis !important;
        white-space: nowrap !important;
        min-width: 0 !important;
      }

      .stella-detail-stock {
        font-size: 12px !important;
        font-weight: 900 !important;
        white-space: nowrap !important;
      }

      .stella-detail-price {
        color: #ffd166 !important;
        font-size: 11px !important;
        white-space: nowrap !important;
      }

      .stella-detail-meta {
        margin-top: 4px !important;
        color: #b6cfc8 !important;
        font-size: 10px !important;
        white-space: nowrap !important;
        overflow: hidden !important;
        text-overflow: ellipsis !important;
      }

      .stella-detail-empty {
        color: #b6cfc8 !important;
        font-size: 12px !important;
      }

      #stella-sync-toast {
        position: fixed !important;
        top: 18px !important;
        right: 18px !important;
        z-index: 2147483647 !important;
        width: min(360px, calc(100vw - 32px)) !important;
        padding: 13px 15px !important;
        border-radius: 14px !important;
        border: 1px solid rgba(255, 107, 107, 0.45) !important;
        background: linear-gradient(135deg, rgba(55, 8, 16, 0.96), rgba(18, 12, 18, 0.96)) !important;
        box-shadow: 0 14px 38px rgba(0, 0, 0, 0.45), 0 0 24px rgba(255, 107, 107, 0.18) !important;
        color: #fff !important;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important;
        pointer-events: none !important;
        animation: stella-toast-in 0.25s ease-out !important;
      }

      .stella-sync-toast-title {
        color: #ffb3b3 !important;
        font-weight: 950 !important;
        font-size: 14px !important;
        margin-bottom: 5px !important;
      }

      .stella-sync-toast-message {
        color: #ffe7e7 !important;
        font-size: 12px !important;
        line-height: 1.45 !important;
      }

      .stella-sync-toast-hide {
        animation: stella-toast-out 0.45s ease-in forwards !important;
      }

      @keyframes stella-toast-in {
        from { transform: translateY(-10px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }

      @keyframes stella-toast-out {
        from { transform: translateY(0); opacity: 1; }
        to { transform: translateY(-10px); opacity: 0; }
      }

      @media (max-width: 620px) {
        .stella-detail-goods {
          margin-top: 10px !important;
          padding: 9px !important;
        }

        .stella-travel-schedule {
          padding: 8px !important;
          margin-bottom: 10px !important;
        }

        .stella-travel-grid {
          grid-template-columns: 1fr !important;
          gap: 6px !important;
        }

        .stella-travel-grid strong {
          font-size: 12px !important;
        }

        .stella-sync-status {
          font-size: 11px !important;
          padding: 7px 8px !important;
        }

        .stella-detail-goods-head {
          font-size: 13px !important;
          margin-bottom: 8px !important;
        }

        .stella-detail-goods-grid {
          grid-template-columns: 1fr !important;
          gap: 6px !important;
        }

        .stella-detail-good {
          padding: 7px 8px !important;
        }

        .stella-detail-name {
          font-size: 12px !important;
        }

        .stella-detail-stock {
          font-size: 11px !important;
        }

        .stella-detail-price,
        .stella-detail-meta {
          font-size: 10px !important;
        }

        #stella-sync-toast {
          top: 12px !important;
          left: 12px !important;
          right: 12px !important;
          width: auto !important;
        }
      }
    `;

    document.head.appendChild(style);
  }

  function isReturnClickTarget(target) {
    if (!target || !target.closest) return false;
    const el = target.closest('button, a, div, span');
    if (!el) return false;
    const text = String(el.innerText || el.textContent || '').trim();
    return (
      text.includes('返航') ||
      text.includes('返回') ||
      text.includes('離港') ||
      text.includes('离港') ||
      text.includes('出發') ||
      text.includes('出发')
    );
  }

  function handleInteraction(event) {
    const now = Date.now();

    if (isReturnClickTarget(event.target)) {
      if (now - lastClickUpdateAt < RETURN_UPDATE_COOLDOWN) return;
      lastClickUpdateAt = now;
      clearTimeout(clickTimer);
      scrapeCurrentVisibleData({ upload: true, silent: true });
      scheduleInject();
      return;
    }

    clearTimeout(clickTimer);
    clickTimer = setTimeout(() => {
      const ok = scrapeCurrentVisibleData({ upload: true, silent: true });
      if (ok) lastClickUpdateAt = Date.now();
      scheduleInject();
    }, CLICK_UPDATE_DELAY);
  }

  function setupListeners() {
    if (listenersReady) return;
    listenersReady = true;
    document.addEventListener('pointerup', handleInteraction, true);
    document.addEventListener('touchend', handleInteraction, true);
    document.addEventListener('click', handleInteraction, true);
    document.addEventListener('mouseover', scheduleInject, true);
    document.addEventListener('focusin', scheduleInject, true);
  }

  function setupObserver() {
    if (observerReady || !document.body) return;
    observerReady = true;

    const observer = new MutationObserver(() => {
      clearTimeout(observerTimer);
      observerTimer = setTimeout(() => {
        scrapeCurrentVisibleData({ upload: false, silent: true });
        scheduleInject();
      }, 800);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true
    });
  }

  function start(attempt = 0) {
    if (started) return;

    if (!document.body || !document.head) {
      if (attempt < 40) setTimeout(() => start(attempt + 1), 250);
      else console.warn('[StellaTrade] 找不到 document.body/head，無法啟動');
      return;
    }

    started = true;
    ensureData();
    installStyles();
    setupObserver();
    setupListeners();
    scheduleInject();

    setTimeout(() => {
      fetchCloudData({ silent: true });
      scrapeCurrentVisibleData({ upload: false, silent: true });
      scheduleInject();
    }, 1000);

    setInterval(() => {
      if (Date.now() - lastCloudPullAt >= CLOUD_PULL_INTERVAL) {
        fetchCloudData({ silent: true });
      }
    }, CLOUD_PULL_INTERVAL);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => start());
    start();
  } else {
    start();
  }
})();
