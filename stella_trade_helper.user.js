// ==UserScript==
// @name         閒著上鉤-雲端同步跑商情報站
// @namespace    https://github.com/szerra/stella-trade-helper
// @version      1.5.0
// @description  跑商情報面板：嵌入目前選中港口詳情卡，顯示貨物情報、預計到達與預計返航，支援 GitHub 自動更新。
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

(function () {
  'use strict';

  console.log('[StellaTrade 1.5.0-detail-card] 腳本已載入');

  const GOOGLE_API_URL = 'https://script.google.com/macros/s/AKfycbyWdyVKqvwF2SlC8mrJKebK6vg3wsRLsrK4El8ziRj9o4tDV4oz4-rkHJRiWc36wG_pBA/exec';

  const STORAGE_KEY_DATA = 'stella_real_market_data';
  const STORAGE_KEY_SELECTED_PORT = 'stella_selected_port';

  const CLICK_UPDATE_DELAY = 1200;
  const RETURN_UPDATE_COOLDOWN = 2500;
  const CLOUD_PULL_INTERVAL = 90 * 1000;

  let syncTimer = null;
  let clickUpdateTimer = null;
  let lastClickUpdateAt = 0;
  let lastCloudPullAt = 0;
  let appStarted = false;
  let observerReady = false;
  let clickListenerReady = false;
  let injectTimer = null;

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

  const portDefinitions = [
    {
      port: '星沉灣',
      keywords: ['星沉', '星沉灣', '星沉湾'],
      items: ['星砂瓶', '海妖咖啡', '浮夢拿鐵', '礁糖瑪奇朵', '小急救包']
    },
    {
      port: '夜帆市',
      keywords: ['夜帆'],
      items: ['夜帆布', '夜帆絹', '米酒', '烈酒', '安神貝露', '黑潮摩卡', '中急救包']
    },
    {
      port: '鯨歌港',
      keywords: ['鯨歌', '鲸歌'],
      items: ['鯨歌骨笛', '海妖咖啡', '安神貝露']
    },
    {
      port: '潮鏡礁',
      keywords: ['潮鏡', '潮镜'],
      items: ['潮鏡貝', '礁糖瑪奇朵']
    },
    {
      port: '霧燈群島',
      keywords: ['霧燈', '雾灯', '擺燈', '摆灯'],
      items: ['霧燈芯', '航霧銅牌', '浮夢拿鐵', '黑潮摩卡', '幻潮冷萃']
    },
    {
      port: '珊文港',
      keywords: ['珊文'],
      items: ['珊文簽']
    }
  ];

  function normalizePort(name) {
    const clean = String(name || '').trim();
    return portNormalize[clean] || clean;
  }

  function normalizeItem(name) {
    const clean = String(name || '').trim();
    return itemNormalize[clean] || clean;
  }

  function normalizeNumber(value) {
    if (value === null || value === undefined || value === '') return null;

    const n = Number(String(value).replace(/,/g, '').trim());
    return Number.isFinite(n) ? n : null;
  }

  function getDisplayTime() {
    const d = new Date();

    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    const hh = String(d.getHours()).padStart(2, '0');
    const min = String(d.getMinutes()).padStart(2, '0');

    return `${yyyy}/${mm}/${dd} ${hh}:${min}`;
  }

  function makeDefaultItem(count = 0) {
    return {
      count,
      max: null,
      time: '尚未更新',
      price: '-',
      restock: '-'
    };
  }

  function getDefaultData() {
    const data = {};

    for (const def of portDefinitions) {
      data[def.port] = {};

      for (const item of def.items) {
        data[def.port][item] = makeDefaultItem(0);
      }
    }

    return data;
  }

  function readLocalData() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_DATA);
      return raw ? JSON.parse(raw) : null;
    } catch (error) {
      console.warn('[StellaTrade] 本地資料解析失敗，改用預設資料', error);
      return null;
    }
  }

  function writeLocalData(data) {
    localStorage.setItem(STORAGE_KEY_DATA, JSON.stringify(data));
  }

  function isInvalidItemName(name) {
    const text = String(name || '').trim();
    const lower = text.toLowerCase();

    if (!text) return true;
    if (text.length > 18) return true;

    if (/[。！？!?，,；;：:]/.test(text)) return true;

    if (
      text.includes('一次性') ||
      text.includes('醫療物品') ||
      text.includes('医疗物品') ||
      text.includes('流行的') ||
      text.includes('描述') ||
      text.includes('說明') ||
      text.includes('说明')
    ) {
      return true;
    }

    return (
      text.includes('類別') ||
      text.includes('类别') ||
      lower.includes('category') ||
      lower === 'coffee' ||
      lower === 'souvenir' ||
      text.includes('效果') ||
      text.includes('冷卻') ||
      text.includes('冷却') ||
      text.includes('成功') ||
      text.includes('失敗') ||
      text.includes('失败') ||
      text.includes('飲用') ||
      text.includes('饮用') ||
      text.includes('兌換') ||
      text.includes('兑换') ||
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
      text.includes('全部') ||
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

  function ensureLocalData() {
    let data = readLocalData();

    if (!data || typeof data !== 'object') {
      data = getDefaultData();
      writeLocalData(data);
      return data;
    }

    const defaults = getDefaultData();
    let changed = false;

    for (const [portName, itemsObj] of Object.entries({ ...data })) {
      const cleanPort = normalizePort(portName);

      if (cleanPort !== portName) {
        data[cleanPort] = Object.assign(data[cleanPort] || {}, itemsObj);
        delete data[portName];
        changed = true;
      }
    }

    for (const [portName, itemsObj] of Object.entries(data)) {
      if (!itemsObj || typeof itemsObj !== 'object') continue;

      for (const [itemName, info] of Object.entries({ ...itemsObj })) {
        if (isInvalidItemName(itemName)) {
          delete itemsObj[itemName];
          console.log('[StellaTrade] 已刪除誤新增商品：', portName, itemName);
          changed = true;
          continue;
        }

        const cleanItem = normalizeItem(itemName);

        if (cleanItem !== itemName) {
          itemsObj[cleanItem] = Object.assign(itemsObj[cleanItem] || {}, info);
          delete itemsObj[itemName];
          changed = true;
        }

        const finalInfo = itemsObj[cleanItem];

        if (finalInfo && typeof finalInfo === 'object' && 'updater' in finalInfo) {
          delete finalInfo.updater;
          changed = true;
        }
      }
    }

    for (const [portName, itemsObj] of Object.entries(defaults)) {
      if (!data[portName]) {
        data[portName] = {};
        changed = true;
      }

      for (const [itemName, defaultInfo] of Object.entries(itemsObj)) {
        if (!data[portName][itemName]) {
          data[portName][itemName] = { ...defaultInfo };
          changed = true;
          continue;
        }

        const info = data[portName][itemName];

        if (!('count' in info)) {
          info.count = 0;
          changed = true;
        }

        if (!('max' in info)) {
          info.max = null;
          changed = true;
        }

        if (!('time' in info)) {
          info.time = '尚未更新';
          changed = true;
        }

        if (!('price' in info)) {
          info.price = '-';
          changed = true;
        }

        if (!('restock' in info)) {
          info.restock = '-';
          changed = true;
        }
      }
    }

    if (changed) writeLocalData(data);
    return data;
  }

  function getPageText() {
    return document.body ? document.body.innerText || '' : '';
  }

  function detectCurrentPort(pageText) {
    return portDefinitions.find(def =>
      def.keywords.some(keyword => pageText.includes(keyword))
    ) || null;
  }

  function isTavernInquiryPage(pageText) {
    const text = String(pageText || '');

    return (
      text.includes('酒館傳聞') ||
      text.includes('酒馆传闻') ||
      text.includes('庫存情報') ||
      text.includes('库存情报') ||
      text.includes('打聽庫存') ||
      text.includes('打听库存')
    );
  }

  function getKnownItemNames() {
    const set = new Set();

    for (const def of portDefinitions) {
      for (const item of def.items) set.add(item);
    }

    for (const raw of Object.keys(itemNormalize)) set.add(raw);
    for (const clean of Object.values(itemNormalize)) set.add(clean);

    return [...set].filter(Boolean);
  }

  function getAliasesForItem(itemName) {
    const cleanTarget = normalizeItem(itemName);
    const aliases = new Set([itemName, cleanTarget]);

    for (const [raw, clean] of Object.entries(itemNormalize)) {
      if (clean === cleanTarget) aliases.add(raw);
    }

    return [...aliases].filter(Boolean);
  }

  function isVisibleElement(el) {
    if (!el || !el.isConnected) return false;

    const style = window.getComputedStyle(el);

    if (
      style.display === 'none' ||
      style.visibility === 'hidden' ||
      style.opacity === '0'
    ) {
      return false;
    }

    const rect = el.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0;
  }

  function extractStock(text) {
    const match = text.match(/(?:库存|庫存)\s*([0-9,]+)\s*\/\s*([0-9,]+)/);
    if (!match) return null;

    const count = normalizeNumber(match[1]);
    const max = normalizeNumber(match[2]);

    if (count === null || max === null) return null;

    return { count, max };
  }

  function extractPrice(text) {
    const labeled = text.match(/(?:價格|价格|售价|售價|單價|单价)[:：]?\s*([0-9,]+)/);
    if (labeled) return String(normalizeNumber(labeled[1]) ?? labeled[1]);

    const currency = text.match(/([0-9,]+)\s*(?:金币|金幣|鱼币|魚幣|幣|币)/);
    if (currency) return String(normalizeNumber(currency[1]) ?? currency[1]);

    return '-';
  }

  function extractRestock(text) {
    const match = text.match(
      /(?:補貨|补货|補貨時間|补货时间)[:：]?\s*([0-9/:.\-\s]+(?:上午|下午)?\s*[0-9/:.\-\s]*)/
    );

    return match ? match[1].trim() : '-';
  }

  function extractItemNameByKnownList(text, portDef) {
    const candidates = [...portDef.items, ...getKnownItemNames()];
    const uniqueCandidates = [...new Set(candidates)];

    for (const item of uniqueCandidates) {
      const aliases = getAliasesForItem(item);

      if (aliases.some(alias => text.includes(alias))) {
        return normalizeItem(item);
      }
    }

    return null;
  }

  function extractItemNameFallback(text) {
    if (isDetailTextBlock(text)) return null;

    const lines = text
      .split('\n')
      .map(x => x.trim())
      .filter(Boolean);

    for (const line of lines) {
      if (isInvalidItemName(line)) continue;
      if (/^[0-9,]+$/.test(line)) continue;

      if (line.length >= 2 && line.length <= 16) {
        return normalizeItem(line);
      }
    }

    const beforePrice = text.split(
      /(?:價格|价格|售價|售价|單價|单价|[0-9,]+\s*(?:金币|金幣|鱼币|魚幣|幣|币))/
    )[0];

    const compact = beforePrice
      .replace(/[\n\r\t]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    if (
      compact.length >= 2 &&
      compact.length <= 16 &&
      !isInvalidItemName(compact)
    ) {
      return normalizeItem(compact);
    }

    return null;
  }

  function scanGoodsFromCurrentPage(portDef, options = {}) {
    const { allowDetailBlocks = false } = options;
    const result = {};
    const elements = [...document.querySelectorAll('div, li, tr, section, article, button')];

    for (const el of elements) {
      if (!isVisibleElement(el)) continue;

      const text = el.innerText?.trim();
      if (!text || text.length > 900) continue;

      if (!allowDetailBlocks && isDetailTextBlock(text)) continue;

      const stockMatches = text.match(/(?:库存|庫存)\s*[0-9,]+\s*\/\s*[0-9,]+/g) || [];
      if (stockMatches.length !== 1) continue;

      const stock = extractStock(text);
      if (!stock) continue;

      let itemName = extractItemNameByKnownList(text, portDef);
      if (!itemName) itemName = extractItemNameFallback(text);
      if (!itemName) continue;
      if (isInvalidItemName(itemName)) continue;

      const info = {
        name: itemName,
        count: stock.count,
        max: stock.max,
        price: extractPrice(text),
        restock: extractRestock(text),
        rawText: text
      };

      const old = result[itemName];

      if (!old || text.length < old.rawText.length) {
        result[itemName] = info;
      }
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

  function getCurrentDataSource() {
    const pageText = getPageText();

    if (isTavernInquiryPage(pageText)) {
      return null;
    }

    const portDef = detectCurrentPort(pageText);
    if (!portDef) return null;

    return {
      portDef,
      source: 'port',
      goods: scanGoodsFromCurrentPage(portDef, {
        allowDetailBlocks: false
      })
    };
  }

  function scrapeCurrentVisibleData(options = {}) {
    const { upload = true, silent = true } = options;
    const source = getCurrentDataSource();

    if (!source || !source.portDef) {
      if (!silent) console.log('[StellaTrade] 未偵測到可同步港口');
      return false;
    }

    const { portDef, goods } = source;

    if (!goods.length) {
      if (!silent) console.log(`[StellaTrade] ${portDef.port} 沒有讀到商品列`);
      return false;
    }

    const data = ensureLocalData();
    if (!data[portDef.port]) data[portDef.port] = {};

    const timeStr = getDisplayTime();
    const uploadGoods = [];
    let changedCount = 0;

    for (const good of goods) {
      const itemName = normalizeItem(good.name);
      const oldInfo = data[portDef.port][itemName] || {};

      const newInfo = {
        count: good.count,
        max: good.max,
        time: timeStr,
        price: good.price || oldInfo.price || '-',
        restock: good.restock || oldInfo.restock || '-'
      };

      if (!data[portDef.port][itemName] || infoChanged(oldInfo, newInfo)) {
        data[portDef.port][itemName] = newInfo;
        changedCount++;
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

    writeLocalData(data);
    localStorage.setItem(STORAGE_KEY_SELECTED_PORT, portDef.port);
    scheduleInjectPortDetailCards();

    if (upload && uploadGoods.length) {
      uploadToCloud(portDef.port, timeStr, uploadGoods);
    }

    if (changedCount > 0) {
      console.log(`[StellaTrade] 已更新 ${portDef.port}：${changedCount} 項商品`);
    }

    return true;
  }

  function scrapeCurrentPortData(options = {}) {
    return scrapeCurrentVisibleData(options);
  }

  function uploadToCloud(port, displayTime, goods) {
    safeRequest({
      method: 'POST',
      url: GOOGLE_API_URL,
      data: JSON.stringify({
        action: 'update_v7',
        port: normalizePort(port),
        time: displayTime,
        goods
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      onload(response) {
        if (response.status === 200) {
          console.log('[StellaTrade] 上傳成功', response.responseText);
        } else {
          console.error('[StellaTrade] 上傳失敗', response.status, response.responseText);
        }
      },
      onerror(error) {
        console.error('[StellaTrade] 雲端連線失敗', error);
      }
    });
  }

  function parseCloudJsonResponse(response) {
    const text = String(response?.responseText || '').trim();

    if (!text) {
      return {
        ok: false,
        message: '雲端沒有回傳資料'
      };
    }

    if (text.startsWith('<!DOCTYPE') || text.startsWith('<html') || text.startsWith('<')) {
      return {
        ok: false,
        message: '雲端回傳 HTML，不是 JSON。請檢查 Apps Script 部署權限。',
        preview: text.slice(0, 300)
      };
    }

    try {
      return {
        ok: true,
        data: JSON.parse(text)
      };
    } catch (error) {
      return {
        ok: false,
        message: '雲端回傳格式不是有效 JSON',
        preview: text.slice(0, 300),
        error
      };
    }
  }

  function fetchCloudData(options = {}) {
    const { silent = true } = options;
    lastCloudPullAt = Date.now();

    safeRequest({
      method: 'GET',
      url: `${GOOGLE_API_URL}?_=${Date.now()}`,
      headers: {
        Accept: 'application/json,text/plain,*/*'
      },
      onload(response) {
        const parsed = parseCloudJsonResponse(response);

        if (!parsed.ok) {
          if (!silent) {
            console.warn(
              '[StellaTrade] 雲端同步略過：',
              parsed.message,
              parsed.preview || '',
              parsed.error || ''
            );
          }
          return;
        }

        try {
          const cloudData = parsed.data;
          const localData = ensureLocalData();
          let hasUpdate = false;

          for (const [port, items] of Object.entries(cloudData || {})) {
            const cleanPort = normalizePort(port);
            if (!localData[cleanPort]) localData[cleanPort] = {};

            for (const [item, info] of Object.entries(items || {})) {
              const cleanItem = normalizeItem(item);
              if (isInvalidItemName(cleanItem)) continue;

              const count = normalizeNumber(info.count ?? info.quantity ?? info.stock ?? info.amount);
              if (count === null) continue;

              localData[cleanPort][cleanItem] = {
                count,
                max: normalizeNumber(info.max) ?? localData[cleanPort][cleanItem]?.max ?? null,
                time: info.time || '未知',
                price: info.price || '-',
                restock: info.restockTime || info.nextRestock || info.restock || '-'
              };

              hasUpdate = true;
            }
          }

          if (hasUpdate) {
            writeLocalData(localData);
            scheduleInjectPortDetailCards();
            console.log('[StellaTrade] 雲端同步完成');
          }
        } catch (error) {
          console.error('[StellaTrade] 雲端資料套用失敗', error);
        }
      },
      onerror(error) {
        console.error('[StellaTrade] 雲端同步失敗', error);
      }
    });
  }

  function safeRequest(config) {
    if (typeof GM_xmlhttpRequest === 'function') {
      GM_xmlhttpRequest(config);
      return;
    }

    if (typeof GM !== 'undefined' && typeof GM.xmlHttpRequest === 'function') {
      GM.xmlHttpRequest(config);
      return;
    }

    console.warn('[StellaTrade] GM_xmlhttpRequest 不存在，請確認 Tampermonkey 權限');
  }

  function escapeHtml(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function getStockColor(count, max) {
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

  function parseTravelDurationFromText(text) {
    const sourceText = String(text || '');

    const matches = [...sourceText.matchAll(/\b(\d{1,3}):(\d{2})(?::(\d{2}))?\b/g)];

    if (!matches.length) return null;

    for (const match of matches) {
      const raw = match[0];
      const a = Number(match[1]);
      const b = Number(match[2]);
      const c = match[3] === undefined ? null : Number(match[3]);

      if (!Number.isFinite(a) || !Number.isFinite(b)) continue;
      if (b < 0 || b > 59) continue;

      let hours = 0;
      let minutes = 0;
      let seconds = 0;

      if (c === null) {
        // 遊戲中的 28:00 視為 28 分 00 秒
        hours = 0;
        minutes = a;
        seconds = b;
      } else {
        // 遊戲中的 2:45:00 視為 2 小時 45 分 00 秒
        if (!Number.isFinite(c) || c < 0 || c > 59) continue;

        hours = a;
        minutes = b;
        seconds = c;
      }

      const totalMs = ((hours * 60 * 60) + (minutes * 60) + seconds) * 1000;

      if (totalMs <= 0) continue;

      return {
        raw,
        hours,
        minutes,
        seconds,
        totalMs
      };
    }

    return null;
  }

  function isSameDate(a, b) {
    return (
      a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate()
    );
  }

  function isTomorrow(date, now) {
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);

    return isSameDate(date, tomorrow);
  }

  function formatClock(date, now = new Date()) {
    const hh = String(date.getHours()).padStart(2, '0');
    const mm = String(date.getMinutes()).padStart(2, '0');

    if (isSameDate(date, now)) {
      return `${hh}:${mm}`;
    }

    if (isTomorrow(date, now)) {
      return `明天 ${hh}:${mm}`;
    }

    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${month}/${day} ${hh}:${mm}`;
  }

  function buildTravelScheduleFromContext(context) {
    const text = String(context?.innerText || '');
    const duration = parseTravelDurationFromText(text);

    if (!duration) return null;

    const now = new Date();
    const arriveAt = new Date(now.getTime() + duration.totalMs);
    const returnAt = new Date(now.getTime() + duration.totalMs * 2);

    return {
      durationRaw: duration.raw,
      arriveAtText: formatClock(arriveAt, now),
      returnAtText: formatClock(returnAt, now)
    };
  }

  function renderTravelSchedule(schedule) {
    if (!schedule) return '';

    return `
      <div class="stella-travel-schedule">
        <div class="stella-travel-title">航程預估</div>
        <div class="stella-travel-grid">
          <div>
            <span class="stella-travel-label">航行時間</span>
            <strong>${escapeHtml(schedule.durationRaw)}</strong>
          </div>
          <div>
            <span class="stella-travel-label">預計到達</span>
            <strong>${escapeHtml(schedule.arriveAtText)}</strong>
          </div>
          <div>
            <span class="stella-travel-label">預計返航</span>
            <strong>${escapeHtml(schedule.returnAtText)}</strong>
          </div>
        </div>
      </div>
    `;
  }

  function renderDetailGoods(portName, schedule = null) {
    const data = ensureLocalData();
    const portData = data[portName] || {};
    const entries = Object.entries(portData).filter(([name]) => !isInvalidItemName(name));

    const travelHtml = renderTravelSchedule(schedule);

    if (!entries.length) {
      return `
        <div class="stella-detail-goods">
          ${travelHtml}
          <div class="stella-detail-goods-head">
            <span>貨物情報</span>
          </div>
          <div class="stella-detail-empty">目前沒有同步資料</div>
        </div>
      `;
    }

    const rows = entries.map(([itemName, info]) => {
      const count = Number(info.count || 0);
      const max = Number(info.max || 0);
      const stockText = max > 0 ? `${count}/${max}` : `${count}`;
      const color = getStockColor(count, max);
      const priceText = info.price && info.price !== '-' ? `${info.price} 魚幣` : '-';
      const timeText = info.time || '尚未更新';
      const restockText = info.restock || '-';

      return `
        <div class="stella-detail-good">
          <div class="stella-detail-good-top">
            <span class="stella-detail-name">${escapeHtml(itemName)}</span>
            <span class="stella-detail-stock" style="color:${color};">${escapeHtml(stockText)}</span>
            <span class="stella-detail-price">${escapeHtml(priceText)}</span>
          </div>
          <div class="stella-detail-meta">
            更新：${escapeHtml(timeText)}　補貨：${escapeHtml(restockText)}
          </div>
        </div>
      `;
    }).join('');

    return `
      <div class="stella-detail-goods">
        ${travelHtml}
        <div class="stella-detail-goods-head">
          <span>貨物情報</span>
          <span>${entries.length} 項</span>
        </div>
        <div class="stella-detail-goods-grid">
          ${rows}
        </div>
      </div>
    `;
  }

  function detectPortFromDetailText(text) {
    const cleanText = String(text || '');
    const lines = cleanText
      .split('\n')
      .map(line => line.trim())
      .filter(Boolean);

    for (const line of lines) {
      const cleanLine = normalizePort(line);
      const exact = portDefinitions.find(def => def.port === cleanLine);

      if (exact) return exact.port;
    }

    const matched = portDefinitions.filter(def => {
      if (cleanText.includes(def.port)) return true;
      return def.keywords.some(keyword => cleanText.includes(keyword));
    });

    if (!matched.length) return null;
    if (matched.length > 2) return null;

    return matched[0].port;
  }

  function isDepartElement(el) {
    if (!el || !isVisibleElement(el)) return false;

    const text = String(el.innerText || el.textContent || '').trim();
    if (!text) return false;

    if (text.length > 20) return false;

    return (
      text === '出發' ||
      text === '出发' ||
      text.includes('出發') ||
      text.includes('出发')
    );
  }

  function findDepartElements() {
    const selectors = [
      'button',
      'a',
      '[role="button"]',
      'div',
      'span'
    ];

    return [...document.querySelectorAll(selectors.join(','))]
      .filter(isDepartElement)
      .filter(el => {
        const rect = el.getBoundingClientRect();
        return rect.width >= 40 && rect.height >= 20;
      });
  }

  function getPortCountInText(text) {
    return portDefinitions.filter(def => String(text || '').includes(def.port)).length;
  }

  function findPortDetailContextFromDepart(departEl) {
    let node = departEl;

    for (let depth = 0; depth < 10 && node && node !== document.body; depth++) {
      node = node.parentElement;
      if (!node || !isVisibleElement(node)) continue;
      if (node.querySelector('.stella-detail-goods')) continue;

      const text = String(node.innerText || '').trim();
      if (!text) continue;

      if (text.length < 12 || text.length > 1600) continue;

      const hasTravelTime = /\b\d{1,3}:\d{2}(?::\d{2})?\b/.test(text);
      if (!hasTravelTime) continue;

      const portName = detectPortFromDetailText(text);
      if (!portName) continue;

      const portCount = getPortCountInText(text);
      if (portCount > 2) continue;

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

      return {
        context: node,
        portName
      };
    }

    return null;
  }

  function getDirectChildOfContext(child, context) {
    let node = child;

    while (node && node.parentElement && node.parentElement !== context) {
      node = node.parentElement;
    }

    return node && node.parentElement === context ? node : null;
  }

  function getInsertTargetForDetailContext(departEl, context) {
    const directChild = getDirectChildOfContext(departEl, context);

    if (!directChild) return context;

    const directText = String(directChild.innerText || '').trim();
    const directPort = detectPortFromDetailText(directText);

    if (directPort) {
      return directChild;
    }

    return context;
  }

  function injectGoodsIntoPortDetailCards() {
    ensureLocalData();

    document.querySelectorAll('.stella-detail-goods').forEach(node => node.remove());

    const departElements = findDepartElements();
    const usedContexts = new Set();

    for (const departEl of departElements) {
      const result = findPortDetailContextFromDepart(departEl);
      if (!result) continue;

      const { context, portName } = result;

      if (usedContexts.has(context)) continue;

      const target = getInsertTargetForDetailContext(departEl, context);
      const schedule = buildTravelScheduleFromContext(context);

      target.insertAdjacentHTML('beforeend', renderDetailGoods(portName, schedule));

      usedContexts.add(context);

      break;
    }
  }

  function scheduleInjectPortDetailCards() {
    window.clearTimeout(injectTimer);
    injectTimer = window.setTimeout(injectGoodsIntoPortDetailCards, 120);
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
        background:
          linear-gradient(135deg, rgba(95, 180, 155, 0.12), rgba(255, 255, 255, 0.035)) !important;
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

  function handleAutoUpdateInteraction(event) {
    const now = Date.now();

    if (isReturnClickTarget(event.target)) {
      if (now - lastClickUpdateAt < RETURN_UPDATE_COOLDOWN) return;

      lastClickUpdateAt = now;
      window.clearTimeout(clickUpdateTimer);

      console.log('[StellaTrade] 偵測到出發 / 返航 / 返回 / 離港，立即更新港口資料');

      scrapeCurrentVisibleData({
        upload: true,
        silent: true
      });

      scheduleInjectPortDetailCards();
      return;
    }

    window.clearTimeout(clickUpdateTimer);

    clickUpdateTimer = window.setTimeout(() => {
      const ok = scrapeCurrentVisibleData({
        upload: true,
        silent: true
      });

      if (ok) {
        lastClickUpdateAt = Date.now();
        console.log('[StellaTrade] 點擊 / 觸控停止後，自動更新港口資料');
      }

      scheduleInjectPortDetailCards();
    }, CLICK_UPDATE_DELAY);
  }

  function setupClickUpdateListener() {
    if (clickListenerReady) return;
    clickListenerReady = true;

    document.addEventListener('pointerup', handleAutoUpdateInteraction, true);
    document.addEventListener('touchend', handleAutoUpdateInteraction, true);
    document.addEventListener('click', handleAutoUpdateInteraction, true);
    document.addEventListener('mouseover', scheduleInjectPortDetailCards, true);
    document.addEventListener('focusin', scheduleInjectPortDetailCards, true);
  }

  function setupPageObserver() {
    if (observerReady || !document.body) return;
    observerReady = true;

    const observer = new MutationObserver(() => {
      window.clearTimeout(syncTimer);

      syncTimer = window.setTimeout(() => {
        scrapeCurrentVisibleData({
          upload: false,
          silent: true
        });

        scheduleInjectPortDetailCards();
      }, 800);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true
    });
  }

  function startApp(attempt = 0) {
    if (appStarted) return;

    if (!document.body || !document.head) {
      if (attempt < 40) {
        setTimeout(() => startApp(attempt + 1), 250);
      } else {
        console.warn('[StellaTrade] 找不到 document.body/head，無法啟動');
      }
      return;
    }

    appStarted = true;

    ensureLocalData();
    installStyles();
    setupPageObserver();
    setupClickUpdateListener();
    scheduleInjectPortDetailCards();

    setTimeout(() => {
      fetchCloudData({ silent: true });
      scrapeCurrentVisibleData({
        upload: false,
        silent: true
      });
      scheduleInjectPortDetailCards();
    }, 1000);

    setInterval(() => {
      if (Date.now() - lastCloudPullAt >= CLOUD_PULL_INTERVAL) {
        fetchCloudData({ silent: true });
      }
    }, CLOUD_PULL_INTERVAL);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => startApp());
    startApp();
  } else {
    startApp();
  }
})();
