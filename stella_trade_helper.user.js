// ==UserScript==
// @name         閒著上鉤-雲端同步跑商情報站
// @namespace    https://github.com/szerra/stella-trade-helper
// @version      1.4.5
// @description  跑商情報面板：直接把港口貨物資訊嵌入遊戲港口卡片，支援打聽庫存同步與 GitHub 自動更新。
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

  console.log('[StellaTrade 1.4.5-inline] 腳本已載入');

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

  function getPortDefinitionByName(portName) {
    const cleanPort = normalizePort(portName);
    return portDefinitions.find(def => def.port === cleanPort) || null;
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

  function detectTavernInquiryPort(pageText) {
    if (!isTavernInquiryPage(pageText)) return null;

    const selects = [...document.querySelectorAll('select')];
    for (const select of selects) {
      const selectedOption = select.options ? select.options[select.selectedIndex] : null;
      const valueText = selectedOption?.textContent || selectedOption?.value || select.value || '';
      const def = getPortDefinitionByName(valueText);
      if (def) return def;
    }

    for (const def of portDefinitions) {
      if (pageText.includes(def.port)) return def;
      if (def.keywords.some(keyword => pageText.includes(keyword))) return def;
    }

    return null;
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
    const labeled = text.match(/(?:價格|价格|售价|售價|單價|单价)[:：]?\s*([0-9,]+)/);
    if (labeled) return String(normalizeNumber(labeled[1]) ?? labeled[1]);

    const currency = text.match(/([0-9,]+)\s*(?:金币|金幣|鱼币|魚幣|幣|币)/);
    if (currency) return String(normalizeNumber(currency[1]) ?? currency[1]);

    return '-';
  }

  function extractRestock(text) {
    const match = text.match(/(?:補貨|补货|補貨時間|补货时间)[:：]?\s*([0-9/:.\-\s]+(?:上午|下午)?\s*[0-9/:.\-\s]*)/);
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

    const lines = text.split('\n').map(x => x.trim()).filter(Boolean);

    for (const line of lines) {
      if (isInvalidItemName(line)) continue;
      if (/^[0-9,]+$/.test(line)) continue;
      if (line.length >= 2 && line.length <= 16) return normalizeItem(line);
    }

    const beforePrice = text.split(
      /(?:價格|价格|售價|售价|單價|单价|[0-9,]+\s*(?:金币|金幣|鱼币|魚幣|幣|币))/
    )[0];

    const compact = beforePrice.replace(/[\n\r\t]/g, ' ').replace(/\s+/g, ' ').trim();

    if (compact.length >= 2 && compact.length <= 16 && !isInvalidItemName(compact)) {
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

  function getCurrentDataSource() {
    const pageText = getPageText();
    const tavernPort = detectTavernInquiryPort(pageText);

    if (tavernPort) {
      return {
        portDef: tavernPort,
        source: 'tavern',
        goods: scanGoodsFromCurrentPage(tavernPort, { allowDetailBlocks: true })
      };
    }

    const portDef = detectCurrentPort(pageText);
    if (!portDef) return null;

    return {
      portDef,
      source: 'port',
      goods: scanGoodsFromCurrentPage(portDef, { allowDetailBlocks: false })
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
    scheduleInjectPortCards();

    if (upload && uploadGoods.length) uploadToCloud(portDef.port, timeStr, uploadGoods);

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
      headers: { 'Content-Type': 'application/json' },
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
    const { silent = true } = options;
    lastCloudPullAt = Date.now();

    safeRequest({
      method: 'GET',
      url: `${GOOGLE_API_URL}?_=${Date.now()}`,
      headers: { Accept: 'application/json,text/plain,*/*' },
      onload(response) {
        const parsed = parseCloudJsonResponse(response);

        if (!parsed.ok) {
          if (!silent) console.warn('[StellaTrade] 雲端同步略過：', parsed.message, parsed.preview || '', parsed.error || '');
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
            scheduleInjectPortCards();
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
      if (ratio <= 0.15) return '#d84848';
      if (ratio <= 0.45) return '#b38b00';
      return '#277a5c';
    }

    if (count <= 5) return '#d84848';
    if (count <= 10) return '#b38b00';
    return '#277a5c';
  }

  function renderInlineGoods(portName) {
    const data = ensureLocalData();
    const portData = data[portName] || {};
    const entries = Object.entries(portData).filter(([name]) => !isInvalidItemName(name));

    if (!entries.length) {
      return `
        <div class="stella-inline-goods">
          <div class="stella-inline-title">貨物情報</div>
          <div class="stella-inline-empty">目前沒有同步資料</div>
        </div>
      `;
    }

    const rows = entries.map(([itemName, info]) => {
      const count = Number(info.count || 0);
      const max = Number(info.max || 0);
      const stockText = max > 0 ? `${count}/${max}` : `${count}`;
      const color = getStockColor(count, max);

      return `
        <div class="stella-inline-row">
          <div class="stella-inline-row-main">
            <span class="stella-inline-name">${escapeHtml(itemName)}</span>
            <span class="stella-inline-stock" style="color:${color};">${escapeHtml(stockText)}</span>
            <span class="stella-inline-price">${escapeHtml(info.price || '-')} 魚幣</span>
          </div>
          <div class="stella-inline-meta">
            更新：${escapeHtml(info.time || '尚未更新')}　補貨：${escapeHtml(info.restock || '-')}
          </div>
        </div>
      `;
    }).join('');

    return `
      <div class="stella-inline-goods">
        <div class="stella-inline-title">貨物情報 <span>${entries.length} 項</span></div>
        ${rows}
      </div>
    `;
  }

  function detectPortFromCardText(text) {
    const cleanText = String(text || '');

    const matched = portDefinitions.filter(def => {
      if (cleanText.includes(def.port)) return true;
      return def.keywords.some(keyword => cleanText.includes(keyword));
    });

    if (!matched.length) return null;
    if (matched.length > 2) return null;

    return matched[0].port;
  }

  function isPortHoverCardCandidate(el) {
    if (!el || !isVisibleElement(el)) return false;
    if (el.closest('.stella-inline-goods')) return false;
    if (el.querySelector('.stella-inline-goods')) return false;

    const text = el.innerText?.trim() || '';
    if (!text) return false;
    if (text.length < 8 || text.length > 1200) return false;

    const portName = detectPortFromCardText(text);
    if (!portName) return false;

    const rect = el.getBoundingClientRect();
    if (rect.width < 180 || rect.height < 80) return false;
    if (rect.width > Math.max(780, window.innerWidth * 0.95)) return false;
    if (rect.height > Math.max(780, window.innerHeight * 0.95)) return false;

    const portCount = portDefinitions.filter(def => text.includes(def.port)).length;
    if (portCount > 2) return false;

    const looksLikeCard =
      /\d{1,2}:\d{2}:\d{2}/.test(text) ||
      text.includes('港口資源') ||
      text.includes('港口资源') ||
      text.includes('預計到達') ||
      text.includes('预计到达') ||
      text.includes('預計返航') ||
      text.includes('预计返航');

    if (!looksLikeCard) return false;

    if (
      text.includes('首頁') ||
      text.includes('倉庫') ||
      text.includes('市場') ||
      text.includes('Discord')
    ) {
      return false;
    }

    el.dataset.stellaPortName = portName;
    return true;
  }

  function injectGoodsIntoPortCards() {
    ensureLocalData();

    const candidates = [...document.querySelectorAll('div, section, article')]
      .filter(isPortHoverCardCandidate)
      .sort((a, b) => {
        const ar = a.getBoundingClientRect();
        const br = b.getBoundingClientRect();
        return (ar.width * ar.height) - (br.width * br.height);
      });

    const usedPorts = new Set();

    for (const el of candidates) {
      const portName = el.dataset.stellaPortName;
      if (!portName) continue;
      if (usedPorts.has(portName)) continue;
      if (el.querySelector('.stella-inline-goods')) continue;

      el.insertAdjacentHTML('beforeend', renderInlineGoods(portName));
      usedPorts.add(portName);
    }
  }

  function scheduleInjectPortCards() {
    window.clearTimeout(injectTimer);
    injectTimer = window.setTimeout(injectGoodsIntoPortCards, 120);
  }

  function installStyles() {
    if (document.getElementById('stella-inline-style')) return;

    const style = document.createElement('style');
    style.id = 'stella-inline-style';
    style.textContent = `
      .stella-inline-goods {
        margin-top: 12px !important;
        padding-top: 10px !important;
        border-top: 1px solid rgba(80, 120, 105, 0.22) !important;
        color: #2e4a43 !important;
        font-family: inherit !important;
      }

      .stella-inline-title {
        display: flex !important;
        justify-content: space-between !important;
        align-items: center !important;
        margin-bottom: 8px !important;
        color: #2d7663 !important;
        font-weight: 800 !important;
        font-size: 14px !important;
      }

      .stella-inline-title span {
        color: #6f8f84 !important;
        font-size: 12px !important;
        font-weight: 600 !important;
      }

      .stella-inline-row {
        margin-top: 6px !important;
        padding: 7px 8px !important;
        border: 1px solid rgba(85, 135, 120, 0.22) !important;
        border-radius: 10px !important;
        background: rgba(242, 250, 246, 0.82) !important;
        line-height: 1.35 !important;
      }

      .stella-inline-row-main {
        display: flex !important;
        align-items: center !important;
        gap: 8px !important;
        flex-wrap: wrap !important;
      }

      .stella-inline-name {
        color: #234b42 !important;
        font-weight: 800 !important;
      }

      .stella-inline-stock {
        font-weight: 800 !important;
      }

      .stella-inline-price {
        color: #9a7930 !important;
        font-size: 12px !important;
      }

      .stella-inline-meta {
        margin-top: 3px !important;
        color: #6f7f7a !important;
        font-size: 11px !important;
        word-break: break-word !important;
      }

      .stella-inline-empty {
        color: #8c8c8c !important;
        font-size: 12px !important;
      }

      @media (max-width: 520px) {
        .stella-inline-goods {
          margin-top: 10px !important;
        }

        .stella-inline-title {
          font-size: 13px !important;
        }

        .stella-inline-row {
          padding: 6px 7px !important;
        }

        .stella-inline-name {
          font-size: 13px !important;
        }

        .stella-inline-stock,
        .stella-inline-price,
        .stella-inline-meta {
          font-size: 11px !important;
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
      scrapeCurrentVisibleData({ upload: true, silent: true });
      scheduleInjectPortCards();
      return;
    }

    window.clearTimeout(clickUpdateTimer);

    clickUpdateTimer = window.setTimeout(() => {
      const ok = scrapeCurrentVisibleData({ upload: true, silent: true });
      if (ok) {
        lastClickUpdateAt = Date.now();
        console.log('[StellaTrade] 點擊 / 觸控停止後，自動更新港口資料');
      }
      scheduleInjectPortCards();
    }, CLICK_UPDATE_DELAY);
  }

  function setupClickUpdateListener() {
    if (clickListenerReady) return;
    clickListenerReady = true;

    document.addEventListener('pointerup', handleAutoUpdateInteraction, true);
    document.addEventListener('touchend', handleAutoUpdateInteraction, true);
    document.addEventListener('click', handleAutoUpdateInteraction, true);
    document.addEventListener('mouseover', scheduleInjectPortCards, true);
    document.addEventListener('focusin', scheduleInjectPortCards, true);
  }

  function setupPageObserver() {
    if (observerReady || !document.body) return;
    observerReady = true;

    const observer = new MutationObserver(() => {
      window.clearTimeout(syncTimer);
      syncTimer = window.setTimeout(() => {
        scrapeCurrentVisibleData({ upload: false, silent: true });
        scheduleInjectPortCards();
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
    scheduleInjectPortCards();

    setTimeout(() => {
      fetchCloudData({ silent: true });
      scrapeCurrentVisibleData({ upload: false, silent: true });
      scheduleInjectPortCards();
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
