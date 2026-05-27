// ==UserScript==
// @name         閒著上鉤-雲端同步跑商情報站
// @namespace    https://github.com/szerra/stella-trade-helper
// @version      1.6.4
// @description  跑商情報面板：左側入口按鈕、變化/概覽/港口/設定面板、雲端同步狀態與同步失敗提醒。
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

  console.log('[StellaTrade 1.6.4] 腳本已載入');

  const API_URL = 'https://script.google.com/macros/s/AKfycbyWdyVKqvwF2SlC8mrJKebK6vg3wsRLsrK4El8ziRj9o4tDV4oz4-rkHJRiWc36wG_pBA/exec';

  const DATA_KEY = 'stella_real_market_data';
  const SEEN_KEY = 'stella_seen_market_data';
  const SETTINGS_KEY = 'stella_trade_panel_settings';
  const PANEL_STATE_KEY = 'stella_trade_panel_state';
  const SELECTED_PORT_KEY = 'stella_selected_port';

  const CLICK_UPDATE_DELAY = 1200;
  const RETURN_UPDATE_COOLDOWN = 2500;
  const CLOUD_PULL_INTERVAL = 90 * 1000;
  const TOAST_COOLDOWN = 60 * 1000;

  const DEFAULT_SETTINGS = {
    defaultTab: 'changes',
    showToast: true,
    showBadge: true,
    lowStockRatio: 0.15,
    showTravelEstimate: false,
  };

  const DEFAULT_PANEL_STATE = {
    selectedTab: 'changes',
    selectedPort: '鯨歌港',
    isOpen: false,
    sortMode: 'lowStock',
  };

  let clickTimer = null;
  let observerTimer = null;
  let injectTimer = null;
  let panelRenderTimer = null;
  let launcherTimer = null;
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

  function normPort(value) {
    const clean = String(value || '').trim();
    return portNormalize[clean] || clean;
  }

  function normItem(value) {
    const clean = String(value || '').trim();
    return itemNormalize[clean] || clean;
  }

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

  function cloneJson(value) {
    return JSON.parse(JSON.stringify(value || {}));
  }

  function readJson(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return cloneJson(fallback);
      const parsed = JSON.parse(raw);
      return parsed && typeof parsed === 'object' ? parsed : cloneJson(fallback);
    } catch (error) {
      console.warn('[StellaTrade] localStorage 讀取失敗：', key, error);
      return cloneJson(fallback);
    }
  }

  function writeJson(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
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
    return readJson(DATA_KEY, null);
  }

  function writeData(data) {
    writeJson(DATA_KEY, data);
  }

  function readSeenData() {
    return readJson(SEEN_KEY, null);
  }

  function writeSeenData(data) {
    writeJson(SEEN_KEY, cleanMarketDataForCompare(data));
  }

  function readSettings() {
    return Object.assign({}, DEFAULT_SETTINGS, readJson(SETTINGS_KEY, DEFAULT_SETTINGS));
  }

  function writeSettings(settings) {
    writeJson(SETTINGS_KEY, Object.assign({}, DEFAULT_SETTINGS, settings || {}));
  }

  function readPanelState() {
    return Object.assign({}, DEFAULT_PANEL_STATE, readJson(PANEL_STATE_KEY, DEFAULT_PANEL_STATE));
  }

  function writePanelState(state) {
    writeJson(PANEL_STATE_KEY, Object.assign({}, DEFAULT_PANEL_STATE, state || {}));
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

  function cleanMarketDataForCompare(data) {
    const cleaned = {};
    const source = data && typeof data === 'object' ? data : {};

    for (const [rawPort, items] of Object.entries(source)) {
      const port = normPort(rawPort);
      if (!items || typeof items !== 'object') continue;
      if (!cleaned[port]) cleaned[port] = {};

      for (const [rawItem, info] of Object.entries(items)) {
        const item = normItem(rawItem);
        if (isInvalidItemName(item)) continue;
        const safe = info && typeof info === 'object' ? info : {};
        const count = num(safe.count ?? safe.quantity ?? safe.stock ?? safe.amount);
        cleaned[port][item] = {
          count: count ?? 0,
          max: num(safe.max),
          price: safe.price || '-',
          restock: safe.restockTime || safe.nextRestock || safe.restock || '-',
          time: safe.time || '未知'
        };
      }
    }

    return cleaned;
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

  function initializeSeenIfMissing() {
    const seen = readSeenData();
    if (seen && Object.keys(seen).length) return;
    writeSeenData(ensureData());
  }

  function getCleanPageText() {
    if (!document.body) return '';
    const clone = document.body.cloneNode(true);
    clone.querySelectorAll('#stella-trade-modal-backdrop, #stella-trade-launcher, #stella-trade-launcher-fallback, #stella-sync-toast, .stella-detail-goods').forEach(node => node.remove());
    return clone.innerText || '';
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

    if (compact.length >= 2 && compact.length <= 16 && !isInvalidItemName(compact)) return normItem(compact);
    return null;
  }

  function scanGoods(portDef) {
    const result = {};
    const elements = [...document.querySelectorAll('div, li, tr, section, article, button')];

    for (const el of elements) {
      if (!visible(el)) continue;
      if (el.closest('#stella-trade-modal-backdrop, #stella-trade-launcher, #stella-trade-launcher-fallback, #stella-sync-toast, .stella-detail-goods')) continue;

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
    const text = getCleanPageText();
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
    schedulePanelRender();
    scheduleLauncherUpdate();

    if (upload && uploadGoods.length) uploadToCloud(portDef.port, time, uploadGoods);
    if (changed > 0) console.log(`[StellaTrade] 已更新 ${portDef.port}：${changed} 項商品`);
    return true;
  }

  function markSyncSuccess() {
    syncState.ok = true;
    syncState.lastSuccessAt = Date.now();
    scheduleInject();
    schedulePanelRender();
    scheduleLauncherUpdate();
  }

  function markSyncFailure(type = 'sync', detail = '') {
    syncState.ok = false;
    syncState.lastFailureAt = Date.now();
    console.warn('[StellaTrade] 雲端同步失敗：', type, detail || '');

    const settings = readSettings();
    const now = Date.now();
    if (settings.showToast && now - lastToastAt >= TOAST_COOLDOWN) {
      lastToastAt = now;
      if (type === 'upload') {
        showSyncToast('⚠️ 上傳雲端失敗', '資料目前只保存在本機。請開啟梯子後重新整理，或等待下次自動同步。');
      } else {
        showSyncToast('⚠️ 雲端同步失敗', '請開啟梯子後重新整理，或等待下次自動同步。');
      }
    }

    scheduleInject();
    schedulePanelRender();
    scheduleLauncherUpdate();
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
      data: JSON.stringify({ action: 'update_v7', port: normPort(port), time, goods }),
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
          schedulePanelRender();
          scheduleLauncherUpdate();
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

  function currentAndSeen() {
    const current = cleanMarketDataForCompare(ensureData());
    let seen = readSeenData();
    if (!seen || !Object.keys(seen).length) {
      seen = cloneJson(current);
      writeSeenData(seen);
    } else {
      seen = cleanMarketDataForCompare(seen);
    }
    return { current, seen };
  }

  function compareMarketData(current, seen) {
    const changes = [];
    const portNames = new Set([...Object.keys(current || {}), ...Object.keys(seen || {})]);

    for (const port of portNames) {
      const currentItems = current[port] || {};
      const seenItems = seen[port] || {};
      const itemNames = new Set([...Object.keys(currentItems), ...Object.keys(seenItems)]);
      const itemChanges = [];

      for (const item of itemNames) {
        const nowInfo = currentItems[item];
        const oldInfo = seenItems[item];

        if (!oldInfo && nowInfo) {
          itemChanges.push({ type: 'new', item, oldInfo: null, newInfo: nowInfo });
          continue;
        }

        if (oldInfo && !nowInfo) {
          itemChanges.push({ type: 'removed', item, oldInfo, newInfo: null });
          continue;
        }

        const oldCount = Number(oldInfo.count ?? 0);
        const newCount = Number(nowInfo.count ?? 0);
        const oldMax = oldInfo.max ?? null;
        const newMax = nowInfo.max ?? null;
        const oldPrice = String(oldInfo.price ?? '-');
        const newPrice = String(nowInfo.price ?? '-');
        const oldRestock = String(oldInfo.restock ?? '-');
        const newRestock = String(nowInfo.restock ?? '-');

        if (oldCount !== newCount || oldMax !== newMax || oldPrice !== newPrice || oldRestock !== newRestock) {
          itemChanges.push({ type: 'changed', item, oldInfo, newInfo: nowInfo, delta: newCount - oldCount });
        }
      }

      if (itemChanges.length) changes.push({ port, items: itemChanges });
    }

    return changes;
  }

  function totalChangeCount(changes) {
    return changes.reduce((sum, port) => sum + port.items.length, 0);
  }

  function lowStock(info, settings = readSettings()) {
    const count = Number(info?.count ?? 0);
    const max = Number(info?.max ?? 0);
    if (max > 0) return count / max <= Number(settings.lowStockRatio || 0.15);
    return count <= 5;
  }

  function latestTimeForPort(items) {
    const times = Object.values(items || {})
      .map(info => String(info.time || '').trim())
      .filter(t => t && t !== '-' && t !== '尚未更新' && t !== '未知');
    if (!times.length) return '尚未更新';
    times.sort();
    return times[times.length - 1];
  }

  function itemStockText(info) {
    const count = Number(info?.count || 0);
    const max = Number(info?.max || 0);
    return max > 0 ? `${count}/${max}` : `${count}`;
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

  function renderSyncStatus(compact = false) {
    if (syncState.ok === true) {
      const time = syncState.lastSuccessAt ? `　最後同步 ${timeOnly(syncState.lastSuccessAt)}` : '';
      return `<div class="stella-sync-status stella-sync-ok"><span>雲端同步：正常${escapeHtml(time)}</span></div>`;
    }
    if (syncState.ok === false) {
      const time = syncState.lastFailureAt ? `　${timeOnly(syncState.lastFailureAt)}` : '';
      const prefix = compact ? '同步失敗' : '雲端同步：失敗';
      return `<div class="stella-sync-status stella-sync-fail"><span>${prefix}${escapeHtml(time)}　請開啟梯子同步</span></div>`;
    }
    return `<div class="stella-sync-status stella-sync-wait"><span>雲端同步：確認中</span></div>`;
  }

  function renderChangesTab(changes) {
    if (!changes.length) {
      return `
        <div class="stella-empty-state">
          <div class="stella-empty-icon">✓</div>
          <div class="stella-empty-title">目前沒有新的貨物變化</div>
          <div class="stella-empty-sub">同步後若有港口商品變化，會顯示在這裡。</div>
        </div>
      `;
    }

    return `
      <div class="stella-panel-toolbar">
        <div class="stella-panel-hint">自上次標記已讀後，共 ${totalChangeCount(changes)} 項變化。</div>
        <button class="stella-small-btn stella-read-btn" data-stella-action="mark-read">標記為已讀</button>
      </div>
      <div class="stella-change-list">
        ${changes.map(portChange => `
          <section class="stella-change-card">
            <div class="stella-change-port">${escapeHtml(portChange.port)}</div>
            <div class="stella-change-items">
              ${portChange.items.map(change => renderChangeItem(change)).join('')}
            </div>
          </section>
        `).join('')}
      </div>
    `;
  }

  function renderChangeItem(change) {
    const item = escapeHtml(change.item);

    if (change.type === 'new') {
      const info = change.newInfo;
      return `
        <div class="stella-change-row">
          <span class="stella-change-name">${item}</span>
          <span class="stella-change-pill stella-change-up">新增商品</span>
          <span class="stella-change-stock">${escapeHtml(itemStockText(info))}</span>
          <span class="stella-change-price">${escapeHtml(info.price || '-')} 魚幣</span>
        </div>
      `;
    }

    if (change.type === 'removed') {
      const info = change.oldInfo;
      return `
        <div class="stella-change-row">
          <span class="stella-change-name">${item}</span>
          <span class="stella-change-pill stella-change-muted">商品消失</span>
          <span class="stella-change-stock">原 ${escapeHtml(itemStockText(info))}</span>
          <span class="stella-change-price">${escapeHtml(info.price || '-')} 魚幣</span>
        </div>
      `;
    }

    const oldInfo = change.oldInfo;
    const newInfo = change.newInfo;
    const delta = Number(change.delta || 0);
    const deltaClass = delta > 0 ? 'stella-change-up' : delta < 0 ? 'stella-change-down' : 'stella-change-neutral';
    const deltaText = delta > 0 ? `+${delta}` : String(delta);
    const priceChanged = String(oldInfo.price ?? '-') !== String(newInfo.price ?? '-');
    const restockChanged = String(oldInfo.restock ?? '-') !== String(newInfo.restock ?? '-');

    return `
      <div class="stella-change-row">
        <span class="stella-change-name">${item}</span>
        <span class="stella-change-stock">${escapeHtml(itemStockText(oldInfo))} → ${escapeHtml(itemStockText(newInfo))}</span>
        <span class="stella-change-pill ${deltaClass}">${escapeHtml(deltaText)}</span>
        ${priceChanged ? `<span class="stella-change-pill stella-change-price-diff">${escapeHtml(oldInfo.price || '-')} → ${escapeHtml(newInfo.price || '-')}</span>` : ''}
        ${restockChanged ? `<span class="stella-change-pill stella-change-restock">補貨變化</span>` : ''}
      </div>
    `;
  }

  function renderOverviewTab(current, changes) {
    const settings = readSettings();
    const changeMap = new Map(changes.map(c => [c.port, c.items.length]));

    return `
      <div class="stella-overview-grid">
        ${ports.map(def => {
          const items = current[def.port] || {};
          const entries = Object.entries(items).filter(([name]) => !isInvalidItemName(name));
          const lowCount = entries.filter(([, info]) => lowStock(info, settings)).length;
          const changedCount = changeMap.get(def.port) || 0;
          const latest = latestTimeForPort(items);

          return `
            <button class="stella-overview-card ${changedCount ? 'stella-overview-changed' : ''}" data-stella-action="select-port" data-port="${escapeHtml(def.port)}">
              <div class="stella-overview-name">${escapeHtml(def.port)}</div>
              <div class="stella-overview-meta">${entries.length} 項商品</div>
              <div class="stella-overview-line">最後更新：${escapeHtml(latest)}</div>
              <div class="stella-overview-badges">
                <span class="${lowCount ? 'stella-badge-warn' : 'stella-badge-ok'}">低庫存 ${lowCount}</span>
                ${changedCount ? `<span class="stella-badge-change">變化 ${changedCount}</span>` : '<span class="stella-badge-muted">無變化</span>'}
              </div>
            </button>
          `;
        }).join('')}
      </div>
    `;
  }

  function sortedItemsForPort(items, sortMode, settings) {
    const entries = Object.entries(items || {}).filter(([name]) => !isInvalidItemName(name));

    return entries.sort((a, b) => {
      const [nameA, infoA] = a;
      const [nameB, infoB] = b;

      if (sortMode === 'name') return nameA.localeCompare(nameB, 'zh-Hant');

      if (sortMode === 'price') {
        const pa = num(infoA.price) ?? Number.MAX_SAFE_INTEGER;
        const pb = num(infoB.price) ?? Number.MAX_SAFE_INTEGER;
        return pa - pb || nameA.localeCompare(nameB, 'zh-Hant');
      }

      if (sortMode === 'time') {
        return String(infoB.time || '').localeCompare(String(infoA.time || '')) || nameA.localeCompare(nameB, 'zh-Hant');
      }

      const lowA = lowStock(infoA, settings) ? 0 : 1;
      const lowB = lowStock(infoB, settings) ? 0 : 1;
      const maxA = Number(infoA.max || 0);
      const maxB = Number(infoB.max || 0);
      const ratioA = maxA > 0 ? Number(infoA.count || 0) / maxA : Number(infoA.count || 0) / 9999;
      const ratioB = maxB > 0 ? Number(infoB.count || 0) / maxB : Number(infoB.count || 0) / 9999;
      return lowA - lowB || ratioA - ratioB || nameA.localeCompare(nameB, 'zh-Hant');
    });
  }

  function renderPortsTab(current, changes) {
    const state = readPanelState();
    const settings = readSettings();
    const selectedPort = ports.some(p => p.port === state.selectedPort) ? state.selectedPort : ports[0].port;
    const items = current[selectedPort] || {};
    const sorted = sortedItemsForPort(items, state.sortMode || 'lowStock', settings);
    const changePort = changes.find(c => c.port === selectedPort);
    const changeByItem = new Map((changePort?.items || []).map(c => [c.item, c]));

    return `
      <div class="stella-port-layout">
        <aside class="stella-port-nav">
          ${ports.map(def => `
            <button class="stella-port-nav-btn ${def.port === selectedPort ? 'active' : ''}" data-stella-action="select-port" data-port="${escapeHtml(def.port)}">
              ${escapeHtml(def.port)}
            </button>
          `).join('')}
        </aside>
        <section class="stella-port-detail">
          <div class="stella-port-detail-head">
            <div>
              <div class="stella-port-detail-title">${escapeHtml(selectedPort)}</div>
              <div class="stella-port-detail-sub">${sorted.length} 項商品，最後更新 ${escapeHtml(latestTimeForPort(items))}</div>
            </div>
            <label class="stella-sort-label">
              排序
              <select data-stella-setting="sortMode" class="stella-select">
                <option value="lowStock" ${state.sortMode === 'lowStock' ? 'selected' : ''}>低庫存</option>
                <option value="time" ${state.sortMode === 'time' ? 'selected' : ''}>更新時間</option>
                <option value="price" ${state.sortMode === 'price' ? 'selected' : ''}>價格</option>
                <option value="name" ${state.sortMode === 'name' ? 'selected' : ''}>商品名稱</option>
              </select>
            </label>
          </div>
          <div class="stella-goods-table">
            ${sorted.map(([itemName, info]) => renderPortItemRow(itemName, info, changeByItem.get(itemName), settings)).join('') || '<div class="stella-empty-line">目前沒有商品資料</div>'}
          </div>
        </section>
      </div>
    `;
  }

  function renderPortItemRow(itemName, info, change, settings) {
    const count = Number(info.count || 0);
    const max = Number(info.max || 0);
    const price = info.price && info.price !== '-' ? `${info.price} 魚幣` : '-';
    const low = lowStock(info, settings);
    const changeHtml = change ? renderMiniChange(change) : '<span class="stella-mini-muted">-</span>';

    return `
      <div class="stella-good-row ${low ? 'low' : ''}">
        <div class="stella-good-main">
          <div class="stella-good-name">${escapeHtml(itemName)}</div>
          <div class="stella-good-meta">更新：${escapeHtml(info.time || '尚未更新')}　補貨：${escapeHtml(info.restock || '-')}</div>
        </div>
        <div class="stella-good-stock" style="color:${stockColor(count, max)};">${escapeHtml(itemStockText(info))}</div>
        <div class="stella-good-price">${escapeHtml(price)}</div>
        <div class="stella-good-change">${changeHtml}</div>
      </div>
    `;
  }

  function renderMiniChange(change) {
    if (change.type === 'new') return '<span class="stella-mini-up">新增</span>';
    if (change.type === 'removed') return '<span class="stella-mini-muted">消失</span>';
    const delta = Number(change.delta || 0);
    if (delta > 0) return `<span class="stella-mini-up">+${delta}</span>`;
    if (delta < 0) return `<span class="stella-mini-down">${delta}</span>`;
    return '<span class="stella-mini-warn">變更</span>';
  }

  function renderSettingsTab() {
    const settings = readSettings();

    return `
      <div class="stella-settings-list">
        <label class="stella-setting-row">
          <div>
            <div class="stella-setting-title">顯示同步失敗提示</div>
            <div class="stella-setting-sub">失敗時右上角跳出提醒。</div>
          </div>
          <input type="checkbox" data-stella-setting="showToast" ${settings.showToast ? 'checked' : ''}>
        </label>

        <label class="stella-setting-row">
          <div>
            <div class="stella-setting-title">顯示變化角標</div>
            <div class="stella-setting-sub">上方跑商情報按鈕顯示變化數字。</div>
          </div>
          <input type="checkbox" data-stella-setting="showBadge" ${settings.showBadge ? 'checked' : ''}>
        </label>

        <label class="stella-setting-row">
          <div>
            <div class="stella-setting-title">顯示航程預估</div>
            <div class="stella-setting-sub">在港口下方簡化資訊中顯示預計到達與返航。</div>
          </div>
          <input type="checkbox" data-stella-setting="showTravelEstimate" ${settings.showTravelEstimate ? 'checked' : ''}>
        </label>

        <label class="stella-setting-row">
          <div>
            <div class="stella-setting-title">開啟面板預設頁</div>
            <div class="stella-setting-sub">下次打開情報面板時優先顯示。</div>
          </div>
          <select class="stella-select" data-stella-setting="defaultTab">
            <option value="changes" ${settings.defaultTab === 'changes' ? 'selected' : ''}>變化</option>
            <option value="overview" ${settings.defaultTab === 'overview' ? 'selected' : ''}>概覽</option>
            <option value="ports" ${settings.defaultTab === 'ports' ? 'selected' : ''}>港口</option>
          </select>
        </label>

        <label class="stella-setting-row">
          <div>
            <div class="stella-setting-title">低庫存比例</div>
            <div class="stella-setting-sub">低於比例時，港口與商品會被標記。</div>
          </div>
          <select class="stella-select" data-stella-setting="lowStockRatio">
            <option value="0.10" ${Number(settings.lowStockRatio) === 0.10 ? 'selected' : ''}>10%</option>
            <option value="0.15" ${Number(settings.lowStockRatio) === 0.15 ? 'selected' : ''}>15%</option>
            <option value="0.20" ${Number(settings.lowStockRatio) === 0.20 ? 'selected' : ''}>20%</option>
            <option value="0.25" ${Number(settings.lowStockRatio) === 0.25 ? 'selected' : ''}>25%</option>
          </select>
        </label>

        <div class="stella-setting-actions">
          <button class="stella-danger-btn" data-stella-action="reset-seen">重置變化紀錄</button>
          <button class="stella-small-btn" data-stella-action="manual-sync">立即同步雲端</button>
        </div>
      </div>
    `;
  }

  function renderPanel() {
    const state = readPanelState();
    if (!state.isOpen) {
      document.getElementById('stella-trade-modal-backdrop')?.remove();
      return;
    }

    const settings = readSettings();
    const { current, seen } = currentAndSeen();
    const changes = compareMarketData(current, seen);
    const changeCount = totalChangeCount(changes);
    const selectedTab = ['changes', 'overview', 'ports', 'settings'].includes(state.selectedTab) ? state.selectedTab : settings.defaultTab;

    let bodyHtml = '';
    if (selectedTab === 'overview') bodyHtml = renderOverviewTab(current, changes);
    else if (selectedTab === 'ports') bodyHtml = renderPortsTab(current, changes);
    else if (selectedTab === 'settings') bodyHtml = renderSettingsTab();
    else bodyHtml = renderChangesTab(changes);

    const panelHtml = `
      <div id="stella-trade-modal-backdrop">
        <div id="stella-trade-panel" role="dialog" aria-label="跑商情報站">
          <div class="stella-panel-header">
            <div>
              <div class="stella-panel-title">🚢 跑商情報站</div>
              <div class="stella-panel-subtitle">港口庫存・價格・變化追蹤</div>
            </div>
            <div class="stella-panel-actions">
              <button class="stella-icon-btn" data-stella-action="manual-sync" title="立即同步">↻</button>
              <button class="stella-icon-btn" data-stella-action="close-panel" title="關閉">×</button>
            </div>
          </div>

          <div class="stella-panel-status-row">
            ${renderSyncStatus()}
            <div class="stella-change-summary ${changeCount ? 'has-change' : ''}">
              ${changeCount ? `有 ${changeCount} 項變化` : '沒有新的變化'}
            </div>
          </div>

          <nav class="stella-tabs">
            ${renderTabButton('changes', '變化', selectedTab, changeCount)}
            ${renderTabButton('overview', '概覽', selectedTab)}
            ${renderTabButton('ports', '港口', selectedTab)}
            ${renderTabButton('settings', '設定', selectedTab)}
          </nav>

          <div class="stella-panel-body">
            ${bodyHtml}
          </div>
        </div>
      </div>
    `;

    const old = document.getElementById('stella-trade-modal-backdrop');
    if (old) old.outerHTML = panelHtml;
    else document.body.insertAdjacentHTML('beforeend', panelHtml);
  }

  function renderTabButton(tab, label, selectedTab, count = 0) {
    return `
      <button class="stella-tab ${selectedTab === tab ? 'active' : ''}" data-stella-action="switch-tab" data-tab="${tab}">
        ${label}${count ? `<span>${count}</span>` : ''}
      </button>
    `;
  }

  function openPanel() {
    const settings = readSettings();
    const state = readPanelState();
    state.isOpen = true;
    if (!state.selectedTab || state.selectedTab === 'settings') state.selectedTab = settings.defaultTab || 'changes';
    writePanelState(state);
    renderPanel();
  }

  function closePanel() {
    const state = readPanelState();
    state.isOpen = false;
    writePanelState(state);
    renderPanel();
  }

  function schedulePanelRender() {
    clearTimeout(panelRenderTimer);
    panelRenderTimer = setTimeout(() => {
      const state = readPanelState();
      if (state.isOpen) renderPanel();
    }, 100);
  }

  function findNativeButtonBar() {
    const containers = [...document.querySelectorAll('nav, header, div')]
      .filter(el => visible(el) && !el.closest('#stella-trade-modal-backdrop, #stella-trade-launcher, #stella-trade-launcher-fallback'))
      .map(el => {
        const rect = el.getBoundingClientRect();
        const buttons = [...el.querySelectorAll('button, a, [role="button"]')].filter(visible);
        const text = String(el.innerText || '');
        return { el, rect, buttons, text };
      })
      .filter(x => {
        if (x.buttons.length < 2) return false;
        if (x.rect.top > 140) return false;
        if (x.rect.height > 96) return false;
        if (x.rect.width < 220) return false;
        if (x.text.length > 500) return false;
        return /出營|分莊|統計|我的隊伍|交戰|首頁|出海|市場|交易|Discord/.test(x.text);
      })
      .sort((a, b) => (a.rect.top - b.rect.top) || (b.buttons.length - a.buttons.length));

    return containers[0]?.el || null;
  }

  function ensureLauncherButton() {
    if (document.getElementById('stella-trade-launcher') || document.getElementById('stella-trade-launcher-fallback')) {
      updateLauncherButton();
      return;
    }

    const button = document.createElement('button');
    button.id = 'stella-trade-launcher';
    button.type = 'button';
    button.dataset.stellaAction = 'open-panel';
    button.className = 'stella-launcher-btn';

    const bar = findNativeButtonBar();
    if (bar) {
      bar.insertBefore(button, bar.firstElementChild || null);
    } else {
      button.id = 'stella-trade-launcher-fallback';
      document.body.appendChild(button);
    }

    updateLauncherButton();
  }

  function updateLauncherButton() {
    const btn = document.getElementById('stella-trade-launcher') || document.getElementById('stella-trade-launcher-fallback');
    if (!btn) return;

    const settings = readSettings();
    const { current, seen } = currentAndSeen();
    const changes = compareMarketData(current, seen);
    const count = totalChangeCount(changes);
    const fail = syncState.ok === false;

    btn.classList.toggle('stella-launcher-fail', fail);
    btn.classList.toggle('stella-launcher-changed', count > 0);

    const badge = settings.showBadge && count > 0 ? `<span class="stella-launcher-badge">${count}</span>` : '';
    const failBadge = fail ? '<span class="stella-launcher-alert">!</span>' : '';
    btn.innerHTML = `<span>跑商情報</span>${failBadge}${badge}`;
  }

  function scheduleLauncherUpdate() {
    clearTimeout(launcherTimer);
    launcherTimer = setTimeout(() => {
      ensureLauncherButton();
      updateLauncherButton();
    }, 120);
  }

  function markCurrentAsSeen() {
    writeSeenData(ensureData());
    schedulePanelRender();
    scheduleLauncherUpdate();
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

  function renderDetailGoods(portName, schedule) {
    const settings = readSettings();
    const data = ensureData();
    const entries = Object.entries(data[portName] || {}).filter(([name]) => !isInvalidItemName(name));
    const travelHtml = settings.showTravelEstimate ? renderTravel(schedule) : '';

    return `
      <div class="stella-detail-goods stella-detail-compact">
        ${travelHtml}
        ${renderSyncStatus(true)}
        <div class="stella-detail-goods-head"><span>貨物情報</span><span>${entries.length} 項</span></div>
        <div class="stella-detail-goods-grid">
          ${entries.map(([itemName, info]) => {
            const count = Number(info.count || 0);
            const max = Number(info.max || 0);
            const price = info.price && info.price !== '-' ? `${info.price} 魚幣` : '-';
            return `
              <div class="stella-detail-good">
                <div class="stella-detail-good-top">
                  <span class="stella-detail-name">${escapeHtml(itemName)}</span>
                  <span class="stella-detail-stock" style="color:${stockColor(count, max)};">${escapeHtml(itemStockText(info))}</span>
                  <span class="stella-detail-price">${escapeHtml(price)}</span>
                </div>
                <div class="stella-detail-meta">更新：${escapeHtml(info.time || '尚未更新')}　補貨：${escapeHtml(info.restock || '-')}</div>
              </div>
            `;
          }).join('') || '<div class="stella-detail-empty">目前沒有同步資料</div>'}
        </div>
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
    const matched = ports.filter(def => cleanText.includes(def.port) || def.keywords.some(keyword => cleanText.includes(keyword)));
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
      if (node.closest('#stella-trade-modal-backdrop')) continue;

      const text = String(node.innerText || '').trim();
      if (!text || text.length < 12 || text.length > 1600) continue;
      if (!/\b\d{1,3}:\d{2}(?::\d{2})?\b/.test(text)) continue;

      const portName = detectPortFromText(text);
      if (!portName) continue;
      if (portCount(text) > 2) continue;

      if (text.includes('首頁') || text.includes('倉庫') || text.includes('市場') || text.includes('Discord') || text.includes('職業') || text.includes('排行')) continue;

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
      target.insertAdjacentHTML('beforeend', renderDetailGoods(portName, schedule));
      used.add(context);
      break;
    }
  }

  function scheduleInject() {
    clearTimeout(injectTimer);
    injectTimer = setTimeout(injectGoods, 120);
  }

  function handleDocumentClick(event) {
    const actionEl = event.target.closest('[data-stella-action]');
    if (!actionEl) return;

    const action = actionEl.dataset.stellaAction;

    if (action === 'open-panel') {
      event.preventDefault();
      event.stopPropagation();
      openPanel();
      return;
    }

    if (!actionEl.closest('#stella-trade-modal-backdrop')) return;

    event.preventDefault();
    event.stopPropagation();

    if (action === 'close-panel') {
      closePanel();
      return;
    }

    if (action === 'switch-tab') {
      const state = readPanelState();
      state.selectedTab = actionEl.dataset.tab || 'changes';
      writePanelState(state);
      renderPanel();
      return;
    }

    if (action === 'select-port') {
      const state = readPanelState();
      state.selectedPort = normPort(actionEl.dataset.port || ports[0].port);
      state.selectedTab = 'ports';
      writePanelState(state);
      renderPanel();
      return;
    }

    if (action === 'mark-read') {
      markCurrentAsSeen();
      return;
    }

    if (action === 'reset-seen') {
      markCurrentAsSeen();
      showSyncToast('已重置變化紀錄', '目前資料已設為新的比對基準。');
      return;
    }

    if (action === 'manual-sync') {
      fetchCloudData({ silent: false });
      scrapeCurrentVisibleData({ upload: true, silent: true });
      return;
    }
  }

  function handleSettingChange(event) {
    const target = event.target;
    if (!target || !target.matches('[data-stella-setting]')) return;
    if (!target.closest('#stella-trade-modal-backdrop')) return;

    const key = target.dataset.stellaSetting;

    if (key === 'sortMode') {
      const state = readPanelState();
      state.sortMode = target.value;
      writePanelState(state);
      renderPanel();
      return;
    }

    const settings = readSettings();

    if (target.type === 'checkbox') settings[key] = target.checked;
    else if (key === 'lowStockRatio') settings[key] = Number(target.value);
    else settings[key] = target.value;

    writeSettings(settings);
    scheduleLauncherUpdate();
    scheduleInject();
    renderPanel();
  }

  function isReturnClickTarget(target) {
    if (!target || !target.closest) return false;
    const el = target.closest('button, a, div, span');
    if (!el || el.closest('#stella-trade-modal-backdrop, #stella-trade-launcher, #stella-trade-launcher-fallback')) return false;
    const text = String(el.innerText || el.textContent || '').trim();
    return text.includes('返航') || text.includes('返回') || text.includes('離港') || text.includes('离港') || text.includes('出發') || text.includes('出发');
  }

  function handleInteraction(event) {
    if (event.target.closest?.('#stella-trade-modal-backdrop, #stella-trade-launcher, #stella-trade-launcher-fallback')) return;
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
    document.addEventListener('click', handleDocumentClick, true);
    document.addEventListener('change', handleSettingChange, true);
    document.addEventListener('pointerup', handleInteraction, true);
    document.addEventListener('touchend', handleInteraction, true);
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
        scheduleLauncherUpdate();
      }, 800);
    });

    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
  }

  function installStyles() {
    if (document.getElementById('stella-trade-style')) return;

    const style = document.createElement('style');
    style.id = 'stella-trade-style';
    style.textContent = `
      .stella-launcher-btn,
      #stella-trade-launcher-fallback {
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        gap: 6px !important;
        min-height: 30px !important;
        padding: 5px 12px !important;
        border: 1px solid rgba(135, 180, 255, 0.55) !important;
        border-radius: 7px !important;
        background: linear-gradient(180deg, #5064c8, #38478d) !important;
        color: #fff !important;
        font-weight: 900 !important;
        font-size: 14px !important;
        line-height: 1 !important;
        box-shadow: inset 0 1px 0 rgba(255,255,255,0.18), 0 3px 10px rgba(0,0,0,0.22) !important;
        cursor: pointer !important;
        user-select: none !important;
        white-space: nowrap !important;
        font-family: inherit !important;
      }

      .stella-launcher-btn:hover,
      #stella-trade-launcher-fallback:hover {
        filter: brightness(1.14) !important;
      }

      .stella-launcher-btn.stella-launcher-changed,
      #stella-trade-launcher-fallback.stella-launcher-changed {
        background: linear-gradient(180deg, #35ad94, #207767) !important;
      }

      .stella-launcher-btn.stella-launcher-fail,
      #stella-trade-launcher-fallback.stella-launcher-fail {
        background: linear-gradient(180deg, #e46a78, #9f3544) !important;
      }

      #stella-trade-launcher-fallback {
        position: fixed !important;
        top: 14px !important;
        left: 325px !important;
        right: auto !important;
        z-index: 2147483000 !important;
      }

      .stella-launcher-badge,
      .stella-launcher-alert {
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        min-width: 18px !important;
        height: 18px !important;
        padding: 0 5px !important;
        border-radius: 999px !important;
        font-size: 12px !important;
        font-weight: 950 !important;
        color: #223 !important;
        background: #ffd166 !important;
      }

      .stella-launcher-alert {
        color: #fff !important;
        background: #ff4d5e !important;
      }

      #stella-trade-modal-backdrop {
        position: fixed !important;
        inset: 0 !important;
        z-index: 2147483200 !important;
        background: rgba(3, 8, 18, 0.48) !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        padding: 22px !important;
        box-sizing: border-box !important;
      }

      #stella-trade-panel {
        width: min(920px, calc(100vw - 28px)) !important;
        height: min(82vh, 780px) !important;
        max-height: min(82vh, 780px) !important;
        min-height: 620px !important;
        display: flex !important;
        flex-direction: column !important;
        border: 1px solid rgba(159, 190, 255, 0.38) !important;
        border-radius: 14px !important;
        background: linear-gradient(180deg, rgba(55, 64, 103, 0.98), rgba(31, 36, 58, 0.98)) !important;
        color: #eef4ff !important;
        box-shadow: 0 24px 72px rgba(0,0,0,0.48), inset 0 1px 0 rgba(255,255,255,0.08) !important;
        overflow: hidden !important;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans TC", sans-serif !important;
      }

      .stella-panel-header {
        display: flex !important;
        justify-content: space-between !important;
        align-items: center !important;
        gap: 14px !important;
        padding: 16px 18px 12px !important;
        background: rgba(80, 94, 150, 0.72) !important;
        border-bottom: 1px solid rgba(185, 203, 255, 0.16) !important;
      }

      .stella-panel-title {
        font-size: 22px !important;
        font-weight: 950 !important;
        color: #fff !important;
      }

      .stella-panel-subtitle {
        margin-top: 3px !important;
        font-size: 12px !important;
        color: #cbd8ff !important;
      }

      .stella-panel-actions {
        display: flex !important;
        gap: 8px !important;
      }

      .stella-icon-btn {
        width: 32px !important;
        height: 32px !important;
        border-radius: 999px !important;
        border: 1px solid rgba(210,220,255,0.25) !important;
        background: rgba(255,255,255,0.10) !important;
        color: #eaf0ff !important;
        font-size: 18px !important;
        font-weight: 900 !important;
        cursor: pointer !important;
      }

      .stella-panel-status-row {
        display: grid !important;
        grid-template-columns: 1fr auto !important;
        gap: 10px !important;
        padding: 12px 18px 0 !important;
        align-items: center !important;
      }

      .stella-sync-status,
      .stella-change-summary {
        padding: 8px 10px !important;
        border-radius: 10px !important;
        font-size: 12px !important;
        font-weight: 850 !important;
        line-height: 1.35 !important;
        box-sizing: border-box !important;
      }

      .stella-sync-ok {
        color: #b8ffe0 !important;
        border: 1px solid rgba(114, 240, 178, 0.28) !important;
        background: rgba(41, 150, 107, 0.20) !important;
      }

      .stella-sync-fail {
        color: #ffd1d1 !important;
        border: 1px solid rgba(255, 107, 107, 0.36) !important;
        background: rgba(180, 45, 55, 0.22) !important;
      }

      .stella-sync-wait {
        color: #d7e6ff !important;
        border: 1px solid rgba(150, 185, 255, 0.26) !important;
        background: rgba(80, 110, 180, 0.20) !important;
      }

      .stella-change-summary {
        color: #cfd8ff !important;
        border: 1px solid rgba(160, 180, 255, 0.18) !important;
        background: rgba(255,255,255,0.06) !important;
        white-space: nowrap !important;
      }

      .stella-change-summary.has-change {
        color: #fff3c4 !important;
        border-color: rgba(255, 209, 102, 0.32) !important;
        background: rgba(255, 209, 102, 0.13) !important;
      }

      .stella-tabs {
        display: flex !important;
        gap: 6px !important;
        padding: 12px 18px 0 !important;
      }

      .stella-tab {
        position: relative !important;
        border: 1px solid rgba(185, 203, 255, 0.18) !important;
        background: rgba(255,255,255,0.08) !important;
        color: #dbe4ff !important;
        border-radius: 10px 10px 0 0 !important;
        padding: 9px 16px !important;
        font-weight: 900 !important;
        cursor: pointer !important;
      }

      .stella-tab.active {
        background: rgba(125, 145, 215, 0.50) !important;
        color: #fff !important;
      }

      .stella-tab span {
        margin-left: 6px !important;
        padding: 1px 6px !important;
        border-radius: 999px !important;
        background: #ffd166 !important;
        color: #1f243a !important;
        font-size: 11px !important;
      }

      .stella-panel-body {
        padding: 14px 18px 18px !important;
        overflow: auto !important;
        min-height: 0 !important;
        flex: 1 1 auto !important;
      }

      .stella-panel-toolbar {
        display: flex !important;
        justify-content: space-between !important;
        align-items: center !important;
        gap: 10px !important;
        margin-bottom: 12px !important;
      }

      .stella-panel-hint {
        color: #cbd8ff !important;
        font-size: 13px !important;
      }

      .stella-small-btn,
      .stella-danger-btn {
        border: 1px solid rgba(185, 203, 255, 0.28) !important;
        border-radius: 8px !important;
        background: rgba(88, 110, 190, 0.55) !important;
        color: #fff !important;
        font-weight: 900 !important;
        padding: 8px 12px !important;
        cursor: pointer !important;
      }

      .stella-danger-btn {
        background: rgba(180, 60, 78, 0.62) !important;
        border-color: rgba(255, 140, 150, 0.35) !important;
      }

      .stella-change-list,
      .stella-overview-grid,
      .stella-settings-list {
        display: grid !important;
        gap: 10px !important;
      }

      .stella-change-card,
      .stella-overview-card,
      .stella-setting-row,
      .stella-port-detail {
        border: 1px solid rgba(185, 203, 255, 0.18) !important;
        background: rgba(18, 23, 38, 0.42) !important;
        border-radius: 12px !important;
        padding: 12px !important;
        box-sizing: border-box !important;
      }

      .stella-change-port {
        font-size: 17px !important;
        font-weight: 950 !important;
        color: #fff !important;
        margin-bottom: 8px !important;
      }

      .stella-change-items {
        display: grid !important;
        gap: 6px !important;
      }

      .stella-change-row {
        display: flex !important;
        flex-wrap: wrap !important;
        align-items: center !important;
        gap: 8px !important;
        padding: 8px 9px !important;
        border-radius: 9px !important;
        background: rgba(255,255,255,0.055) !important;
      }

      .stella-change-name {
        min-width: 92px !important;
        font-weight: 900 !important;
        color: #f6f8ff !important;
      }

      .stella-change-stock,
      .stella-change-price {
        color: #dbe5ff !important;
        font-size: 12px !important;
      }

      .stella-change-pill,
      .stella-mini-up,
      .stella-mini-down,
      .stella-mini-warn,
      .stella-mini-muted,
      .stella-badge-ok,
      .stella-badge-warn,
      .stella-badge-change,
      .stella-badge-muted {
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        border-radius: 999px !important;
        padding: 2px 7px !important;
        font-size: 11px !important;
        font-weight: 950 !important;
      }

      .stella-change-up,
      .stella-mini-up,
      .stella-badge-ok {
        color: #7affbd !important;
        background: rgba(87, 220, 148, 0.12) !important;
      }

      .stella-change-down,
      .stella-mini-down,
      .stella-badge-warn {
        color: #ff8585 !important;
        background: rgba(255, 107, 107, 0.14) !important;
      }

      .stella-change-neutral,
      .stella-mini-warn,
      .stella-change-price-diff,
      .stella-change-restock,
      .stella-badge-change {
        color: #ffd166 !important;
        background: rgba(255, 209, 102, 0.13) !important;
      }

      .stella-change-muted,
      .stella-mini-muted,
      .stella-badge-muted {
        color: #b7c1d8 !important;
        background: rgba(255,255,255,0.08) !important;
      }

      .stella-overview-grid {
        grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)) !important;
      }

      .stella-overview-card {
        text-align: left !important;
        color: #eaf0ff !important;
        cursor: pointer !important;
        font-family: inherit !important;
      }

      .stella-overview-card:hover {
        filter: brightness(1.12) !important;
      }

      .stella-overview-changed {
        border-color: rgba(255, 209, 102, 0.45) !important;
        box-shadow: 0 0 0 1px rgba(255, 209, 102, 0.12) inset !important;
      }

      .stella-overview-name,
      .stella-port-detail-title {
        font-size: 17px !important;
        font-weight: 950 !important;
        color: #fff !important;
      }

      .stella-overview-meta,
      .stella-port-detail-sub,
      .stella-overview-line {
        color: #c8d4f8 !important;
        font-size: 12px !important;
        margin-top: 5px !important;
      }

      .stella-overview-badges {
        display: flex !important;
        flex-wrap: wrap !important;
        gap: 6px !important;
        margin-top: 10px !important;
      }

      .stella-port-layout {
        display: grid !important;
        grid-template-columns: 160px 1fr !important;
        gap: 12px !important;
      }

      .stella-port-nav {
        display: grid !important;
        align-content: start !important;
        gap: 8px !important;
      }

      .stella-port-nav-btn {
        width: 100% !important;
        padding: 10px !important;
        border-radius: 10px !important;
        border: 1px solid rgba(185, 203, 255, 0.18) !important;
        background: rgba(255,255,255,0.07) !important;
        color: #dbe4ff !important;
        text-align: left !important;
        font-weight: 900 !important;
        cursor: pointer !important;
      }

      .stella-port-nav-btn.active {
        color: #fff !important;
        background: rgba(85, 190, 165, 0.32) !important;
        border-color: rgba(120, 255, 220, 0.35) !important;
      }

      .stella-port-detail-head {
        display: flex !important;
        justify-content: space-between !important;
        gap: 12px !important;
        align-items: start !important;
        margin-bottom: 12px !important;
      }

      .stella-sort-label {
        display: grid !important;
        gap: 5px !important;
        color: #c8d4f8 !important;
        font-size: 12px !important;
        font-weight: 800 !important;
      }

      .stella-select {
        min-width: 110px !important;
        border: 1px solid rgba(185, 203, 255, 0.25) !important;
        border-radius: 8px !important;
        background: rgba(14, 18, 31, 0.92) !important;
        color: #fff !important;
        padding: 7px 9px !important;
        font-weight: 800 !important;
      }

      .stella-goods-table {
        display: grid !important;
        gap: 7px !important;
      }

      .stella-good-row {
        display: grid !important;
        grid-template-columns: minmax(140px, 1fr) auto auto auto !important;
        gap: 10px !important;
        align-items: center !important;
        padding: 9px 10px !important;
        border-radius: 10px !important;
        background: rgba(255,255,255,0.055) !important;
        border: 1px solid rgba(185, 203, 255, 0.10) !important;
      }

      .stella-good-row.low {
        border-color: rgba(255, 107, 107, 0.35) !important;
      }

      .stella-good-name {
        color: #fff !important;
        font-weight: 950 !important;
      }

      .stella-good-meta {
        color: #b7c1d8 !important;
        font-size: 10px !important;
        margin-top: 3px !important;
      }

      .stella-good-stock,
      .stella-good-price,
      .stella-good-change {
        font-size: 12px !important;
        font-weight: 950 !important;
        white-space: nowrap !important;
      }

      .stella-good-price {
        color: #ffd166 !important;
      }

      .stella-setting-row {
        display: flex !important;
        align-items: center !important;
        justify-content: space-between !important;
        gap: 14px !important;
      }

      .stella-setting-title {
        font-size: 14px !important;
        font-weight: 950 !important;
        color: #fff !important;
      }

      .stella-setting-sub {
        color: #b7c1d8 !important;
        font-size: 12px !important;
        margin-top: 3px !important;
      }

      .stella-setting-actions {
        display: flex !important;
        gap: 8px !important;
        flex-wrap: wrap !important;
        margin-top: 4px !important;
      }

      .stella-empty-state {
        text-align: center !important;
        padding: 42px 12px !important;
        border: 1px dashed rgba(185, 203, 255, 0.22) !important;
        border-radius: 14px !important;
        color: #c8d4f8 !important;
      }

      .stella-empty-icon {
        width: 44px !important;
        height: 44px !important;
        margin: 0 auto 12px !important;
        border-radius: 999px !important;
        display: grid !important;
        place-items: center !important;
        background: rgba(114, 240, 178, 0.12) !important;
        color: #7affbd !important;
        font-size: 24px !important;
        font-weight: 950 !important;
      }

      .stella-empty-title {
        color: #fff !important;
        font-size: 16px !important;
        font-weight: 950 !important;
      }

      .stella-empty-sub,
      .stella-empty-line {
        color: #b7c1d8 !important;
        margin-top: 6px !important;
        font-size: 12px !important;
      }

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

      .stella-detail-goods-head {
        display: flex !important;
        justify-content: space-between !important;
        align-items: center !important;
        margin-bottom: 10px !important;
        color: #92f5d3 !important;
        font-weight: 900 !important;
        font-size: 14px !important;
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

      .stella-travel-schedule {
        margin-bottom: 12px !important;
        padding: 10px !important;
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
      }

      .stella-travel-label {
        display: block !important;
        margin-bottom: 3px !important;
        color: #b6cfc8 !important;
        font-size: 10px !important;
      }

      .stella-travel-grid strong {
        color: #fff3c4 !important;
        font-size: 13px !important;
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


      @media (max-height: 650px) {
        #stella-trade-panel {
          min-height: 0 !important;
          height: calc(100vh - 36px) !important;
          max-height: calc(100vh - 36px) !important;
        }

        #stella-trade-modal-backdrop {
          padding-top: 8px !important;
          padding-bottom: 8px !important;
        }
      }

      @media (max-width: 720px) {
        #stella-trade-modal-backdrop {
          align-items: flex-start !important;
          padding: 12px !important;
          padding-bottom: 80px !important;
        }

        #stella-trade-panel {
          width: calc(100vw - 24px) !important;
          height: calc(100vh - 96px) !important;
          max-height: calc(100vh - 96px) !important;
          min-height: 520px !important;
        }

        .stella-panel-header,
        .stella-panel-status-row,
        .stella-tabs,
        .stella-panel-body {
          padding-left: 12px !important;
          padding-right: 12px !important;
        }

        .stella-panel-title {
          font-size: 19px !important;
        }

        .stella-panel-status-row {
          grid-template-columns: 1fr !important;
        }

        .stella-tabs {
          overflow-x: auto !important;
        }

        .stella-tab {
          flex: 0 0 auto !important;
          padding: 8px 13px !important;
        }

        .stella-port-layout {
          grid-template-columns: 1fr !important;
        }

        .stella-port-nav {
          display: flex !important;
          overflow-x: auto !important;
        }

        .stella-port-nav-btn {
          flex: 0 0 auto !important;
          width: auto !important;
        }

        .stella-port-detail-head {
          display: grid !important;
        }

        .stella-good-row {
          grid-template-columns: 1fr !important;
          gap: 5px !important;
        }

        .stella-setting-row {
          align-items: flex-start !important;
        }

        #stella-trade-launcher-fallback {
          top: 12px !important;
          right: 12px !important;
        }

        #stella-sync-toast {
          top: 12px !important;
          left: 12px !important;
          right: 12px !important;
          width: auto !important;
        }

        #stella-trade-launcher-fallback {
          top: 12px !important;
          left: 12px !important;
          right: auto !important;
        }
      }
    `;

    document.head.appendChild(style);
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
    initializeSeenIfMissing();
    installStyles();
    setupObserver();
    setupListeners();
    ensureLauncherButton();
    scheduleInject();
    scheduleLauncherUpdate();

    setTimeout(() => {
      fetchCloudData({ silent: true });
      scrapeCurrentVisibleData({ upload: false, silent: true });
      scheduleInject();
      scheduleLauncherUpdate();
    }, 1000);

    setInterval(() => {
      ensureLauncherButton();
      if (Date.now() - lastCloudPullAt >= CLOUD_PULL_INTERVAL) fetchCloudData({ silent: true });
    }, CLOUD_PULL_INTERVAL);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => start());
    start();
  } else {
    start();
  }
})();
