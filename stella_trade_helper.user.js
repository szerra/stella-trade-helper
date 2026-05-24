// ==UserScript==
// @name         閒著上鉤-雲端同步跑商情報站
// @namespace    https://github.com/szerra/stella-trade-helper
// @version      1.4.7
// @description  跑商情報面板：手機 Edge 支援，自動清除誤新增的詳情文字商品，支援 GitHub 自動更新。
// @author       YourName
// @homepageURL   https://github.com/szerra/stella-trade-helper
// @updateURL     https://raw.githubusercontent.com/szerra/stella-trade-helper/main/stella_trade_helper.user.js
// @downloadURL   https://raw.githubusercontent.com/szerra/stella-trade-helper/main/stella_trade_helper.user.js
// @match        *://stellaidle.dpdns.org/*
// @grant        GM_xmlhttpRequest
// @grant        GM.xmlHttpRequest
// @connect      script.google.com
// @connect      script.googleusercontent.com
// @run-at       document-end
// ==/UserScript==

(function () {
  'use strict';

  console.log('[StellaTrade 1.4.7] 腳本已載入');

  const GOOGLE_API_URL = 'https://script.google.com/macros/s/AKfycbyWdyVKqvwF2SlC8mrJKebK6vg3wsRLsrK4El8ziRj9o4tDV4oz4-rkHJRiWc36wG_pBA/exec';

  const STORAGE_KEY_DATA = 'stella_real_market_data';
  const STORAGE_KEY_SELECTED_PORT = 'stella_selected_port';
  const STORAGE_KEY_LEFT = 'stella_panel_left';
  const STORAGE_KEY_TOP = 'stella_panel_top';
  const STORAGE_KEY_WIDTH = 'stella_panel_width';
  const STORAGE_KEY_HEIGHT = 'stella_panel_height';

  localStorage.removeItem('stella_mini_left');
  localStorage.removeItem('stella_mini_top');

  const CLICK_UPDATE_DELAY = 1200;
  const RETURN_UPDATE_COOLDOWN = 2500;
  const INQUIRY_UPDATE_DELAYS = [900, 1800, 3200, 5200];
  const CLOUD_AUTO_SYNC_INTERVAL = 45000;

  let shadowRoot = null;
  let selectedPort = localStorage.getItem(STORAGE_KEY_SELECTED_PORT) || '星沉灣';
  let syncTimer = null;
  let cloudAutoSyncTimer = null;
  let clickUpdateTimer = null;
  let inquiryUpdateTimers = [];
  let lastClickUpdateAt = 0;
  let lastPointerUpdateEventAt = 0;
  let appStarted = false;
  let clickListenerReady = false;

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
      items: ['夜帆絹', '米酒', '烈酒', '安神貝露', '黑潮摩卡', '中急救包']
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

  function normalizeCompactText(value) {
    return String(value || '').replace(/\s+/g, '').trim();
  }

  function getPortDefByName(name) {
    const clean = normalizePort(normalizeCompactText(name));
    return portDefinitions.find(def => def.port === clean) || null;
  }

  function getPortDefFromShortText(text) {
    const raw = String(text || '').trim();
    if (!raw || raw.length > 40) return null;

    const exact = getPortDefByName(raw);
    if (exact) return exact;

    return portDefinitions.find(def =>
      def.keywords.some(keyword => raw.includes(keyword))
    ) || null;
  }

  function getAllowedItemSetForPort(portName) {
    const def = getPortDefByName(portName);
    return new Set((def?.items || []).map(normalizeItem));
  }

  function isItemAllowedForPort(portName, itemName) {
    const allowed = getAllowedItemSetForPort(portName);
    if (!allowed.size) return false;
    return allowed.has(normalizeItem(itemName));
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

        if (isInvalidItemName(cleanItem) || !isItemAllowedForPort(portName, cleanItem)) {
          delete itemsObj[cleanItem];
          changed = true;
          console.log('[StellaTrade] 已清除錯誤商品：', portName, cleanItem);
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

  function detectPortFromSelectedControl() {
    const controls = [...document.querySelectorAll('select')].filter(isVisibleElement);

    for (const select of controls) {
      const selectedText = select.selectedOptions?.[0]?.textContent || '';
      const candidates = [
        selectedText,
        select.value,
        select.getAttribute('aria-label') || '',
        select.getAttribute('title') || ''
      ];

      for (const candidate of candidates) {
        const def = getPortDefFromShortText(candidate);
        if (def) return def;
      }
    }

    return null;
  }

  function detectPortFromVisibleGoods() {
    const scores = new Map(portDefinitions.map(def => [def.port, 0]));
    const elements = [...document.querySelectorAll('div, li, tr, section, article')];

    for (const el of elements) {
      if (!isVisibleElement(el)) continue;

      const text = el.innerText?.trim();
      if (!text || text.length > 900) continue;

      const stockMatches = text.match(/(?:库存|庫存)\s*[0-9,]+\s*\/\s*[0-9,]+/g) || [];
      if (stockMatches.length !== 1) continue;

      for (const def of portDefinitions) {
        for (const item of def.items) {
          const aliases = getAliasesForItem(item);
          if (aliases.some(alias => text.includes(alias))) {
            scores.set(def.port, (scores.get(def.port) || 0) + 1);
          }
        }
      }
    }

    const ranked = [...scores.entries()]
      .filter(([, score]) => score > 0)
      .sort((a, b) => b[1] - a[1]);

    if (!ranked.length) return null;
    if (ranked.length > 1 && ranked[0][1] === ranked[1][1]) return null;

    return portDefinitions.find(def => def.port === ranked[0][0]) || null;
  }

  function detectPortFromSinglePortText(pageText) {
    const hits = portDefinitions.filter(def =>
      def.keywords.some(keyword => pageText.includes(keyword))
    );

    // 出海地圖會同時顯示多個港口名；此時不能用整頁文字判斷，避免把打聽庫存寫到錯港。
    return hits.length === 1 ? hits[0] : null;
  }

  function detectCurrentPort(pageText) {
    return (
      detectPortFromSelectedControl() ||
      detectPortFromVisibleGoods() ||
      detectPortFromSinglePortText(pageText)
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

  function getDisplayTime() {
    const d = new Date();
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    const hh = String(d.getHours()).padStart(2, '0');
    const min = String(d.getMinutes()).padStart(2, '0');
    return `${yyyy}/${mm}/${dd} ${hh}:${min}`;
  }

  function isVisibleElement(el) {
    if (!el || !el.isConnected) return false;
    const style = window.getComputedStyle(el);
    if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') return false;
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
    const labeled = text.match(/(?:價格|价格|售价|售價)[:：]?\s*([0-9,]+)/);
    if (labeled) return String(normalizeNumber(labeled[1]) ?? labeled[1]);

    const currency = text.match(/([0-9,]+)\s*(?:金币|金幣|鱼币|魚幣|幣|币)/);
    if (currency) return String(normalizeNumber(currency[1]) ?? currency[1]);

    return '-';
  }

  function extractRestock(text) {
    const match = text.match(/(?:補貨|补货)[:：]?\s*([0-9/:.\-\s]+)/);
    return match ? match[1].trim() : '-';
  }

  function extractItemNameByKnownList(text, portDef) {
    // 嚴格只接受「目前港口本來就會賣」的商品。
    // 這可以避免出海地圖或其他區塊的港口/商品文字，被寫進錯誤港口。
    const candidates = [...new Set((portDef?.items || []).map(normalizeItem))];

    for (const item of candidates) {
      const aliases = getAliasesForItem(item);
      if (aliases.some(alias => text.includes(alias))) return normalizeItem(item);
    }
    return null;
  }


  function isInvalidItemName(name) {
    const text = String(name || '').trim();
    const lower = text.toLowerCase();

    if (!text) return true;

    // 商品名稱通常很短；描述句、分類文字、效果文字都不應該成為商品。
    if (text.length > 18) return true;

    // 展開詳情常見的句子標點。真商品名不應該含有這些標點。
    if (/[。！？!?，,；;：:]/.test(text)) return true;

    // 常見被誤抓的描述句關鍵字。
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
      text.includes('souvenir') ||
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

    // 商品展開詳情會出現「類別 coffee」和效果敘述；這類區塊不能拿來自動新增商品。
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

  function extractItemNameFallback(text) {
    if (isDetailTextBlock(text)) return null;

    const lines = text.split('\n').map(x => x.trim()).filter(Boolean);

    for (const line of lines) {
      if (isInvalidItemName(line)) continue;
      if (/^[0-9,]+$/.test(line)) continue;
      if (line.length >= 2 && line.length <= 16) return normalizeItem(line);
    }

    const beforePrice = text.split(/(?:價格|价格|售价|售價|單價|单价|[0-9,]+\s*(?:金币|金幣|鱼币|魚幣|幣|币))/)[0];
    const compact = beforePrice.replace(/[\n\r\t]/g, ' ').replace(/\s+/g, ' ').trim();
    if (compact.length >= 2 && compact.length <= 16 && !isInvalidItemName(compact)) return normalizeItem(compact);
    return null;
  }

  function scanKnownGoodsFromPageText(portDef) {
    const pageText = getPageText();
    const result = {};
    const allowedItems = [...new Set((portDef?.items || []).map(normalizeItem))];
    if (!pageText || !allowedItems.length) return [];

    for (const item of allowedItems) {
      const aliases = getAliasesForItem(item).sort((a, b) => b.length - a.length);
      const positions = aliases
        .map(alias => ({ alias, index: pageText.indexOf(alias) }))
        .filter(hit => hit.index >= 0)
        .sort((a, b) => a.index - b.index);

      if (!positions.length) continue;

      const start = positions[0].index;
      let end = Math.min(pageText.length, start + 900);

      for (const otherItem of allowedItems) {
        if (otherItem === item) continue;
        for (const alias of getAliasesForItem(otherItem)) {
          const nextIndex = pageText.indexOf(alias, start + positions[0].alias.length);
          if (nextIndex > start && nextIndex < end) end = nextIndex;
        }
      }

      const slice = pageText.slice(start, end);
      const stock = extractStock(slice);
      if (!stock) continue;

      result[item] = {
        name: item,
        count: stock.count,
        max: stock.max,
        price: extractPrice(slice),
        restock: extractRestock(slice),
        rawText: slice
      };
    }

    return Object.values(result);
  }

  function scanGoodsFromCurrentPage(portDef) {
    const result = {};
    const elements = [...document.querySelectorAll('div, li, tr, section, article, button')];

    for (const el of elements) {
      if (!isVisibleElement(el)) continue;
      const text = el.innerText?.trim();
      if (!text || text.length > 900) continue;

      const stockMatches = text.match(/(?:库存|庫存)\s*[0-9,]+\s*\/\s*[0-9,]+/g) || [];
      if (stockMatches.length !== 1) continue;

      const stock = extractStock(text);
      if (!stock) continue;

      const knownItemName = extractItemNameByKnownList(text, portDef);
      let itemName = knownItemName;

      // 有效果、冷卻、類別等詳情文字的商品卡，仍然可以更新「已知商品」。
      // 但這種區塊不可以用 fallback 自動新增名稱，避免把描述句變商品。
      if (!itemName && !isDetailTextBlock(text)) itemName = extractItemNameFallback(text);
      if (!itemName) continue;
      if (isInvalidItemName(itemName)) continue;
      if (!isItemAllowedForPort(portDef.port, itemName)) continue;

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

    // 有些商品卡文字包含「咖啡冷卻」等詳情，個別 DOM 可能被前面的保護略過。
    // 再用整頁文字補掃一次，只補「目前港口允許的已知商品」。
    for (const info of scanKnownGoodsFromPageText(portDef)) {
      const old = result[info.name];
      if (!old || info.rawText.length < old.rawText.length) result[info.name] = info;
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

  function scrapeCurrentPortData(options = {}) {
    const { upload = true, silent = true } = options;
    const pageText = getPageText();
    if (!pageText || pageText.includes('正在同步')) return false;

    const portDef = detectCurrentPort(pageText);
    if (!portDef) {
      if (!silent) setStatus('未偵測到已知港口');
      return false;
    }

    const goods = scanGoodsFromCurrentPage(portDef);
    if (!goods.length) {
      if (!silent) setStatus(`${portDef.port} 沒有讀到商品列`);
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
    selectedPort = portDef.port;
    localStorage.setItem(STORAGE_KEY_SELECTED_PORT, selectedPort);
    renderDropdownContent();

    if (upload && uploadGoods.length) uploadToCloud(portDef.port, timeStr, uploadGoods);

    if (changedCount > 0) setStatus(`已更新 ${portDef.port}：${changedCount} 項商品`);
    else if (!silent) setStatus(`${portDef.port} 沒有新變化`);

    return true;
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
      headers: { 'Content-Type': 'application/json' },
      onload(response) {
        if (response.status === 200) console.log('[StellaTrade] 上傳成功', response.responseText);
        else {
          console.error('[StellaTrade] 上傳失敗', response.status, response.responseText);
          setStatus('雲端上傳失敗');
        }
      },
      onerror(error) {
        console.error('[StellaTrade] 雲端連線失敗', error);
        setStatus('雲端連線失敗');
      }
    });
  }

  function parseCloudJsonResponse(response) {
    const text = String(response?.responseText || '').trim();
    if (!text) return { ok: false, message: '雲端沒有回傳資料' };
    if (text.startsWith('<!DOCTYPE') || text.startsWith('<html') || text.startsWith('<')) {
      return {
        ok: false,
        message: '雲端回傳 HTML，不是 JSON。請檢查 Apps Script 部署權限。',
        preview: text.slice(0, 300)
      };
    }

    try {
      return { ok: true, data: JSON.parse(text) };
    } catch (error) {
      return { ok: false, message: '雲端回傳格式不是有效 JSON', preview: text.slice(0, 300), error };
    }
  }

  function fetchCloudData(options = {}) {
    const { silent = false } = options;
    if (!silent) setStatus('正在同步雲端資料...');
    safeRequest({
      method: 'GET',
      url: `${GOOGLE_API_URL}?_=${Date.now()}`,
      headers: { Accept: 'application/json,text/plain,*/*' },
      onload(response) {
        const parsed = parseCloudJsonResponse(response);
        if (!parsed.ok) {
          console.warn('[StellaTrade] 雲端同步略過：', parsed.message, parsed.preview || '', parsed.error || '');
          if (!silent) setStatus(parsed.message);
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
              if (isInvalidItemName(cleanItem) || !isItemAllowedForPort(cleanPort, cleanItem)) continue;

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
            renderDropdownContent();
            if (!silent) setStatus('雲端同步完成');
          } else {
            if (!silent) setStatus('雲端沒有可更新資料');
          }
        } catch (error) {
          console.error('[StellaTrade] 雲端資料套用失敗', error);
          if (!silent) setStatus('雲端資料套用失敗');
        }
      },
      onerror(error) {
        console.error('[StellaTrade] 雲端同步失敗', error);
        if (!silent) setStatus('雲端同步失敗');
      }
    });
  }

  function setupCloudAutoSync() {
    if (cloudAutoSyncTimer) return;
    cloudAutoSyncTimer = window.setInterval(() => {
      fetchCloudData({ silent: true });
    }, CLOUD_AUTO_SYNC_INTERVAL);
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
    setStatus('Tampermonkey 權限不足');
  }

  function isReturnClickTarget(target) {
    if (!target) return false;
    const el = target.closest('button, a, div, span');
    if (!el) return false;
    const text = String(el.innerText || el.textContent || '').trim();
    return text.includes('返航') || text.includes('返回') || text.includes('離港') || text.includes('离港');
  }

  function isInquiryClickTarget(target) {
    if (!target || !target.closest) return false;
    const el = target.closest('button, a');
    if (!el) return false;
    const text = String(el.innerText || el.textContent || '').replace(/\s+/g, ' ').trim();

    return (
      text.includes('打聽') ||
      text.includes('打听') ||
      (text.includes('庫存') && (text.includes('魚幣') || text.includes('鱼币') || text.includes('金幣') || text.includes('金币'))) ||
      (text.includes('查詢') && (text.includes('庫存') || text.includes('库存'))) ||
      (text.includes('查询') && (text.includes('庫存') || text.includes('库存')))
    );
  }

  function scheduleInquiryUpdate() {
    for (const timer of inquiryUpdateTimers) window.clearTimeout(timer);
    inquiryUpdateTimers = [];

    const portDef = detectPortFromSelectedControl();
    setStatus(portDef ? `偵測到打聽 ${portDef.port}，等待庫存資料...` : '偵測到打聽，等待庫存資料...');

    INQUIRY_UPDATE_DELAYS.forEach((delay, index) => {
      const timer = window.setTimeout(() => {
        const isLastTry = index === INQUIRY_UPDATE_DELAYS.length - 1;
        const ok = scrapeCurrentPortData({ upload: true, silent: !isLastTry });

        if (ok) {
          const currentPort = detectPortFromSelectedControl();
          setStatus(currentPort ? `打聽資料已更新並上傳：${currentPort.port}` : '打聽資料已更新並上傳');
        } else if (isLastTry) {
          setStatus('打聽後沒有讀到商品列，請確認庫存結果已顯示');
        }
      }, delay);

      inquiryUpdateTimers.push(timer);
    });
  }

  function handleAutoUpdateInteraction(event) {
    const host = document.getElementById('stella-shadow-host');
    if (host && event.composedPath && event.composedPath().includes(host)) return;

    const now = Date.now();
    if ((event.type === 'click' || event.type === 'touchend') && now - lastPointerUpdateEventAt < 450) return;
    if (event.type === 'pointerup' || event.type === 'touchend') lastPointerUpdateEventAt = now;

    if (isReturnClickTarget(event.target)) {
      if (now - lastClickUpdateAt < RETURN_UPDATE_COOLDOWN) return;
      lastClickUpdateAt = now;
      window.clearTimeout(clickUpdateTimer);
      console.log('[StellaTrade] 偵測到返航 / 返回 / 離港，立即更新港口資料');
      scrapeCurrentPortData({ upload: true, silent: true });
      return;
    }

    if (isInquiryClickTarget(event.target)) {
      if (now - lastClickUpdateAt < 700) return;
      lastClickUpdateAt = now;
      window.clearTimeout(clickUpdateTimer);
      console.log('[StellaTrade] 偵測到打聽 / 查庫存，延遲讀取並上傳資料');
      scheduleInquiryUpdate();
      return;
    }

    window.clearTimeout(clickUpdateTimer);
    clickUpdateTimer = window.setTimeout(() => {
      const ok = scrapeCurrentPortData({ upload: true, silent: true });
      if (ok) {
        lastClickUpdateAt = Date.now();
        console.log('[StellaTrade] 點擊 / 觸控停止後，自動更新港口資料');
      }
    }, CLICK_UPDATE_DELAY);
  }

  function setupClickUpdateListener() {
    if (clickListenerReady) return;
    clickListenerReady = true;
    document.addEventListener('pointerup', handleAutoUpdateInteraction, true);
    document.addEventListener('touchend', handleAutoUpdateInteraction, true);
    document.addEventListener('click', handleAutoUpdateInteraction, true);
  }

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function readPxStorage(key, fallback) {
    const raw = localStorage.getItem(key);
    const value = raw === null ? NaN : Number.parseFloat(raw);
    return Number.isFinite(value) ? value : fallback;
  }

  function getViewportWidth() {
    return Math.round(
      window.visualViewport?.width ||
      document.documentElement.clientWidth ||
      window.innerWidth ||
      360
    );
  }

  function getViewportHeight() {
    return Math.round(
      window.visualViewport?.height ||
      document.documentElement.clientHeight ||
      window.innerHeight ||
      640
    );
  }

  function isMobileLike() {
    return (
      getViewportWidth() <= 768 ||
      navigator.maxTouchPoints > 0 ||
      'ontouchstart' in window
    );
  }

  function getPanelWidth() {
    const saved = readPxStorage(STORAGE_KEY_WIDTH, 520);
    const vw = getViewportWidth();
    const maxWidth = Math.max(280, vw - 16);

    if (isMobileLike()) {
      return Math.min(maxWidth, Math.max(280, saved));
    }

    return Math.min(Math.max(330, saved), maxWidth);
  }

  function getPanelHeight() {
    const saved = readPxStorage(STORAGE_KEY_HEIGHT, 430);
    const vh = getViewportHeight();
    const maxHeight = Math.max(320, vh - 16);

    if (isMobileLike()) {
      return Math.min(Math.max(320, Math.round(vh * 0.72)), maxHeight);
    }

    return Math.min(Math.max(280, saved), maxHeight);
  }

  function getDefaultLeft() {
    if (isMobileLike()) return 8;
    return Math.max(16, getViewportWidth() - getPanelWidth() - 24);
  }

  function getDefaultTop() {
    return isMobileLike() ? 72 : 96;
  }

  function placeElement(element) {
    const vw = getViewportWidth();
    const vh = getViewportHeight();
    const width = element.offsetWidth || 60;
    const height = element.offsetHeight || 60;
    const left = clamp(readPxStorage(STORAGE_KEY_LEFT, getDefaultLeft()), 8, Math.max(8, vw - width - 8));
    const top = clamp(readPxStorage(STORAGE_KEY_TOP, getDefaultTop()), 8, Math.max(8, vh - height - 8));

    element.style.left = `${Math.round(left)}px`;
    element.style.top = `${Math.round(top)}px`;
    element.style.right = 'auto';
  }

  function saveElementPosition(element) {
    const rect = element.getBoundingClientRect();
    localStorage.setItem(STORAGE_KEY_LEFT, `${Math.round(rect.left)}px`);
    localStorage.setItem(STORAGE_KEY_TOP, `${Math.round(rect.top)}px`);
  }

  function getEventPoint(event) {
    if (event.touches && event.touches.length) {
      return { x: event.touches[0].clientX, y: event.touches[0].clientY };
    }

    if (event.changedTouches && event.changedTouches.length) {
      return { x: event.changedTouches[0].clientX, y: event.changedTouches[0].clientY };
    }

    return { x: event.clientX, y: event.clientY };
  }

  function makeDraggable(element, handle) {
    let active = false;
    let startX = 0;
    let startY = 0;
    let startLeft = 0;
    let startTop = 0;
    let moved = false;

    function startDrag(event) {
      if (active) return;
      if (event.button !== undefined && event.button !== 0) return;

      const target = event.target;
      if (target && target.closest && target.closest('button, input, textarea, select, a')) return;

      event.preventDefault();
      event.stopPropagation();

      active = true;
      moved = false;

      const point = getEventPoint(event);
      const rect = element.getBoundingClientRect();

      startX = point.x;
      startY = point.y;
      startLeft = rect.left;
      startTop = rect.top;

      element.dataset.dragging = 'true';

      if (event.pointerId !== undefined && handle.setPointerCapture) {
        try { handle.setPointerCapture(event.pointerId); } catch (e) {}
      }

      window.addEventListener('pointermove', moveDrag, { passive: false });
      window.addEventListener('pointerup', stopDrag);
      window.addEventListener('pointercancel', stopDrag);
      window.addEventListener('touchmove', moveDrag, { passive: false });
      window.addEventListener('touchend', stopDrag);
      window.addEventListener('touchcancel', stopDrag);
      window.addEventListener('mousemove', moveDrag);
      window.addEventListener('mouseup', stopDrag);
    }

    function moveDrag(event) {
      if (!active) return;
      event.preventDefault();

      const point = getEventPoint(event);
      const dx = point.x - startX;
      const dy = point.y - startY;

      if (Math.abs(dx) + Math.abs(dy) > 4) moved = true;

      const vw = getViewportWidth();
      const vh = getViewportHeight();
      const width = element.offsetWidth || 56;
      const height = element.offsetHeight || 56;

      const left = clamp(startLeft + dx, 8, Math.max(8, vw - width - 8));
      const top = clamp(startTop + dy, 8, Math.max(8, vh - height - 8));

      element.style.left = `${Math.round(left)}px`;
      element.style.top = `${Math.round(top)}px`;
      element.style.right = 'auto';
    }

    function stopDrag() {
      if (!active) return;
      active = false;

      window.removeEventListener('pointermove', moveDrag);
      window.removeEventListener('pointerup', stopDrag);
      window.removeEventListener('pointercancel', stopDrag);
      window.removeEventListener('touchmove', moveDrag);
      window.removeEventListener('touchend', stopDrag);
      window.removeEventListener('touchcancel', stopDrag);
      window.removeEventListener('mousemove', moveDrag);
      window.removeEventListener('mouseup', stopDrag);

      delete element.dataset.dragging;

      if (moved) {
        element.dataset.wasDragged = 'true';
        saveElementPosition(element);
        setTimeout(() => { delete element.dataset.wasDragged; }, 350);
      }
    }

    handle.addEventListener('pointerdown', startDrag, { passive: false });
    handle.addEventListener('touchstart', startDrag, { passive: false });
    handle.addEventListener('mousedown', startDrag);
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
      if (ratio <= 0.15) return '#ff5252';
      if (ratio <= 0.45) return '#ffd54f';
      return '#00ff95';
    }
    if (count <= 5) return '#ff5252';
    if (count <= 10) return '#ffd54f';
    return '#00ff95';
  }

  function setStatus(message) {
    if (!shadowRoot) return;
    const status = shadowRoot.getElementById('stella-status');
    if (status) status.textContent = message;
  }

  function selectPort(portName) {
    if (!portName) return;
    selectedPort = portName;
    localStorage.setItem(STORAGE_KEY_SELECTED_PORT, selectedPort);
    renderDropdownContent();
  }

  function renderDropdownContent() {
    if (!shadowRoot) return;
    const sidebar = shadowRoot.getElementById('stella-port-list');
    const detail = shadowRoot.getElementById('stella-detail-panel');
    if (!sidebar || !detail) return;

    const data = ensureLocalData();
    if (!data[selectedPort]) {
      selectedPort = Object.keys(data)[0] || '星沉灣';
      localStorage.setItem(STORAGE_KEY_SELECTED_PORT, selectedPort);
    }

    sidebar.innerHTML = '';
    detail.innerHTML = '';

    for (const [portName, itemsObj] of Object.entries(data)) {
      const itemsArray = Object.values(itemsObj || {});
      const availableCount = itemsArray.filter(info => Number(info.count || 0) > 0).length;
      const statusColor = availableCount === 0 ? '#ff5252' : availableCount < itemsArray.length ? '#ffd54f' : '#00ff95';
      const portBtn = document.createElement('button');
      portBtn.type = 'button';
      portBtn.className = 'stella-port-btn';
      portBtn.dataset.portName = portName;
      portBtn.style.background = selectedPort === portName ? 'rgba(0, 255, 200, 0.18)' : 'rgba(255, 255, 255, 0.035)';
      portBtn.style.border = selectedPort === portName ? '1px solid rgba(0, 255, 200, 0.55)' : '1px solid rgba(255, 255, 255, 0.06)';
      portBtn.innerHTML = `
        <div class="stella-port-name">📍 ${escapeHtml(portName)}</div>
        <div class="stella-port-count" style="color:${statusColor};">● ${availableCount}/${itemsArray.length}</div>
      `;
      sidebar.appendChild(portBtn);
    }

    sidebar.onclick = event => {
      const button = event.target.closest('.stella-port-btn');
      if (!button || !sidebar.contains(button)) return;
      selectPort(button.dataset.portName);
    };

    const portData = data[selectedPort] || {};
    const title = document.createElement('div');
    title.className = 'stella-detail-title';
    title.textContent = `📍 ${selectedPort}`;
    detail.appendChild(title);

    for (const [itemName, info] of Object.entries(portData)) {
      const count = Number(info.count || 0);
      const max = Number(info.max || 0);
      const percent = max > 0 ? Math.min(100, Math.round((count / max) * 100)) : Math.min(100, Math.round((count / Math.max(20, count || 1)) * 100));
      const barColor = getStockColor(count, max);
      const countText = max > 0 ? `${count}/${max}` : `${count}`;
      const itemCard = document.createElement('div');
      itemCard.className = 'stella-item-card';
      itemCard.innerHTML = `
        <div class="stella-item-top">
          <div class="stella-item-name">${escapeHtml(itemName)}</div>
          <div class="stella-item-count" style="color:${barColor};">${escapeHtml(countText)} 個</div>
        </div>
        <div class="stella-bar-bg">
          <div class="stella-bar-fill" style="width:${percent}%; background:${barColor}; box-shadow:0 0 12px ${barColor};"></div>
        </div>
        <div class="stella-item-meta">
          <div>💰 價格：${escapeHtml(info.price || '-')}</div>
          <div>⏰ 補貨：${escapeHtml(info.restock || '-')}</div>
          <div>🕒 更新：${escapeHtml(info.time || '尚未更新')}</div>
        </div>
      `;
      detail.appendChild(itemCard);
    }
  }

  function updateViewportVars(panel) {
    if (!panel) return;

    const vw = getViewportWidth();
    const vh = getViewportHeight();

    panel.style.setProperty('--visible-width', `${Math.max(280, vw - 16)}px`);
    panel.style.setProperty('--visible-height', `${Math.max(320, vh - 16)}px`);
    if (isMobileLike()) {
      panel.classList.add('stella-mobile');
    } else {
      panel.classList.remove('stella-mobile');
    }
  }



  function showMiniCircle(panel, miniCircle) {
    if (!miniCircle) return;

    if (panel) {
      panel.style.setProperty('display', 'none', 'important');
    }

    miniCircle.style.setProperty('display', 'grid', 'important');
    miniCircle.style.setProperty('visibility', 'visible', 'important');
    miniCircle.style.setProperty('opacity', '1', 'important');
    miniCircle.style.setProperty('pointer-events', 'auto', 'important');

    placeElement(miniCircle);
  }

  function createTradePanel() {
    const oldHost = document.getElementById('stella-shadow-host');
    if (oldHost) oldHost.remove();
    ensureLocalData();

    const host = document.createElement('div');
    host.id = 'stella-shadow-host';
    host.style.position = 'fixed';
    host.style.inset = '0';
    host.style.zIndex = '2147483647';
    host.style.pointerEvents = 'none';
    document.body.appendChild(host);
    shadowRoot = host.attachShadow({ mode: 'open' });

    const style = document.createElement('style');
    style.textContent = `
      :host { all: initial; font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
      * { box-sizing: border-box; }
      button { font-family: inherit; }
      #stella-trade-panel {
        position: fixed;
        pointer-events: auto;
        top: 96px;
        left: calc(100vw - 544px);
        right: auto;
        width: var(--panel-width, 520px);
        height: var(--panel-height, 430px);
        min-width: 330px;
        min-height: 280px;
        max-width: var(--visible-width, calc(100vw - 16px));
        max-height: var(--visible-height, calc(100vh - 16px));
        z-index: 999999;
        display: none;
        flex-direction: column;
        padding: 12px;
        overflow: hidden;
        color: #d9faff;
        background: radial-gradient(circle at 10% 0%, rgba(0, 255, 200, 0.16), transparent 34%), radial-gradient(circle at 100% 20%, rgba(76, 130, 255, 0.16), transparent 32%), rgba(5, 12, 22, 0.94);
        backdrop-filter: blur(14px);
        border: 1px solid rgba(113, 255, 232, 0.34);
        border-radius: 18px;
        box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.04) inset, 0 0 32px rgba(0, 255, 200, 0.18), 0 18px 45px rgba(0, 0, 0, 0.48);
      }
      .stella-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 10px 10px 10px 12px;
        margin-bottom: 10px;
        border: 1px solid rgba(143, 252, 255, 0.16);
        border-radius: 14px;
        background: linear-gradient(135deg, rgba(0, 255, 200, 0.12), rgba(55, 105, 255, 0.1));
        cursor: move;
        touch-action: none;
        -webkit-user-select: none;
        user-select: none;
      }
      .stella-title { color: #e9ffff; font-size: 16px; font-weight: 900; text-shadow: 0 0 12px rgba(0, 255, 255, 0.42); }
      .stella-subtitle { margin-top: 2px; color: #80b8c8; font-size: 11px; }
      .stella-min-btn { width: 32px; height: 32px; border: 1px solid rgba(143, 252, 255, 0.28); border-radius: 10px; color: #d9faff; background: rgba(255, 255, 255, 0.07); cursor: pointer; font-size: 18px; }
      .stella-min-btn:hover { background: rgba(143, 252, 255, 0.14); }
      .stella-content { display: flex; flex: 1; gap: 12px; overflow: hidden; }
      #stella-port-list { width: 164px; display: flex; flex-direction: column; gap: 8px; overflow-y: auto; padding-right: 2px; }
      #stella-detail-panel { flex: 1; min-width: 0; padding: 12px; overflow-y: auto; background: rgba(0, 0, 0, 0.2); border: 1px solid rgba(0, 255, 200, 0.14); border-radius: 14px; }
      .stella-port-btn { padding: 12px; border-radius: 14px; cursor: pointer; text-align: left; transition: transform 0.18s ease, box-shadow 0.18s ease; }
      .stella-port-btn:hover, .stella-item-card:hover { transform: translateY(-2px); box-shadow: 0 0 18px rgba(0, 255, 200, 0.18); }
      .stella-port-name { color: #fff; font-size: 15px; font-weight: 850; }
      .stella-port-count { margin-top: 7px; font-size: 12px; font-weight: 800; }
      .stella-detail-title { margin-bottom: 14px; color: #8ffcff; font-size: 24px; font-weight: 950; text-shadow: 0 0 12px rgba(0, 255, 255, 0.42); }
      .stella-item-card { margin-bottom: 12px; padding: 14px; border-radius: 16px; background: linear-gradient(135deg, rgba(255, 255, 255, 0.055), rgba(255, 255, 255, 0.025)); border: 1px solid rgba(255, 255, 255, 0.07); }
      .stella-item-top { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
      .stella-item-name { color: white; font-size: 17px; font-weight: 850; }
      .stella-item-count { padding: 3px 8px; border-radius: 999px; background: rgba(255, 255, 255, 0.06); font-size: 14px; font-weight: 950; white-space: nowrap; }
      .stella-bar-bg { height: 8px; margin-top: 12px; overflow: hidden; border-radius: 999px; background: rgba(255, 255, 255, 0.08); }
      .stella-bar-fill { height: 100%; transition: width 0.3s ease; }
      .stella-item-meta { display: grid; grid-template-columns: 1fr 1fr; gap: 7px; margin-top: 10px; color: #9ab3c5; font-size: 12px; line-height: 1.35; }
      .stella-actions { display: grid; grid-template-columns: 1fr; gap: 8px; margin-top: 10px; }
      .stella-button { height: 38px; border: 1px solid rgba(143, 252, 255, 0.16); border-radius: 12px; color: #bdfcff; background: linear-gradient(135deg, rgba(0, 255, 200, 0.16), rgba(0, 120, 255, 0.16)); box-shadow: 0 0 12px rgba(0, 255, 200, 0.14); cursor: pointer; font-size: 13px; font-weight: 850; }
      .stella-button:hover { filter: brightness(1.18); }
      #stella-status { min-height: 18px; margin-top: 8px; color: #9fb8c8; font-size: 12px; text-align: center; }
      #stella-resize-handle { position: absolute; right: 0; bottom: 0; width: 20px; height: 20px; cursor: nwse-resize; border-radius: 0 0 16px 0; background: linear-gradient(135deg, transparent 50%, rgba(0, 230, 118, 0.92) 50%); touch-action: none; }
      #stella-trade-mini {
        position: fixed;
        pointer-events: auto;
        top: 96px;
        left: calc(100vw - 72px);
        right: auto;
        width: 56px;
        height: 56px;
        z-index: 999999;
        display: grid;
        place-items: center;
        color: #d9faff;
        background: radial-gradient(circle at 35% 25%, rgba(143, 252, 255, 0.2), transparent 38%), rgba(5, 12, 22, 0.94);
        border: 1px solid rgba(143, 252, 255, 0.42);
        border-radius: 50%;
        box-shadow: 0 0 24px rgba(0, 255, 200, 0.34), inset 0 0 14px rgba(0, 255, 255, 0.14);
        cursor: grab;
        font-size: 26px;
        user-select: none;
        -webkit-user-select: none;
        touch-action: none;
      }
      #stella-trade-mini:active { cursor: grabbing; }
      #stella-trade-mini::after { content: ''; position: absolute; right: 6px; bottom: 6px; width: 10px; height: 10px; border-radius: 50%; background: #00ff95; box-shadow: 0 0 10px #00ff95; }
      @keyframes stella-pulse { 0%, 100% { transform: scale(1); opacity: 0.92; } 50% { transform: scale(1.06); opacity: 1; } }
      #stella-trade-mini { animation: stella-pulse 1.8s infinite; }

      #stella-trade-panel.stella-mobile {
        width: var(--panel-width, calc(100vw - 16px)) !important;
        height: var(--panel-height, 72vh) !important;
        min-width: 0 !important;
        min-height: 320px !important;
        max-width: var(--visible-width, calc(100vw - 16px)) !important;
        max-height: var(--visible-height, calc(100vh - 16px)) !important;
        border-radius: 16px;
      }
      #stella-trade-panel.stella-mobile .stella-content { flex-direction: column; }
      #stella-trade-panel.stella-mobile #stella-port-list {
        width: 100%;
        max-height: 96px;
        flex-direction: row;
        overflow-x: auto;
        overflow-y: hidden;
        padding-bottom: 4px;
      }
      #stella-trade-panel.stella-mobile .stella-port-btn { min-width: 128px; flex: 0 0 auto; }
      #stella-trade-panel.stella-mobile #stella-detail-panel { min-height: 0; }
      #stella-trade-panel.stella-mobile .stella-detail-title { font-size: 20px; }
      #stella-trade-panel.stella-mobile .stella-item-name { font-size: 15px; }
      #stella-trade-panel.stella-mobile .stella-item-meta { grid-template-columns: 1fr; }

      @media (max-width: 520px) {
        #stella-trade-panel {
          width: calc(100vw - 16px) !important;
          height: min(72vh, var(--panel-height, 430px));
          min-width: 0;
          min-height: 320px;
          border-radius: 16px;
        }
        .stella-content { flex-direction: column; }
        #stella-port-list { width: 100%; max-height: 96px; flex-direction: row; overflow-x: auto; overflow-y: hidden; padding-bottom: 4px; }
        .stella-port-btn { min-width: 128px; flex: 0 0 auto; }
        #stella-detail-panel { min-height: 0; }
        .stella-detail-title { font-size: 20px; }
        .stella-item-name { font-size: 15px; }
        .stella-item-meta { grid-template-columns: 1fr; }
        #stella-trade-mini { width: 56px; height: 56px; font-size: 26px; }
      }
    `;

    const panel = document.createElement('div');
    panel.id = 'stella-trade-panel';
    updateViewportVars(panel);
    panel.innerHTML = `
      <div class="stella-header" title="拖曳移動面板">
        <div>
          <div class="stella-title">🚢 跑商隊友情報站</div>
          <div class="stella-subtitle">手機觸控支援 · 點擊停下後自動更新</div>
        </div>
        <button class="stella-min-btn" type="button" title="最小化">−</button>
      </div>
      <div class="stella-content">
        <div id="stella-port-list"></div>
        <div id="stella-detail-panel"></div>
      </div>
      <div class="stella-actions">
        <button id="stella-sync-btn" class="stella-button" type="button">🔄 同步雲端資料</button>
        <button id="stella-scrape-btn" class="stella-button" type="button">📡 讀取目前打聽結果並上傳</button>
      </div>
      <div id="stella-status">就緒</div>
      <div id="stella-resize-handle" title="調整大小"></div>
    `;

    const miniCircle = document.createElement('div');
    miniCircle.id = 'stella-trade-mini';
    miniCircle.textContent = '🚢';
    miniCircle.title = '拖曳移動，點擊打開跑商情報站';

    shadowRoot.appendChild(style);
    shadowRoot.appendChild(panel);
    shadowRoot.appendChild(miniCircle);

    updateViewportVars(panel);
    placeElement(panel);
    placeElement(miniCircle);
    showMiniCircle(panel, miniCircle);

    const header = shadowRoot.querySelector('.stella-header');
    makeDraggable(panel, header);
    makeDraggable(miniCircle, miniCircle);

    shadowRoot.querySelector('.stella-min-btn').addEventListener('click', () => {
      saveElementPosition(panel);
      showMiniCircle(panel, miniCircle);
    });

    miniCircle.addEventListener('click', () => {
      if (miniCircle.dataset.wasDragged === 'true') return;
      saveElementPosition(miniCircle);
      panel.style.setProperty('display', 'flex', 'important');
      placeElement(panel);
      saveElementPosition(panel);
      miniCircle.style.setProperty('display', 'none', 'important');
      renderDropdownContent();
    });

    shadowRoot.getElementById('stella-sync-btn').addEventListener('click', () => {
      fetchCloudData();
    });

    shadowRoot.getElementById('stella-scrape-btn').addEventListener('click', () => {
      const ok = scrapeCurrentPortData({ upload: true, silent: false });
      if (ok) setStatus('目前頁面資料已更新並上傳');
    });

    setupResize(panel, shadowRoot.getElementById('stella-resize-handle'));
    renderDropdownContent();

    setTimeout(() => {
      try {
        fetchCloudData();
      } catch (error) {
        console.warn('[StellaTrade] 初始化同步失敗', error);
      }
    }, 1200);

    setupPageObserver();
    setupClickUpdateListener();
    setupCloudAutoSync();
    console.log('[StellaTrade 1.4.6] 面板建立完成，預設顯示小圓球');
  }

  function setupResize(panel, resizeHandle) {
    let active = false;
    let startWidth = 0;
    let startHeight = 0;
    let startX = 0;
    let startY = 0;

    function startResize(event) {
      event.preventDefault();
      event.stopPropagation();

      active = true;

      const point = getEventPoint(event);
      startWidth = parseFloat(getComputedStyle(panel).width);
      startHeight = parseFloat(getComputedStyle(panel).height);
      startX = point.x;
      startY = point.y;

      if (event.pointerId !== undefined && resizeHandle.setPointerCapture) {
        try { resizeHandle.setPointerCapture(event.pointerId); } catch (e) {}
      }

      window.addEventListener('pointermove', doResize, { passive: false });
      window.addEventListener('pointerup', stopResize);
      window.addEventListener('pointercancel', stopResize);
      window.addEventListener('touchmove', doResize, { passive: false });
      window.addEventListener('touchend', stopResize);
      window.addEventListener('touchcancel', stopResize);
      window.addEventListener('mousemove', doResize);
      window.addEventListener('mouseup', stopResize);
    }

    function doResize(event) {
      if (!active) return;
      event.preventDefault();

      const point = getEventPoint(event);
      const deltaX = point.x - startX;
      const deltaY = point.y - startY;
      const rect = panel.getBoundingClientRect();
      const vw = getViewportWidth();
      const vh = getViewportHeight();

      const minWidth = isMobileLike() ? 280 : 330;
      const minHeight = isMobileLike() ? 320 : 280;
      const maxWidth = Math.max(minWidth, vw - rect.left - 8);
      const maxHeight = Math.max(minHeight, vh - rect.top - 8);
      const newWidth = clamp(startWidth + deltaX, minWidth, maxWidth);
      const newHeight = clamp(startHeight + deltaY, minHeight, maxHeight);

      const widthValue = `${Math.round(newWidth)}px`;
      const heightValue = `${Math.round(newHeight)}px`;
      panel.style.setProperty('--panel-width', widthValue);
      panel.style.setProperty('--panel-height', heightValue);
      localStorage.setItem(STORAGE_KEY_WIDTH, widthValue);
      localStorage.setItem(STORAGE_KEY_HEIGHT, heightValue);
      saveElementPosition(panel);
    }

    function stopResize() {
      if (!active) return;
      active = false;

      window.removeEventListener('pointermove', doResize);
      window.removeEventListener('pointerup', stopResize);
      window.removeEventListener('pointercancel', stopResize);
      window.removeEventListener('touchmove', doResize);
      window.removeEventListener('touchend', stopResize);
      window.removeEventListener('touchcancel', stopResize);
      window.removeEventListener('mousemove', doResize);
      window.removeEventListener('mouseup', stopResize);
    }

    resizeHandle.addEventListener('pointerdown', startResize, { passive: false });
    resizeHandle.addEventListener('touchstart', startResize, { passive: false });
    resizeHandle.addEventListener('mousedown', startResize);
  }

  function setupPageObserver() {
    if (!document.body) return;
    const observer = new MutationObserver(() => {
      window.clearTimeout(syncTimer);
      syncTimer = window.setTimeout(() => {
        scrapeCurrentPortData({ upload: false, silent: true });
      }, 1800);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true
    });
  }

  function refreshViewportLayout() {
    if (!shadowRoot) return;

    const panel = shadowRoot.getElementById('stella-trade-panel');
    const miniCircle = shadowRoot.getElementById('stella-trade-mini');
    if (!panel || !miniCircle) return;

    updateViewportVars(panel);

    const panelVisible = getComputedStyle(panel).display !== 'none';
    const active = panelVisible ? panel : miniCircle;

    placeElement(active);
    saveElementPosition(active);
    placeElement(panel);
    placeElement(miniCircle);
  }

  window.addEventListener('resize', refreshViewportLayout);
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', refreshViewportLayout);
    window.visualViewport.addEventListener('scroll', refreshViewportLayout);
  }


  function startApp(attempt = 0) {
    if (appStarted) return;
    if (!document.body) {
      if (attempt < 40) setTimeout(() => startApp(attempt + 1), 250);
      else console.warn('[StellaTrade] 找不到 document.body，面板無法建立');
      return;
    }

    appStarted = true;
    setTimeout(createTradePanel, attempt === 0 ? 800 : 0);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => startApp());
    startApp();
  } else {
    startApp();
  }
})();
