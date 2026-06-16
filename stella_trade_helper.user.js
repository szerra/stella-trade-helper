// ==UserScript==
// @name         閒著上鉤-雲端同步跑商情報站
// @namespace    https://github.com/szerra/stella-trade-helper
// @version      1.6.49
// @description  修正手機設定頁排版，避免左右滑動；保留中英文顯示與英文掃描支援。
// @author       YourName
// @homepageURL  https://github.com/szerra/stella-trade-helper
// @updateURL    https://raw.githubusercontent.com/szerra/stella-trade-helper/main/stella_trade_helper.user.js
// @downloadURL  https://raw.githubusercontent.com/szerra/stella-trade-helper/main/stella_trade_helper.user.js
// @match        *://fishingidle.com/*
// @grant        GM_xmlhttpRequest
// @grant        GM.xmlHttpRequest
// @connect      script.google.com
// @connect      script.googleusercontent.com
// @run-at       document-end
// ==/UserScript==

(() => {
  'use strict';

  console.log('[StellaTrade 1.6.49] 腳本已載入：i18n mobile settings fix');

  const DEFAULT_API_URL = 'https://script.google.com/macros/s/AKfycbyWdyVKqvwF2SlC8mrJKebK6vg3wsRLsrK4El8ziRj9o4tDV4oz4-rkHJRiWc36wG_pBA/exec';

  function getApiUrl() {
    return DEFAULT_API_URL;
  }

  const DATA_KEY = 'stella_real_market_data';
  const SEEN_KEY = 'stella_seen_market_data';
  const SETTINGS_KEY = 'stella_trade_panel_settings';
  const PANEL_STATE_KEY = 'stella_trade_panel_state';
  const SELECTED_PORT_KEY = 'stella_selected_port';

  const CLICK_UPDATE_DELAY = 1200;
  const RETURN_UPDATE_COOLDOWN = 2500;
  const CLOUD_PULL_INTERVAL = 90 * 1000;
  const CLOUD_PULL_AFTER_UPLOAD_DELAY = 45 * 1000;
  const AUTO_PUBLISH_INTERVAL = 5 * 60 * 1000;
  const TOAST_COOLDOWN = 60 * 1000;

  const DEFAULT_SETTINGS = {
    defaultTab: 'changes',
    language: 'auto',
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
  let autoPublishTimer = null;
  let lastClickUpdateAt = 0;
  let lastCloudPullAt = 0;
  let lastAutoPublishAt = 0;
  let lastToastAt = 0;
  let cloudPullPausedUntil = 0;
  let started = false;
  let observerReady = false;
  let listenersReady = false;

  const LAST_SYNC_ERROR_KEY = 'stella_trade_last_sync_error';

  const syncState = {
    ok: null,
    lastSuccessAt: null,
    lastFailureAt: null,
    lastError: localStorage.getItem(LAST_SYNC_ERROR_KEY) || '',
  };

  const portNormalize = {
    '雾灯群岛': '霧燈群島',
    '霧燈群島': '霧燈群島',
    'Mist Lantern Isles': '霧燈群島',
    'mist_lantern_isles': '霧燈群島',
    '星沉湾': '星沉灣',
    '星沉灣': '星沉灣',
    'Starfall Bay': '星沉灣',
    'starfall_bay': '星沉灣',
    '夜帆市': '夜帆市',
    'Night Sail City': '夜帆市',
    'night_sail_city': '夜帆市',
    '鲸歌港': '鯨歌港',
    '鯨歌港': '鯨歌港',
    'Whalesong Harbor': '鯨歌港',
    'Whale Song Harbor': '鯨歌港',
    'whale_song_harbor': '鯨歌港',
    '潮镜礁': '潮鏡礁',
    '潮境礁': '潮鏡礁',
    '潮鏡礁': '潮鏡礁',
    'Tideglass Reef': '潮鏡礁',
    'tideglass_reef': '潮鏡礁',
    '珊文港': '珊文港',
    'Coral Script Port': '珊文港',
    'coral_script_port': '珊文港'
  };

  const itemNormalize = {
    '雾灯芯': '霧燈芯',
    '霧燈芯': '霧燈芯',
    'Mist Lantern Wick': '霧燈芯',
    'souvenir_mist_lantern_wick': '霧燈芯',

    '航雾铜牌': '航霧銅牌',
    '航霧銅牌': '航霧銅牌',
    'Fogbound Copper Tag': '航霧銅牌',
    'souvenir_fogbound_copper_tag': '航霧銅牌',

    '星沙瓶': '星砂瓶',
    '星砂瓶': '星砂瓶',
    'Star Sand Bottle': '星砂瓶',
    'souvenir_star_sand_bottle': '星砂瓶',

    '海妖咖啡': '海妖咖啡',
    'Siren Coffee': '海妖咖啡',
    'coffee_siren': '海妖咖啡',

    '浮梦拿铁': '浮夢拿鐵',
    '浮夢拿鐵': '浮夢拿鐵',
    'Dream Latte': '浮夢拿鐵',
    'coffee_dream_latte': '浮夢拿鐵',

    '礁糖玛奇朵': '礁糖瑪奇朵',
    '礁糖瑪奇朵': '礁糖瑪奇朵',
    'Reef Sugar Macchiato': '礁糖瑪奇朵',
    'coffee_reef_sugar_macchiato': '礁糖瑪奇朵',

    '小急救包': '小急救包',
    '一次性醫療物品': '小急救包',
    '一次性医疗物品': '小急救包',
    'Small First Aid Kit': '小急救包',
    'Small Medical Kit': '小急救包',
    'med_small_kit': '小急救包',

    '夜帆布': '夜帆布',
    '夜帆绸': '夜帆綢',
    '夜帆綢': '夜帆綢',
    '夜帆絹': '夜帆綢',
    '夜帆绳': '夜帆綢',
    '夜帆繩': '夜帆綢',
    'Night Sail Silk': '夜帆綢',
    'souvenir_night_sail_silk': '夜帆綢',

    '小米酒': '米酒',
    '米酒': '米酒',
    'Rice Wine': '米酒',
    'adv_cons_rice_wine': '米酒',

    '烈酒': '烈酒',
    'Strong Liquor': '烈酒',
    'cons_strong_liquor': '烈酒',

    '中急救包': '中急救包',
    'Medium First Aid Kit': '中急救包',
    'Medium Medical Kit': '中急救包',
    'med_medium_kit': '中急救包',

    '鲸歌骨笛': '鯨歌骨笛',
    '鯨歌骨笛': '鯨歌骨笛',
    'Whalesong Bone Flute': '鯨歌骨笛',
    'Whale Bone Flute': '鯨歌骨笛',
    'souvenir_whale_bone_flute': '鯨歌骨笛',

    '安神贝露': '安神貝露',
    '安神貝露': '安神貝露',
    'Soothing Shell Dew': '安神貝露',
    'coffee_soothing_shell_dew': '安神貝露',

    '潮镜贝': '潮鏡貝',
    '潮鏡貝': '潮鏡貝',
    'Tideglass Shell': '潮鏡貝',
    'souvenir_tideglass_shell': '潮鏡貝',

    '黑潮摩卡': '黑潮摩卡',
    'Black Tide Mocha': '黑潮摩卡',
    'coffee_black_tide_mocha': '黑潮摩卡',

    '幻潮冷萃': '幻潮冷萃',
    'Phantom Tide Cold Brew': '幻潮冷萃',
    'coffee_phantom_tide_cold_brew': '幻潮冷萃',

    '珊文签': '珊文簽',
    '珊文籤': '珊文簽',
    '珊文簽': '珊文簽',
    'Coral Script Bookmark': '珊文簽',
    'souvenir_coral_script_bookmark': '珊文簽'
  };

  const ports = [
    { port: '星沉灣', keywords: ['星沉', '星沉灣', '星沉湾', 'Starfall', 'Starfall Bay', 'starfall_bay'], items: ['星砂瓶', '浮夢拿鐵', '海妖咖啡', '礁糖瑪奇朵', '小急救包'] },
    { port: '夜帆市', keywords: ['夜帆', 'Night Sail', 'Night Sail City', 'night_sail_city'], items: ['夜帆綢', '黑潮摩卡', '安神貝露', '烈酒', '米酒', '中急救包'] },
    { port: '鯨歌港', keywords: ['鯨歌', '鲸歌', 'Whalesong', 'Whalesong Harbor', 'Whale Song Harbor', 'whale_song_harbor'], items: ['鯨歌骨笛', '安神貝露', '海妖咖啡'] },
    { port: '潮鏡礁', keywords: ['潮鏡', '潮镜', '潮境', 'Tideglass', 'Tideglass Reef', 'tideglass_reef'], items: ['潮鏡貝', '礁糖瑪奇朵', '黑潮摩卡'] },
    { port: '霧燈群島', keywords: ['霧燈', '雾灯', '擺燈', '摆灯', 'Mist Lantern', 'Mist Lantern Isles', 'mist_lantern_isles'], items: ['航霧銅牌', '霧燈芯', '幻潮冷萃', '浮夢拿鐵', '黑潮摩卡'] },
    { port: '珊文港', keywords: ['珊文', 'Coral Script', 'Coral Script Port', 'coral_script_port'], items: ['珊文簽', '幻潮冷萃', '浮夢拿鐵'] },
  ];

  const PORT_DISPLAY_NAMES = {
    zh: {
      '星沉灣': '星沉灣',
      '夜帆市': '夜帆市',
      '鯨歌港': '鯨歌港',
      '潮鏡礁': '潮鏡礁',
      '霧燈群島': '霧燈群島',
      '珊文港': '珊文港'
    },
    en: {
      '星沉灣': 'Starfall Bay',
      '夜帆市': 'Night Sail City',
      '鯨歌港': 'Whalesong Harbor',
      '潮鏡礁': 'Tideglass Reef',
      '霧燈群島': 'Mist Lantern Isles',
      '珊文港': 'Coral Script Port'
    }
  };

  const ITEM_DISPLAY_NAMES = {
    zh: {
      '星砂瓶': '星砂瓶',
      '浮夢拿鐵': '浮夢拿鐵',
      '海妖咖啡': '海妖咖啡',
      '礁糖瑪奇朵': '礁糖瑪奇朵',
      '小急救包': '小急救包',
      '夜帆綢': '夜帆綢',
      '黑潮摩卡': '黑潮摩卡',
      '安神貝露': '安神貝露',
      '烈酒': '烈酒',
      '米酒': '米酒',
      '中急救包': '中急救包',
      '鯨歌骨笛': '鯨歌骨笛',
      '潮鏡貝': '潮鏡貝',
      '航霧銅牌': '航霧銅牌',
      '霧燈芯': '霧燈芯',
      '幻潮冷萃': '幻潮冷萃',
      '珊文簽': '珊文簽'
    },
    en: {
      '星砂瓶': 'Star Sand Bottle',
      '浮夢拿鐵': 'Dream Latte',
      '海妖咖啡': 'Siren Coffee',
      '礁糖瑪奇朵': 'Reef Sugar Macchiato',
      '小急救包': 'Small First Aid Kit',
      '夜帆綢': 'Night Sail Silk',
      '黑潮摩卡': 'Black Tide Mocha',
      '安神貝露': 'Soothing Shell Dew',
      '烈酒': 'Strong Liquor',
      '米酒': 'Rice Wine',
      '中急救包': 'Medium First Aid Kit',
      '鯨歌骨笛': 'Whalesong Bone Flute',
      '潮鏡貝': 'Tideglass Shell',
      '航霧銅牌': 'Fogbound Copper Tag',
      '霧燈芯': 'Mist Lantern Wick',
      '幻潮冷萃': 'Phantom Tide Cold Brew',
      '珊文簽': 'Coral Script Bookmark'
    }
  };

  const I18N = {
    zh: {
      syncLast: '最後同步', syncOk: '雲端同步：正常', syncFail: '雲端同步：失敗', syncFailCompact: '同步失敗', syncHint: '　請看設定頁的錯誤詳情', syncWait: '雲端同步：確認中',
      emptyChangesTitle: '目前沒有新的貨物變化', emptyChangesSub: '同步後若有港口商品變化，會顯示在這裡。', changesSinceRead: '自上次標記已讀後，共 {n} 項變化。', markRead: '標記為已讀',
      newItem: '新增商品', itemRemoved: '商品消失', original: '原', coin: '魚幣', restockChanged: '補貨變化',
      itemCount: '{n} 項商品', lastUpdate: '最後更新：{time}', lowStock: '低庫存 {n}', changeCount: '變化 {n}', noChange: '無變化',
      sort: '排序', sortLowStock: '低庫存', sortTime: '更新時間', sortPrice: '價格', sortName: '商品名稱', goodsEmpty: '目前沒有商品資料',
      update: '更新', restock: '補貨', estimatedRestock: '推估補貨', restockBasisSkill: '　補貨基準：技能掃描', added: '新增', disappeared: '消失', changed: '變更',
      settingsLanguage: '語言', settingsLanguageSub: 'Auto 會優先依遊戲畫面判斷，再看瀏覽器語言。', langAuto: 'Auto', langZh: '中文', langEn: 'English',
      showToast: '顯示同步失敗提示', showToastSub: '失敗時右上角跳出提醒。', showBadge: '顯示變化角標', showBadgeSub: '上方跑商情報按鈕顯示變化數字。', showTravel: '顯示航程預估', showTravelSub: '在港口下方簡化資訊中顯示預計到達與返航。', defaultPage: '開啟面板預設頁', defaultPageSub: '下次打開情報面板時優先顯示。', lowStockRatio: '低庫存比例', lowStockRatioSub: '低於比例時，港口與商品會被標記。', cloudDiag: '雲端診斷', url: '網址', status: '狀態', normal: '正常', failed: '失敗', checking: '確認中', lastSuccess: '最後成功', lastFailure: '最後失敗', error: '錯誤', resetChanges: '重置變化紀錄', scanCurrent: '掃描目前畫面', syncNow: '立即同步雲端', pingCloud: '測試雲端連線',
      panelTitle: '🚢 跑商情報站', panelSubtitle: '港口庫存・價格・變化追蹤', close: '關閉', hasChanges: '有 {n} 項變化', noNewChanges: '沒有新的變化', tabChanges: '變化', tabOverview: '概覽', tabPorts: '港口', tabSettings: '設定', launcher: '跑商情報',
      travelTitle: '航程預估', travelDuration: '航行時間', travelArrive: '預計到達', travelReturn: '預計返航', tomorrow: '明天', goodsInfo: '貨物情報', itemsShort: '{n} 項', estimate: '推估', noSyncData: '目前沒有同步資料',
      resetToastTitle: '已重置變化紀錄', resetToastMessage: '目前資料已設為新的比對基準。', noScanTitle: '沒有掃到港口情報', noScanMessage: '目前畫面沒有可讀取的商品卡，請先開啟港口情報或商品頁。', skillScanToastTitle: '✅ 港口情報已掃描', skillScanToastMessage: '{port} 已讀取 {n} 項商品', cloudNewerTitle: '☁️ 雲端資料較新', cloudNewerMessage: '本次 {n} 筆舊資料已略過，不算失敗{sheet}', uploadFailTitle: '⚠️ 上傳雲端失敗', uploadFailMessage: '資料目前只保存在本機。原因：{reason}', syncFailTitle: '⚠️ 雲端同步失敗', syncFailMessage: '原因：{reason}', pingFailTitle: '⚠️ 雲端連線測試失敗', pingOkTitle: '✅ 雲端連線正常', pingOkMessage: 'Web App 回應正常｜{time}'
    },
    en: {
      syncLast: 'Last sync', syncOk: 'Cloud sync: OK', syncFail: 'Cloud sync: Failed', syncFailCompact: 'Sync failed', syncHint: '  Check error details in Settings', syncWait: 'Cloud sync: Checking',
      emptyChangesTitle: 'No new cargo changes', emptyChangesSub: 'Port item changes will appear here after sync.', changesSinceRead: '{n} changes since last marked as read.', markRead: 'Mark as Read',
      newItem: 'New Item', itemRemoved: 'Item Removed', original: 'Was', coin: 'Coins', restockChanged: 'Restock Changed',
      itemCount: '{n} items', lastUpdate: 'Last update: {time}', lowStock: 'Low stock {n}', changeCount: 'Changes {n}', noChange: 'No change',
      sort: 'Sort', sortLowStock: 'Low stock', sortTime: 'Update time', sortPrice: 'Price', sortName: 'Item name', goodsEmpty: 'No item data yet',
      update: 'Update', restock: 'Restock', estimatedRestock: 'Estimated restock', restockBasisSkill: '  Basis: skill scan', added: 'New', disappeared: 'Gone', changed: 'Changed',
      settingsLanguage: 'Language', settingsLanguageSub: 'Auto checks the game screen first, then browser language.', langAuto: 'Auto', langZh: '中文', langEn: 'English',
      showToast: 'Show sync failure toast', showToastSub: 'Show a toast in the upper-right when sync fails.', showBadge: 'Show change badge', showBadgeSub: 'Show the number of changes on the Trade Info button.', showTravel: 'Show travel estimate', showTravelSub: 'Show ETA and return time below port cards.', defaultPage: 'Default panel tab', defaultPageSub: 'Preferred tab when opening the panel.', lowStockRatio: 'Low stock threshold', lowStockRatioSub: 'Mark ports and items below this ratio.', cloudDiag: 'Cloud diagnostics', url: 'URL', status: 'Status', normal: 'OK', failed: 'Failed', checking: 'Checking', lastSuccess: 'Last success', lastFailure: 'Last failure', error: 'Error', resetChanges: 'Reset change record', scanCurrent: 'Scan current screen', syncNow: 'Sync now', pingCloud: 'Test cloud connection',
      panelTitle: '🚢 Trade Info Station', panelSubtitle: 'Port stock ・ prices ・ change tracking', close: 'Close', hasChanges: '{n} changes', noNewChanges: 'No new changes', tabChanges: 'Changes', tabOverview: 'Overview', tabPorts: 'Ports', tabSettings: 'Settings', launcher: 'Trade Info',
      travelTitle: 'Travel Estimate', travelDuration: 'Travel Time', travelArrive: 'ETA', travelReturn: 'Return ETA', tomorrow: 'Tomorrow', goodsInfo: 'Cargo Info', itemsShort: '{n} items', estimate: 'Estimate', noSyncData: 'No synced data yet',
      resetToastTitle: 'Change record reset', resetToastMessage: 'Current data is now the comparison baseline.', noScanTitle: 'No port info found', noScanMessage: 'No readable item card was found. Open a port info or item page first.', skillScanToastTitle: '✅ Port info scanned', skillScanToastMessage: '{port}: {n} items read', cloudNewerTitle: '☁️ Cloud data is newer', cloudNewerMessage: '{n} older local records were skipped; not an error{sheet}', uploadFailTitle: '⚠️ Cloud upload failed', uploadFailMessage: 'Data is saved locally only. Reason: {reason}', syncFailTitle: '⚠️ Cloud sync failed', syncFailMessage: 'Reason: {reason}', pingFailTitle: '⚠️ Cloud connection test failed', pingOkTitle: '✅ Cloud connection OK', pingOkMessage: 'Web App responded normally｜{time}'
    }
  };

  function detectGameLanguage() {
    const htmlLang = String(document.documentElement?.lang || '').toLowerCase();
    if (htmlLang.startsWith('en')) return 'en';
    if (htmlLang.startsWith('zh')) return 'zh';

    const text = String(document.body?.innerText || '').slice(0, 8000);
    const enHits = (text.match(/\b(Quantity|Details|Language|Stock|Price|Restock|Depart|Return|Market|Warehouse|Trade Info|Coins)\b/g) || []).length;
    const zhHits = (text.match(/(數量|数量|詳情|详情|語言|语言|庫存|库存|價格|价格|補貨|补货|出發|出发|返回|返航|市場|市场|倉庫|仓库)/g) || []).length;
    if (enHits > zhHits && enHits >= 2) return 'en';
    if (zhHits > 0) return 'zh';
    return navigator.language && navigator.language.toLowerCase().startsWith('en') ? 'en' : 'zh';
  }

  function currentLang() {
    const mode = readSettings().language || 'auto';
    if (mode === 'en' || mode === 'zh') return mode;
    return detectGameLanguage();
  }

  function t(key, vars = {}) {
    const lang = currentLang();
    let value = (I18N[lang] && I18N[lang][key]) || I18N.zh[key] || key;
    for (const [name, replacement] of Object.entries(vars || {})) {
      value = value.replaceAll(`{${name}}`, String(replacement));
    }
    return value;
  }

  function displayPortName(portName) {
    const port = normPort(portName);
    return (PORT_DISPLAY_NAMES[currentLang()] && PORT_DISPLAY_NAMES[currentLang()][port]) || PORT_DISPLAY_NAMES.zh[port] || port;
  }

  function displayItemName(itemName) {
    const item = normItem(itemName);
    return (ITEM_DISPLAY_NAMES[currentLang()] && ITEM_DISPLAY_NAMES[currentLang()][item]) || ITEM_DISPLAY_NAMES.zh[item] || item;
  }

  function coinText(value) {
    if (value === null || value === undefined || value === '' || value === '-') return '-';
    return `${value} ${t('coin')}`;
  }

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
    return {
      count: 0,
      max: null,
      time: '尚未更新',
      price: '-',
      restock: '-',
      lastRestockAt: '',
      soldOutAt: '',
      estimatedRestockAt: '',
      estimateStatus: 'unknown',
      restockAnchorAt: '',
      restockAnchorCount: '',
      restockAnchorMax: '',
      estimateBasis: '',
      estimateText: '',
      lastRestockSource: '',
      observationSource: '',
      clientObservedAt: '',
      syncVersion: ''
    };
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
      text.includes('购买') ||
      lower.includes('description') ||
      lower.includes('effect') ||
      lower.includes('cooldown') ||
      lower.includes('price') ||
      lower.includes('stock') ||
      lower.includes('quantity') ||
      lower.includes('purchase')
    );
  }

  function isDetailTextBlock(text) {
    const t = String(text || '');
    return (
      t.includes('類別') ||
      t.includes('类别') ||
      t.toLowerCase().includes('category') ||
      t.toLowerCase().includes('description') ||
      t.toLowerCase().includes('effect') ||
      t.toLowerCase().includes('cooldown') ||
      t.toLowerCase().includes('price') ||
      t.toLowerCase().includes('stock') ||
      t.toLowerCase().includes('quantity') ||
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

  function getPortDefByName(portName) {
    const cleanPort = normPort(portName);
    return ports.find(def => def.port === cleanPort) || null;
  }

  function isAllowedItemForPort(portName, itemName) {
    const portDef = getPortDefByName(portName);
    const cleanItem = normItem(itemName);
    return !!portDef && portDef.items.includes(cleanItem);
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
        if (!isAllowedItemForPort(port, item)) continue;
        const safe = info && typeof info === 'object' ? info : {};
        const count = num(safe.count ?? safe.quantity ?? safe.stock ?? safe.amount);
        // 1.6.25 修正：
        // 這個函式原本只保留 count/max/price/restock/time，
        // 導致雲端同步進來的 estimatedRestockAt / estimateStatus / estimateBasis
        // 在面板渲染前被清掉，所以畫面一直顯示「推估補貨：資料不足」。
        // 現在保留完整補貨推估欄位，面板才能正確顯示雲端已有的推估時間。
        cleaned[port][item] = {
          count: count ?? 0,
          max: num(safe.max),
          price: safe.price || '-',
          restock: safe.restockTime || safe.nextRestock || safe.restock || '-',
          time: safe.time || '未知',
          lastRestockAt: safe.lastRestockAt || '',
          soldOutAt: safe.soldOutAt || '',
          estimatedRestockAt: safe.estimatedRestockAt || '',
          estimateStatus: safe.estimateStatus || 'unknown',
          restockAnchorAt: safe.restockAnchorAt || '',
          restockAnchorCount: safe.restockAnchorCount || '',
          restockAnchorMax: safe.restockAnchorMax || '',
          estimateBasis: safe.estimateBasis || '',
          estimateText: safe.estimateText || safe.restockEstimateText || safe.estimatedRestockText || '',
          lastRestockSource: safe.lastRestockSource || safe.restockSource || '',
          observationSource: safe.observationSource || safe.source || '',
          clientObservedAt: safe.clientObservedAt || safe.syncVersion || '',
          syncVersion: safe.syncVersion || safe.clientObservedAt || ''
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

        if (!isAllowedItemForPort(portName, cleanItem)) {
          delete items[cleanItem];
          changed = true;
          continue;
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
      text.includes('打听库存') ||
      text.includes('Tavern Rumors') ||
      text.includes('Stock Intel') ||
      text.includes('Ask About Stock')
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

  function isMobileViewport() {
    return window.matchMedia && window.matchMedia('(max-width: 720px)').matches;
  }

  function extractStock(text) {
    const m = text.match(/(?:库存|庫存|Stock|Quantity|Qty)\s*[:：]?\s*([0-9,]+)\s*\/\s*([0-9,]+)/i);
    if (!m) return null;
    const count = num(m[1]);
    const max = num(m[2]);
    if (count === null || max === null) return null;
    return { count, max };
  }

  function extractPrice(text) {
    const labeled = text.match(/(?:價格|价格|售价|售價|單價|单价|Price|Sale Price|Unit Price)[:：]?\s*([0-9,]+)/i);
    if (labeled) return String(num(labeled[1]) ?? labeled[1]);
    const currency = text.match(/([0-9,]+)\s*(?:金币|金幣|鱼币|魚幣|幣|币|Coins?|Gold)/i);
    if (currency) return String(num(currency[1]) ?? currency[1]);
    return '-';
  }

  function extractRestock(text) {
    const m = text.match(/(?:補貨|补货|補貨時間|补货时间|Restock|Restock Time|Next Restock)[:：]?\s*([0-9/:.\-\s]+(?:上午|下午|AM|PM)?\s*[0-9/:.\-\s]*)/i);
    return m ? m[1].trim() : '-';
  }

  function extractItemNameByKnownList(text, portDef) {
    const candidates = [...new Set(portDef.items)];
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

      const stocks = text.match(/(?:库存|庫存|Stock|Quantity|Qty)\s*[:：]?\s*[0-9,]+\s*\/\s*[0-9,]+/gi) || [];
      if (stocks.length !== 1) continue;

      const stock = extractStock(text);
      if (!stock) continue;

      let itemName = extractItemNameByKnownList(text, portDef);
      if (!itemName) itemName = extractItemNameFallback(text);
      itemName = normItem(itemName);
      if (!itemName || isInvalidItemName(itemName)) continue;
      if (!portDef.items.includes(itemName)) continue;

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


  function isProfessionScanPage(text) {
    const t = String(text || '');
    return (
      (t.includes('港口情報') || t.includes('港口情报') || t.includes('Port Info') || t.includes('Port Intel')) &&
      (t.includes('上次刷新') || t.includes('上次補貨') || t.includes('上次补货') || t.includes('Last Refresh') || t.includes('Last Restock')) &&
      (t.includes('庫存') || t.includes('库存') || t.includes('Stock') || t.includes('Quantity'))
    );
  }

  function formatDateTimeForUpload(timestamp, withSeconds = true) {
    const d = new Date(timestamp);
    if (Number.isNaN(d.getTime())) return '';
    const yy = d.getFullYear();
    const mo = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    const hh = String(d.getHours()).padStart(2, '0');
    const mi = String(d.getMinutes()).padStart(2, '0');
    const ss = String(d.getSeconds()).padStart(2, '0');
    return withSeconds ? `${yy}/${mo}/${dd} ${hh}:${mi}:${ss}` : `${yy}/${mo}/${dd} ${hh}:${mi}`;
  }

  function extractSkillRefreshTimestamp(text, reference = new Date()) {
    const raw = String(text || '');
    let m = raw.match(/(?:上次刷新|上次補貨|上次补货|Last\s+Refresh|Last\s+Restock)\s*(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})\s+(\d{1,2}):(\d{2})(?::(\d{2}))?/);
    if (m) {
      const [, y, mo, d, h, mi, s] = m;
      const ts = new Date(Number(y), Number(mo) - 1, Number(d), Number(h), Number(mi), Number(s || 0)).getTime();
      return Number.isFinite(ts) ? ts : null;
    }

    m = raw.match(/(?:上次刷新|上次補貨|上次补货|Last\s+Refresh|Last\s+Restock)\s*(\d{1,2})[\/\-](\d{1,2})\s+(\d{1,2}):(\d{2})(?::(\d{2}))?/);
    if (!m) return null;

    const [, mo, d, h, mi, s] = m;
    let year = reference.getFullYear();
    let ts = new Date(year, Number(mo) - 1, Number(d), Number(h), Number(mi), Number(s || 0)).getTime();

    // 跨年時避免把 12 月資料算成明年。時間這種東西，居然還要替電腦猜，真是文明奇蹟。
    if (Number.isFinite(ts) && ts > reference.getTime() + 24 * 60 * 60 * 1000) {
      ts = new Date(year - 1, Number(mo) - 1, Number(d), Number(h), Number(mi), Number(s || 0)).getTime();
    }

    return Number.isFinite(ts) ? ts : null;
  }

  function scanProfessionSkillGoods(portDef) {
    const result = {};
    const elements = [...document.querySelectorAll('div, li, tr, section, article, button')];
    const now = new Date();

    for (const el of elements) {
      if (!visible(el)) continue;
      if (el.closest('#stella-trade-modal-backdrop, #stella-trade-launcher, #stella-trade-launcher-fallback, #stella-sync-toast, .stella-detail-goods')) continue;

      const text = el.innerText?.trim();
      if (!text || text.length > 1200) continue;
      if (!/(上次(?:刷新|補貨|补货)|Last\s+(?:Refresh|Restock))/i.test(text)) continue;

      const stocks = text.match(/(?:库存|庫存|Stock|Quantity|Qty)\s*[:：]?\s*[0-9,]+\s*\/\s*[0-9,]+/gi) || [];
      if (stocks.length !== 1) continue;

      const stock = extractStock(text);
      if (!stock) continue;

      let itemName = extractItemNameByKnownList(text, portDef);
      if (!itemName) itemName = extractItemNameFallback(text);
      itemName = normItem(itemName);
      if (!itemName || isInvalidItemName(itemName)) continue;
      if (!portDef.items.includes(itemName)) continue;

      const refreshAt = extractSkillRefreshTimestamp(text, now);
      const refreshText = refreshAt ? formatDateTimeForUpload(refreshAt, true) : '';
      const info = {
        name: itemName,
        count: stock.count,
        max: stock.max,
        price: extractPrice(text),
        restock: '-',
        source: 'skill_scan',
        skillRefreshAt: refreshAt || '',
        skillRefreshText: refreshText,
        // 只有售罄商品的「上次刷新」才當成真正補貨基準。其他商品只更新庫存，別把人類觀察污染成神諭。
        skillLastRestockAt: stock.count <= 0 && refreshAt ? refreshAt : '',
        skillLastRestockText: stock.count <= 0 && refreshText ? refreshText : '',
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
      String(oldInfo.restock ?? '-') !== String(newInfo.restock ?? '-') ||
      String(oldInfo.lastRestockAt ?? '') !== String(newInfo.lastRestockAt ?? '') ||
      String(oldInfo.lastRestockSource ?? '') !== String(newInfo.lastRestockSource ?? '')
    );
  }

  function scrapeCurrentVisibleData({ upload = true, silent = true } = {}) {
    const text = getCleanPageText();
    const isSkillScan = isProfessionScanPage(text);
    if (isTavernPage(text) && !isSkillScan) return false;

    const portDef = detectCurrentPort(text);
    if (!portDef) {
      if (!silent) console.log('[StellaTrade] 未偵測到可同步港口');
      return false;
    }

    const goods = isSkillScan ? scanProfessionSkillGoods(portDef) : scanGoods(portDef);
    if (!goods.length) {
      if (!silent) console.log(`[StellaTrade] ${portDef.port} 沒有讀到商品列`);
      return false;
    }

    const data = ensureData();
    if (!data[portDef.port]) data[portDef.port] = {};

    const time = nowText();
    const observedAtMs = Date.now();
    const uploadGoods = [];
    let changed = 0;

    for (const good of goods) {
      const itemName = normItem(good.name);
      if (!portDef.items.includes(itemName)) continue;

      const oldInfo = data[portDef.port][itemName] || {};
      const isSkillItem = good.source === 'skill_scan';
      const skillLastRestockAt = good.skillLastRestockAt || '';
      const skillLastRestockText = good.skillLastRestockText || '';
      const baseInfo = {
        count: good.count,
        max: good.max,
        time: time,
        price: good.price || oldInfo.price || '-',
        restock: good.restock || oldInfo.restock || '-',
        lastRestockAt: skillLastRestockAt || oldInfo.lastRestockAt || '',
        lastRestockSource: skillLastRestockAt ? 'skill_scan' : (oldInfo.lastRestockSource || ''),
        observationSource: isSkillItem ? 'skill_scan' : 'page_observe',
        estimateBasis: skillLastRestockAt ? '技能掃描補貨時間' : (oldInfo.estimateBasis || ''),
        clientObservedAt: observedAtMs,
        syncVersion: observedAtMs
      };

      const newInfo = applyRestockEstimate(oldInfo, baseInfo, observedAtMs);
      if (skillLastRestockAt) {
        newInfo.lastRestockAt = skillLastRestockAt;
        newInfo.lastRestockSource = 'skill_scan';
        newInfo.estimateBasis = '技能掃描補貨時間';
      }

      if (!data[portDef.port][itemName] || infoChanged(oldInfo, newInfo)) {
        data[portDef.port][itemName] = newInfo;
        changed++;
      } else {
        data[portDef.port][itemName] = Object.assign({}, oldInfo, newInfo);
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
        nextRestock: newInfo.restock,
        lastRestockAt: newInfo.lastRestockAt || '',
        lastRestockSource: newInfo.lastRestockSource || '',
        observationSource: newInfo.observationSource || '',
        soldOutAt: newInfo.soldOutAt || '',
        estimatedRestockAt: newInfo.estimatedRestockAt || '',
        estimateStatus: newInfo.estimateStatus || 'unknown',
        restockAnchorAt: newInfo.restockAnchorAt || '',
        restockAnchorCount: newInfo.restockAnchorCount || '',
        restockAnchorMax: newInfo.restockAnchorMax || '',
        estimateBasis: newInfo.estimateBasis || '',
        estimateText: newInfo.estimateText || '',
        skillRefreshAt: good.skillRefreshText || good.skillRefreshAt || '',
        source: isSkillItem ? 'skill_scan' : 'page_observe',
        clientObservedAt: newInfo.clientObservedAt || observedAtMs,
        syncVersion: newInfo.syncVersion || newInfo.clientObservedAt || observedAtMs
      });
    }

    writeData(data);
    localStorage.setItem(SELECTED_PORT_KEY, portDef.port);
    scheduleInject();
    schedulePanelRender();
    scheduleLauncherUpdate();

    if (upload && uploadGoods.length) uploadToCloud(portDef.port, time, uploadGoods, { source: isSkillScan ? 'skill_scan' : 'page_observe' });
    if (changed > 0) {
      const label = isSkillScan ? '技能掃描' : '頁面觀察';
      console.log(`[StellaTrade] 已更新 ${portDef.port}：${changed} 項商品（${label}）`);
      if (isSkillScan && readSettings().showToast) showSyncToast(t('skillScanToastTitle'), t('skillScanToastMessage', { port: displayPortName(portDef.port), n: uploadGoods.length }));
    }
    return true;
  }

  function stringifyErrorDetail(detail) {
    if (detail === null || detail === undefined || detail === '') return '';
    if (typeof detail === 'string') return detail;
    if (detail instanceof Error) return detail.message || String(detail);
    try {
      return JSON.stringify(detail, Object.getOwnPropertyNames(detail)).slice(0, 500);
    } catch (error) {
      return String(detail);
    }
  }

  function markSyncSuccess() {
    syncState.ok = true;
    syncState.lastSuccessAt = Date.now();
    syncState.lastError = '';
    localStorage.removeItem(LAST_SYNC_ERROR_KEY);
    scheduleInject();
    schedulePanelRender();
    scheduleLauncherUpdate();
  }

  function markSyncFailure(type = 'sync', detail = '') {
    const detailText = stringifyErrorDetail(detail);
    syncState.ok = false;
    syncState.lastFailureAt = Date.now();
    syncState.lastError = detailText ? `${type}: ${detailText}` : type;
    localStorage.setItem(LAST_SYNC_ERROR_KEY, syncState.lastError);
    console.warn('[StellaTrade] 雲端同步失敗：', type, detail || '');

    const settings = readSettings();
    const now = Date.now();
    if (settings.showToast && now - lastToastAt >= TOAST_COOLDOWN) {
      lastToastAt = now;
      if (type === 'upload') {
        showSyncToast(t('uploadFailTitle'), t('uploadFailMessage', { reason: syncState.lastError || '未知錯誤' }));
      } else {
        showSyncToast(t('syncFailTitle'), t('syncFailMessage', { reason: syncState.lastError || '未知錯誤' }));
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
      return { ok: false, message: '雲端回傳 HTML，不是 JSON。請檢查部署權限或是否登入驗證頁。預覽：' + text.slice(0, 120), preview: text.slice(0, 300) };
    }

    try {
      return { ok: true, data: JSON.parse(text) };
    } catch (error) {
      return { ok: false, message: '雲端回傳格式不是有效 JSON。預覽：' + text.slice(0, 120), preview: text.slice(0, 300), error };
    }
  }

  function uploadToCloud(port, time, goods, extra = {}) {
    request({
      method: 'POST',
      url: getApiUrl(),
      data: JSON.stringify({ action: 'update_v7', port: normPort(port), time, goods, source: extra.source || '', clientObservedAt: Date.now(), syncVersion: Date.now() }),
      headers: { 'Content-Type': 'application/json' },
      onload(response) {
        if (response.status !== 200) {
          markSyncFailure('upload', `HTTP ${response.status} ${String(response.responseText || '').slice(0, 160)}`);
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

        console.log('[StellaTrade] 上傳回應：', parsed.data);

        if (parsed.data && parsed.data.status === 'success' && Number(parsed.data.accepted || 0) === 0) {
          const skipped = Number(parsed.data.skipped || 0);
          const staleSkipped = Number(parsed.data.staleSkipped || 0);
          const sheetName = parsed.data.sheetName ? `，寫入頁籤：${parsed.data.sheetName}` : '';
          if (staleSkipped > 0 && skipped === 0) {
            markSyncSuccess();
            if (readSettings().showToast) showSyncToast(t('cloudNewerTitle'), t('cloudNewerMessage', { n: staleSkipped, sheet: sheetName }));
            return;
          }
          markSyncFailure('upload', `雲端收到請求，但沒有寫入商品。accepted=0，skipped=${skipped}，staleSkipped=${staleSkipped}${sheetName}`);
          return;
        }

        markSyncSuccess();
        lastCloudPullAt = Date.now();
        cloudPullPausedUntil = Date.now() + CLOUD_PULL_AFTER_UPLOAD_DELAY;
        console.log('[StellaTrade] 上傳成功，短暫暫停雲端拉取避免舊資料回寫。寫入頁籤：', parsed.data && parsed.data.sheetName);
      },
      onerror(error) {
        markSyncFailure('upload', error);
      }
    });
  }

  function fetchCloudData({ silent = true, force = false } = {}) {
    const now = Date.now();
    if (!force && now < cloudPullPausedUntil) {
      lastCloudPullAt = now;
      return;
    }

    lastCloudPullAt = now;

    request({
      method: 'GET',
      url: `${getApiUrl()}?_=${Date.now()}`, 
      headers: { Accept: 'application/json,text/plain,*/*' },
      onload(response) {
        if (response.status !== 200) {
          if (!silent) console.warn('[StellaTrade] 雲端讀取失敗 HTTP', response.status);
          markSyncFailure('download', `HTTP ${response.status} ${String(response.responseText || '').slice(0, 160)}`);
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
              if (!isAllowedItemForPort(cleanPort, cleanItem)) continue;

              const count = num(info.count ?? info.quantity ?? info.stock ?? info.amount);
              if (count === null) continue;

              const oldInfo = localData[cleanPort][cleanItem] || {};
              const incomingInfo = {
                count,
                max: num(info.max) ?? oldInfo.max ?? null,
                time: info.time || '未知',
                price: info.price || '-',
                restock: info.restockTime || info.nextRestock || info.restock || '-',
                lastRestockAt: info.lastRestockAt || oldInfo.lastRestockAt || '',
                soldOutAt: info.soldOutAt || oldInfo.soldOutAt || '',
                estimatedRestockAt: info.estimatedRestockAt || oldInfo.estimatedRestockAt || '',
                estimateStatus: info.estimateStatus || oldInfo.estimateStatus || 'unknown',
                restockAnchorAt: info.restockAnchorAt || oldInfo.restockAnchorAt || '',
                restockAnchorCount: info.restockAnchorCount || oldInfo.restockAnchorCount || '',
                restockAnchorMax: info.restockAnchorMax || oldInfo.restockAnchorMax || '',
                estimateBasis: info.estimateBasis || oldInfo.estimateBasis || '',
                estimateText: info.estimateText || info.restockEstimateText || info.estimatedRestockText || oldInfo.estimateText || '',
                lastRestockSource: info.lastRestockSource || info.restockSource || oldInfo.lastRestockSource || '',
                observationSource: info.observationSource || info.source || oldInfo.observationSource || '',
                clientObservedAt: info.clientObservedAt || info.syncVersion || '',
                syncVersion: info.syncVersion || info.clientObservedAt || ''
              };

              if (!shouldAcceptIncomingCloud(oldInfo, incomingInfo)) {
                console.log('[StellaTrade] 略過較舊雲端資料：', cleanPort, cleanItem);
                continue;
              }

              const mergedInfo = applyRestockEstimate(oldInfo, incomingInfo, Date.now());

              // 1.6.23 修正：
              // 若雲端試算表已經有「推估補貨時間 / 推估狀態 / 推估依據」，
              // 以前可能會被本機重新推算流程或舊快取蓋掉，導致面板仍顯示「資料不足」。
              // 這裡改成以雲端欄位為準，強制寫回本機資料。
              if (info.estimatedRestockAt) {
                const cloudEstimatedAt = toTimestamp(info.estimatedRestockAt);
                if (cloudEstimatedAt) mergedInfo.estimatedRestockAt = cloudEstimatedAt;
              }
              if (info.estimateStatus) mergedInfo.estimateStatus = String(info.estimateStatus || 'unknown');
              if (info.estimateBasis) mergedInfo.estimateBasis = String(info.estimateBasis || '');
              const cloudEstimateText = String(info.estimateText || info.restockEstimateText || info.estimatedRestockText || '').trim();
              if (cloudEstimateText && cloudEstimateText !== '-' && cloudEstimateText !== '資料不足') {
                mergedInfo.estimateText = cloudEstimateText;
              }
              if (info.soldOutAt) {
                const cloudSoldOutAt = toTimestamp(info.soldOutAt);
                if (cloudSoldOutAt) mergedInfo.soldOutAt = cloudSoldOutAt;
              }
              if (info.lastRestockAt) {
                const cloudLastRestockAt = toTimestamp(info.lastRestockAt);
                if (cloudLastRestockAt) mergedInfo.lastRestockAt = cloudLastRestockAt;
              }
              if (info.lastRestockSource || info.restockSource) {
                mergedInfo.lastRestockSource = String(info.lastRestockSource || info.restockSource || '');
              }
              if (info.observationSource || info.source) {
                mergedInfo.observationSource = String(info.observationSource || info.source || '');
              }
              if (info.restockAnchorAt) {
                const cloudAnchorAt = toTimestamp(info.restockAnchorAt);
                if (cloudAnchorAt) mergedInfo.restockAnchorAt = cloudAnchorAt;
              }
              if (info.restockAnchorCount !== undefined && info.restockAnchorCount !== '') {
                mergedInfo.restockAnchorCount = num(info.restockAnchorCount) ?? mergedInfo.restockAnchorCount;
              }
              if (info.restockAnchorMax !== undefined && info.restockAnchorMax !== '') {
                mergedInfo.restockAnchorMax = num(info.restockAnchorMax) ?? mergedInfo.restockAnchorMax;
              }
              mergedInfo.clientObservedAt = incomingInfo.clientObservedAt || incomingInfo.syncVersion || mergedInfo.clientObservedAt || '';
              mergedInfo.syncVersion = incomingInfo.syncVersion || incomingInfo.clientObservedAt || mergedInfo.syncVersion || '';

              localData[cleanPort][cleanItem] = mergedInfo;
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



  function pingCloud() {
    request({
      method: 'GET',
      url: `${getApiUrl()}?action=ping&_=${Date.now()}`,
      headers: { Accept: 'application/json,text/plain,*/*' },
      onload(response) {
        if (response.status !== 200) {
          markSyncFailure('ping', `HTTP ${response.status} ${String(response.responseText || '').slice(0, 160)}`);
          showSyncToast(t('pingFailTitle'), syncState.lastError || '未知錯誤');
          renderPanel();
          return;
        }
        const parsed = parseCloudJsonResponse(response);
        if (!parsed.ok || !parsed.data || parsed.data.status !== 'success') {
          markSyncFailure('ping', parsed.message || 'ping 回傳不是 success');
          showSyncToast(t('pingFailTitle'), syncState.lastError || '未知錯誤');
          renderPanel();
          return;
        }
        markSyncSuccess();
        showSyncToast(t('pingOkTitle'), t('pingOkMessage', { time: parsed.data.time || '' }));
        renderPanel();
      },
      onerror(error) {
        markSyncFailure('ping', error);
        showSyncToast(t('pingFailTitle'), syncState.lastError || '未知錯誤');
        renderPanel();
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

  function toTimestamp(value) {
    if (value === null || value === undefined || value === '') return null;

    if (typeof value === 'number' && Number.isFinite(value)) {
      return value > 100000000000 ? value : value * 1000;
    }

    const text = String(value).trim();
    if (!text || text === '-' || text === '尚未更新' || text === '未知' || text === '資料不足') return null;

    if (/^\d+$/.test(text)) {
      const n = Number(text);
      return n > 100000000000 ? n : n * 1000;
    }

    // 支援 Google Apps Script 回傳的 yyyy/MM/dd HH:mm。
    let m = text.match(/^(\d{4})\/(\d{1,2})\/(\d{1,2})\s+(\d{1,2}):(\d{2})(?::(\d{2}))?/);
    if (m) {
      const [, y, mo, d, h, mi, s] = m;
      const local = new Date(
        Number(y),
        Number(mo) - 1,
        Number(d),
        Number(h),
        Number(mi),
        Number(s || 0)
      ).getTime();
      return Number.isFinite(local) ? local : null;
    }

    // 支援 yyyy-MM-dd HH:mm。
    m = text.match(/^(\d{4})-(\d{1,2})-(\d{1,2})\s+(\d{1,2}):(\d{2})(?::(\d{2}))?/);
    if (m) {
      const [, y, mo, d, h, mi, s] = m;
      const local = new Date(
        Number(y),
        Number(mo) - 1,
        Number(d),
        Number(h),
        Number(mi),
        Number(s || 0)
      ).getTime();
      return Number.isFinite(local) ? local : null;
    }

    const parsed = Date.parse(text);
    return Number.isFinite(parsed) ? parsed : null;
  }


  function explicitObservationVersionMs(info) {
    if (!info || typeof info !== 'object') return 0;
    return toTimestamp(info.clientObservedAt || info.syncVersion || info.updatedAtMs || info.observedAtMs) || 0;
  }

  function observationTimeMs(info) {
    if (!info || typeof info !== 'object') return 0;
    return toTimestamp(info.time) || 0;
  }

  function shouldAcceptIncomingCloud(localInfo, incomingInfo) {
    const localExplicit = explicitObservationVersionMs(localInfo);
    const incomingExplicit = explicitObservationVersionMs(incomingInfo);

    if (localExplicit && incomingExplicit) return incomingExplicit >= localExplicit;

    const localTime = observationTimeMs(localInfo);
    const incomingTime = observationTimeMs(incomingInfo);

    // 本機已經有新版插件寫入的毫秒版本，但雲端回來的是沒有版本號的舊資料時，
    // 除非雲端觀測時間真的更新，否則不可覆蓋本機。人類同步資料已經夠亂了，別再讓舊資料復辟。
    if (localExplicit && !incomingExplicit) {
      if (!incomingTime) return false;
      if (localTime && incomingTime <= localTime) return false;
      return true;
    }

    if (!localExplicit && incomingExplicit) {
      if (!localTime) return true;
      return incomingExplicit >= localTime;
    }

    if (!localTime) return true;
    if (!incomingTime) return false;
    return incomingTime >= localTime;
  }

  function restockEstimateText(info) {
    const count = Number(info?.count || 0);
    const estimatedAt = toTimestamp(info?.estimatedRestockAt);
    const status = String(info?.estimateStatus || '');
    const basis = String(info?.estimateBasis || '').trim();
    const cloudText = String(info?.estimateText || info?.restockEstimateText || info?.estimatedRestockText || '').trim();

    // 1.6.24 修正：Apps Script 直接回傳預先格式化的 estimateText。
    // 只要這個文字存在，就先使用它，避免 timestamp/status 被本機快取影響。
    if (cloudText && cloudText !== '-' && cloudText !== '資料不足' && cloudText !== '尚未售罄') {
      return cloudText;
    }

    // 1.6.22 修正：
    // 雲端 / Apps Script 有時已經算出 estimatedRestockAt，
    // 但 estimateStatus 可能被舊本機快取蓋成 unknown，導致面板顯示「資料不足」。
    // 只要有有效推估時間，且商品已售罄或有推估依據，就優先顯示雲端推估。
    const shouldShowEstimate =
      !!estimatedAt &&
      (
        status === 'estimated' ||
        status === 'inferred' ||
        count <= 0 ||
        !!basis
      );

    if (shouldShowEstimate) {
      const now = new Date();
      const text = formatClock(new Date(estimatedAt), now);
      const prefix = estimatedAt < Date.now() ? `已過 ${text}` : `約 ${text}`;
      const isInferred = status === 'inferred' || /反推/.test(basis);

      if (isInferred) {
        return basis ? `${prefix}（${basis}）` : `${prefix}（反推）`;
      }

      return basis ? `${prefix}（${basis}）` : `${prefix}（補滿後售罄）`;
    }

    if (count <= 0) {
      return '資料不足';
    }

    return '尚未售罄';
  }

  function normalizeRestockTrackingFields(info) {
    const output = Object.assign({}, info || {});

    output.lastRestockAt = toTimestamp(output.lastRestockAt) || '';
    output.soldOutAt = toTimestamp(output.soldOutAt) || '';
    output.estimatedRestockAt = toTimestamp(output.estimatedRestockAt) || '';
    output.estimateStatus = output.estimateStatus || 'unknown';
    output.restockAnchorAt = toTimestamp(output.restockAnchorAt) || '';
    output.restockAnchorCount = num(output.restockAnchorCount) ?? '';
    output.restockAnchorMax = num(output.restockAnchorMax) ?? '';
    output.estimateBasis = output.estimateBasis || '';
    output.estimateText = output.estimateText || '';
    output.lastRestockSource = output.lastRestockSource || output.restockSource || '';
    output.observationSource = output.observationSource || output.source || '';

    return output;
  }

  function shouldUseAnchorForInference(anchorAt, anchorCount, max, soldOutAt) {
    if (!anchorAt || !anchorCount || !max || !soldOutAt) return false;
    if (anchorAt >= soldOutAt) return false;
    if (anchorCount <= 0 || max <= 0) return false;

    const ratio = anchorCount / max;
    return ratio >= 0.7;
  }

  function inferEstimatedRestockAtFromAnchor(anchorAt, anchorCount, max, soldOutAt) {
    if (!shouldUseAnchorForInference(anchorAt, anchorCount, max, soldOutAt)) return '';

    const observedSellDuration = soldOutAt - anchorAt;
    if (observedSellDuration <= 0) return '';

    const fullSellDuration = observedSellDuration * (max / anchorCount);
    return soldOutAt + Math.round(fullSellDuration / 2);
  }

  function applyRestockEstimate(oldInfo, newInfo, observedAtMs = Date.now()) {
    const oldData = normalizeRestockTrackingFields(oldInfo || {});
    const incoming = normalizeRestockTrackingFields(newInfo || {});
    const output = Object.assign({}, newInfo);

    const count = Number(output.count || 0);
    const max = Number(output.max || oldData.max || incoming.restockAnchorMax || 0);
    const oldCount = oldInfo && oldInfo.count !== undefined ? Number(oldInfo.count) : null;

    let lastRestockAt = incoming.lastRestockAt || oldData.lastRestockAt || '';
    let soldOutAt = incoming.soldOutAt || oldData.soldOutAt || '';
    let estimatedRestockAt = incoming.estimatedRestockAt || oldData.estimatedRestockAt || '';
    let estimateStatus = incoming.estimateStatus || oldData.estimateStatus || 'unknown';

    let restockAnchorAt = incoming.restockAnchorAt || oldData.restockAnchorAt || '';
    let restockAnchorCount = incoming.restockAnchorCount || oldData.restockAnchorCount || '';
    let restockAnchorMax = incoming.restockAnchorMax || oldData.restockAnchorMax || '';
    let estimateBasis = incoming.estimateBasis || oldData.estimateBasis || '';
    let lastRestockSource = incoming.lastRestockSource || oldData.lastRestockSource || '';
    let observationSource = incoming.observationSource || oldData.observationSource || '';
    const skillLockedRestock = oldData.lastRestockSource === 'skill_scan' && incoming.lastRestockSource !== 'skill_scan' && !!oldData.lastRestockAt;

    if (max > 0) {
      const isFull = count >= max;
      const isHighEnoughForInference = count > 0 && count >= Math.ceil(max * 0.7);
      const roseFromZero = oldCount !== null && oldCount <= 0 && count > 0;
      const stockIncreased = oldCount !== null && count > oldCount;

      if (count > 0) {
        if (isFull) {
          // 看到滿貨，這是最可靠的基準；但技能掃描寫入的真實上次補貨時間優先，不被普通觀察覆蓋。
          if (!skillLockedRestock) {
            lastRestockAt = observedAtMs;
            lastRestockSource = incoming.lastRestockSource || 'page_observe';
          }
          restockAnchorAt = observedAtMs;
          restockAnchorCount = max;
          restockAnchorMax = max;
          estimateBasis = skillLockedRestock ? (estimateBasis || '技能掃描補貨時間') : '補滿後售罄';
        } else if (isHighEnoughForInference) {
          // 沒有剛好看到滿貨，但看到 70% 以上庫存，之後售罄時可用這筆反推。
          const shouldReplaceAnchor =
            !restockAnchorAt ||
            !restockAnchorCount ||
            count > Number(restockAnchorCount || 0) ||
            roseFromZero ||
            stockIncreased;

          if (shouldReplaceAnchor) {
            restockAnchorAt = observedAtMs;
            restockAnchorCount = count;
            restockAnchorMax = max;
            estimateBasis = `${count}/${max} 反推`;
          }
        }

        soldOutAt = '';
        estimatedRestockAt = '';

        if (estimateStatus === 'estimated' || estimateStatus === 'inferred' || estimateStatus === 'insufficient' || estimateStatus === 'unknown') {
          estimateStatus = 'selling';
        }
      }

      if (count <= 0) {
        if ((oldCount !== null && oldCount > 0) || !soldOutAt) {
          soldOutAt = observedAtMs;
        }

        if (lastRestockAt && lastRestockAt < soldOutAt) {
          // 有看到滿貨後售罄，可信度最高。
          estimatedRestockAt = soldOutAt + Math.round((soldOutAt - lastRestockAt) / 2);
          estimateStatus = 'estimated';
          estimateBasis = '補滿後售罄';
        } else if (shouldUseAnchorForInference(restockAnchorAt, restockAnchorCount, max, soldOutAt)) {
          // 沒看到滿貨，但有高庫存觀測點，用賣出速度反推完整售罄週期。
          estimatedRestockAt = inferEstimatedRestockAtFromAnchor(restockAnchorAt, restockAnchorCount, max, soldOutAt);
          estimateStatus = estimatedRestockAt ? 'inferred' : 'insufficient';
          estimateBasis = estimatedRestockAt ? `${restockAnchorCount}/${max} 反推` : '';
        } else if (estimatedRestockAt) {
          estimateStatus = estimateStatus === 'inferred' ? 'inferred' : 'estimated';
        } else {
          estimatedRestockAt = '';
          estimateStatus = 'insufficient';
          estimateBasis = '';
        }
      }
    } else {
      if (count <= 0) {
        estimateStatus = estimatedRestockAt ? estimateStatus || 'estimated' : 'insufficient';
        if (!soldOutAt) soldOutAt = observedAtMs;
      } else {
        estimateStatus = 'selling';
        soldOutAt = '';
        estimatedRestockAt = '';
      }
    }

    output.lastRestockAt = lastRestockAt || '';
    output.soldOutAt = soldOutAt || '';
    output.estimatedRestockAt = estimatedRestockAt || '';
    output.estimateStatus = estimateStatus || 'unknown';
    output.restockAnchorAt = restockAnchorAt || '';
    output.restockAnchorCount = restockAnchorCount || '';
    output.restockAnchorMax = restockAnchorMax || '';
    output.estimateBasis = estimateBasis || '';
    output.estimateText = output.estimateText || '';
    output.lastRestockSource = lastRestockSource || '';
    output.observationSource = observationSource || '';

    return output;
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
      const time = syncState.lastSuccessAt ? `　${t('syncLast')} ${timeOnly(syncState.lastSuccessAt)}` : '';
      return `<div class="stella-sync-status stella-sync-ok"><span>${escapeHtml(t('syncOk'))}${escapeHtml(time)}</span></div>`;
    }
    if (syncState.ok === false) {
      const time = syncState.lastFailureAt ? `　${timeOnly(syncState.lastFailureAt)}` : '';
      const prefix = compact ? t('syncFailCompact') : t('syncFail');
      const error = syncState.lastError ? `｜${syncState.lastError}` : '';
      const hint = compact ? '' : t('syncHint');
      return `<div class="stella-sync-status stella-sync-fail"><span>${escapeHtml(prefix)}${escapeHtml(time)}${escapeHtml(error)}${escapeHtml(hint)}</span></div>`;
    }
    return `<div class="stella-sync-status stella-sync-wait"><span>${escapeHtml(t('syncWait'))}</span></div>`;
  }

  function renderChangesTab(changes) {
    if (!changes.length) {
      return `
        <div class="stella-empty-state">
          <div class="stella-empty-icon">✓</div>
          <div class="stella-empty-title">${escapeHtml(t('emptyChangesTitle'))}</div>
          <div class="stella-empty-sub">${escapeHtml(t('emptyChangesSub'))}</div>
        </div>
      `;
    }

    return `
      <div class="stella-panel-toolbar">
        <div class="stella-panel-hint">${escapeHtml(t('changesSinceRead', { n: totalChangeCount(changes) }))}</div>
        <button class="stella-small-btn stella-read-btn" data-stella-action="mark-read">${escapeHtml(t('markRead'))}</button>
      </div>
      <div class="stella-change-list">
        ${changes.map(portChange => `
          <section class="stella-change-card">
            <div class="stella-change-port">${escapeHtml(displayPortName(portChange.port))}</div>
            <div class="stella-change-items">
              ${portChange.items.map(change => renderChangeItem(change)).join('')}
            </div>
          </section>
        `).join('')}
      </div>
    `;
  }

  function renderChangeItem(change) {
    const item = escapeHtml(displayItemName(change.item));

    if (change.type === 'new') {
      const info = change.newInfo;
      return `
        <div class="stella-change-row">
          <span class="stella-change-name">${item}</span>
          <span class="stella-change-pill stella-change-up">${escapeHtml(t('newItem'))}</span>
          <span class="stella-change-stock">${escapeHtml(itemStockText(info))}</span>
          <span class="stella-change-price">${escapeHtml(coinText(info.price || '-'))}</span>
        </div>
      `;
    }

    if (change.type === 'removed') {
      const info = change.oldInfo;
      return `
        <div class="stella-change-row">
          <span class="stella-change-name">${item}</span>
          <span class="stella-change-pill stella-change-muted">${escapeHtml(t('itemRemoved'))}</span>
          <span class="stella-change-stock">${escapeHtml(t('original'))} ${escapeHtml(itemStockText(info))}</span>
          <span class="stella-change-price">${escapeHtml(coinText(info.price || '-'))}</span>
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
        ${restockChanged ? `<span class="stella-change-pill stella-change-restock">${escapeHtml(t('restockChanged'))}</span>` : ''}
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
              <div class="stella-overview-name">${escapeHtml(displayPortName(def.port))}</div>
              <div class="stella-overview-meta">${escapeHtml(t('itemCount', { n: entries.length }))}</div>
              <div class="stella-overview-line">${escapeHtml(t('lastUpdate', { time: latest }))}</div>
              <div class="stella-overview-badges">
                <span class="${lowCount ? 'stella-badge-warn' : 'stella-badge-ok'}">${escapeHtml(t('lowStock', { n: lowCount }))}</span>
                ${changedCount ? `<span class="stella-badge-change">${escapeHtml(t('changeCount', { n: changedCount }))}</span>` : `<span class="stella-badge-muted">${escapeHtml(t('noChange'))}</span>`}
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

      if (sortMode === 'name') return displayItemName(nameA).localeCompare(displayItemName(nameB), currentLang() === 'en' ? 'en' : 'zh-Hant');

      if (sortMode === 'price') {
        const pa = num(infoA.price) ?? Number.MAX_SAFE_INTEGER;
        const pb = num(infoB.price) ?? Number.MAX_SAFE_INTEGER;
        return pa - pb || displayItemName(nameA).localeCompare(displayItemName(nameB), currentLang() === 'en' ? 'en' : 'zh-Hant');
      }

      if (sortMode === 'time') {
        return String(infoB.time || '').localeCompare(String(infoA.time || '')) || displayItemName(nameA).localeCompare(displayItemName(nameB), currentLang() === 'en' ? 'en' : 'zh-Hant');
      }

      const lowA = lowStock(infoA, settings) ? 0 : 1;
      const lowB = lowStock(infoB, settings) ? 0 : 1;
      const maxA = Number(infoA.max || 0);
      const maxB = Number(infoB.max || 0);
      const ratioA = maxA > 0 ? Number(infoA.count || 0) / maxA : Number(infoA.count || 0) / 9999;
      const ratioB = maxB > 0 ? Number(infoB.count || 0) / maxB : Number(infoB.count || 0) / 9999;
      return lowA - lowB || ratioA - ratioB || displayItemName(nameA).localeCompare(displayItemName(nameB), currentLang() === 'en' ? 'en' : 'zh-Hant');
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
              ${escapeHtml(displayPortName(def.port))}
            </button>
          `).join('')}
        </aside>
        <section class="stella-port-detail">
          <div class="stella-port-detail-head">
            <div>
              <div class="stella-port-detail-title">${escapeHtml(displayPortName(selectedPort))}</div>
              <div class="stella-port-detail-sub">${escapeHtml(t('itemCount', { n: sorted.length }))}，${escapeHtml(t('lastUpdate', { time: latestTimeForPort(items) }))}</div>
            </div>
            <label class="stella-sort-label">
              ${escapeHtml(t('sort'))}
              <select data-stella-setting="sortMode" class="stella-select">
                <option value="lowStock" ${state.sortMode === 'lowStock' ? 'selected' : ''}>${escapeHtml(t('sortLowStock'))}</option>
                <option value="time" ${state.sortMode === 'time' ? 'selected' : ''}>${escapeHtml(t('sortTime'))}</option>
                <option value="price" ${state.sortMode === 'price' ? 'selected' : ''}>${escapeHtml(t('sortPrice'))}</option>
                <option value="name" ${state.sortMode === 'name' ? 'selected' : ''}>${escapeHtml(t('sortName'))}</option>
              </select>
            </label>
          </div>
          <div class="stella-goods-table">
            ${sorted.map(([itemName, info]) => renderPortItemRow(itemName, info, changeByItem.get(itemName), settings)).join('') || `<div class="stella-empty-line">${escapeHtml(t('goodsEmpty'))}</div>`}
          </div>
        </section>
      </div>
    `;
  }

  function renderPortItemRow(itemName, info, change, settings) {
    const count = Number(info.count || 0);
    const max = Number(info.max || 0);
    const price = info.price && info.price !== '-' ? coinText(info.price) : '-';
    const low = lowStock(info, settings);
    const changeHtml = change ? renderMiniChange(change) : '<span class="stella-mini-muted">-</span>';
    const restockSourceText = info.lastRestockSource === 'skill_scan' && info.lastRestockAt ? t('restockBasisSkill') : '';

    return `
      <div class="stella-good-row ${low ? 'low' : ''}">
        <div class="stella-good-main">
          <div class="stella-good-name">${escapeHtml(displayItemName(itemName))}</div>
          <div class="stella-good-meta">${escapeHtml(t('update'))}：${escapeHtml(info.time || '尚未更新')}　${escapeHtml(t('restock'))}：${escapeHtml(info.restock || '-')}　${escapeHtml(t('estimatedRestock'))}：${escapeHtml(restockEstimateText(info))}${escapeHtml(restockSourceText)}</div>
        </div>
        <div class="stella-good-stock" style="color:${stockColor(count, max)};">${escapeHtml(itemStockText(info))}</div>
        <div class="stella-good-price">${escapeHtml(price)}</div>
        <div class="stella-good-change">${changeHtml}</div>
      </div>
    `;
  }

  function renderMiniChange(change) {
    if (change.type === 'new') return `<span class="stella-mini-up">${escapeHtml(t('added'))}</span>`;
    if (change.type === 'removed') return `<span class="stella-mini-muted">${escapeHtml(t('disappeared'))}</span>`;
    const delta = Number(change.delta || 0);
    if (delta > 0) return `<span class="stella-mini-up">+${delta}</span>`;
    if (delta < 0) return `<span class="stella-mini-down">${delta}</span>`;
    return `<span class="stella-mini-warn">${escapeHtml(t('changed'))}</span>`;
  }

  function renderSettingsTab() {
    const settings = readSettings();

    return `
      <div class="stella-settings-list">
        <label class="stella-setting-row">
          <div>
            <div class="stella-setting-title">${escapeHtml(t('settingsLanguage'))}</div>
            <div class="stella-setting-sub">${escapeHtml(t('settingsLanguageSub'))}</div>
          </div>
          <select class="stella-select" data-stella-setting="language">
            <option value="auto" ${settings.language === 'auto' ? 'selected' : ''}>${escapeHtml(t('langAuto'))}</option>
            <option value="zh" ${settings.language === 'zh' ? 'selected' : ''}>${escapeHtml(t('langZh'))}</option>
            <option value="en" ${settings.language === 'en' ? 'selected' : ''}>${escapeHtml(t('langEn'))}</option>
          </select>
        </label>

        <label class="stella-setting-row">
          <div>
            <div class="stella-setting-title">${escapeHtml(t('showToast'))}</div>
            <div class="stella-setting-sub">${escapeHtml(t('showToastSub'))}</div>
          </div>
          <input type="checkbox" data-stella-setting="showToast" ${settings.showToast ? 'checked' : ''}>
        </label>

        <label class="stella-setting-row">
          <div>
            <div class="stella-setting-title">${escapeHtml(t('showBadge'))}</div>
            <div class="stella-setting-sub">${escapeHtml(t('showBadgeSub'))}</div>
          </div>
          <input type="checkbox" data-stella-setting="showBadge" ${settings.showBadge ? 'checked' : ''}>
        </label>

        <label class="stella-setting-row">
          <div>
            <div class="stella-setting-title">${escapeHtml(t('showTravel'))}</div>
            <div class="stella-setting-sub">${escapeHtml(t('showTravelSub'))}</div>
          </div>
          <input type="checkbox" data-stella-setting="showTravelEstimate" ${settings.showTravelEstimate ? 'checked' : ''}>
        </label>

        <label class="stella-setting-row">
          <div>
            <div class="stella-setting-title">${escapeHtml(t('defaultPage'))}</div>
            <div class="stella-setting-sub">${escapeHtml(t('defaultPageSub'))}</div>
          </div>
          <select class="stella-select" data-stella-setting="defaultTab">
            <option value="changes" ${settings.defaultTab === 'changes' ? 'selected' : ''}>${escapeHtml(t('tabChanges'))}</option>
            <option value="overview" ${settings.defaultTab === 'overview' ? 'selected' : ''}>${escapeHtml(t('tabOverview'))}</option>
            <option value="ports" ${settings.defaultTab === 'ports' ? 'selected' : ''}>${escapeHtml(t('tabPorts'))}</option>
          </select>
        </label>

        <label class="stella-setting-row">
          <div>
            <div class="stella-setting-title">${escapeHtml(t('lowStockRatio'))}</div>
            <div class="stella-setting-sub">${escapeHtml(t('lowStockRatioSub'))}</div>
          </div>
          <select class="stella-select" data-stella-setting="lowStockRatio">
            <option value="0.10" ${Number(settings.lowStockRatio) === 0.10 ? 'selected' : ''}>10%</option>
            <option value="0.15" ${Number(settings.lowStockRatio) === 0.15 ? 'selected' : ''}>15%</option>
            <option value="0.20" ${Number(settings.lowStockRatio) === 0.20 ? 'selected' : ''}>20%</option>
            <option value="0.25" ${Number(settings.lowStockRatio) === 0.25 ? 'selected' : ''}>25%</option>
          </select>
        </label>

        <div class="stella-setting-row stella-diagnostic-row">
          <div>
            <div class="stella-setting-title">${escapeHtml(t('cloudDiag'))}</div>
            <div class="stella-setting-sub">${escapeHtml(t('url'))}：${escapeHtml(getApiUrl())}</div>
            <div class="stella-setting-sub">${escapeHtml(t('status'))}：${syncState.ok === true ? escapeHtml(t('normal')) : syncState.ok === false ? escapeHtml(t('failed')) : escapeHtml(t('checking'))}</div>
            <div class="stella-setting-sub">${escapeHtml(t('lastSuccess'))}：${syncState.lastSuccessAt ? escapeHtml(new Date(syncState.lastSuccessAt).toLocaleString()) : '-'}</div>
            <div class="stella-setting-sub">${escapeHtml(t('lastFailure'))}：${syncState.lastFailureAt ? escapeHtml(new Date(syncState.lastFailureAt).toLocaleString()) : '-'}</div>
            <div class="stella-setting-sub stella-error-detail">${escapeHtml(t('error'))}：${escapeHtml(syncState.lastError || '-')}</div>
          </div>
        </div>

        <div class="stella-setting-actions">
          <button class="stella-danger-btn" data-stella-action="reset-seen">${escapeHtml(t('resetChanges'))}</button>
          <button class="stella-small-btn" data-stella-action="scan-current">${escapeHtml(t('scanCurrent'))}</button>
          <button class="stella-small-btn" data-stella-action="manual-sync">${escapeHtml(t('syncNow'))}</button>
          <button class="stella-small-btn" data-stella-action="cloud-ping">${escapeHtml(t('pingCloud'))}</button>
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
        <div id="stella-trade-panel" role="dialog" aria-label="${escapeHtml(t('panelTitle'))}">
          <div class="stella-panel-header">
            <div>
              <div class="stella-panel-title">${escapeHtml(t('panelTitle'))}</div>
              <div class="stella-panel-subtitle">${escapeHtml(t('panelSubtitle'))}</div>
            </div>
            <div class="stella-panel-actions">
              <button class="stella-icon-btn" data-stella-action="manual-sync" title="${escapeHtml(t('syncNow'))}">↻</button>
              <button class="stella-icon-btn" data-stella-action="close-panel" title="${escapeHtml(t('close'))}">×</button>
            </div>
          </div>

          <div class="stella-panel-status-row">
            ${renderSyncStatus()}
            <div class="stella-change-summary ${changeCount ? 'has-change' : ''}">
              ${escapeHtml(changeCount ? t('hasChanges', { n: changeCount }) : t('noNewChanges'))}
            </div>
          </div>

          <nav class="stella-tabs">
            ${renderTabButton('changes', t('tabChanges'), selectedTab, changeCount)}
            ${renderTabButton('overview', t('tabOverview'), selectedTab)}
            ${renderTabButton('ports', t('tabPorts'), selectedTab)}
            ${renderTabButton('settings', t('tabSettings'), selectedTab)}
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
        ${escapeHtml(label)}${count ? `<span>${count}</span>` : ''}
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
        return /出營|分莊|統計|我的隊伍|交戰|首頁|出海|市場|交易|Discord|Home|Market|Trade|Warehouse|Adventure|Profile|Stats|Crew|Battle/.test(x.text);
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

    const bar = isMobileViewport() ? null : findNativeButtonBar();
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
    btn.innerHTML = `<span>${escapeHtml(t('launcher'))}</span>${failBadge}${badge}`;
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
    if (tomorrow(date, now)) return `${t('tomorrow')} ${hh}:${mm}`;
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
        <div class="stella-travel-title">${escapeHtml(t('travelTitle'))}</div>
        <div class="stella-travel-grid">
          <div><span class="stella-travel-label">${escapeHtml(t('travelDuration'))}</span><strong>${escapeHtml(schedule.durationRaw)}</strong></div>
          <div><span class="stella-travel-label">${escapeHtml(t('travelArrive'))}</span><strong>${escapeHtml(schedule.arriveAtText)}</strong></div>
          <div><span class="stella-travel-label">${escapeHtml(t('travelReturn'))}</span><strong>${escapeHtml(schedule.returnAtText)}</strong></div>
        </div>
      </div>
    `;
  }

  function renderDetailGoods(portName, schedule) {
    const settings = readSettings();
    const data = ensureData();
    const entries = Object.entries(data[portName] || {}).filter(([name]) => !isInvalidItemName(name) && isAllowedItemForPort(portName, name));
    const travelHtml = settings.showTravelEstimate ? renderTravel(schedule) : '';

    return `
      <div class="stella-detail-goods stella-detail-compact">
        ${travelHtml}
        ${renderSyncStatus(true)}
        <div class="stella-detail-goods-head"><span>${escapeHtml(t('goodsInfo'))}</span><span>${escapeHtml(t('itemsShort', { n: entries.length }))}</span></div>
        <div class="stella-detail-goods-grid">
          ${entries.map(([itemName, info]) => {
            const count = Number(info.count || 0);
            const max = Number(info.max || 0);
            const price = info.price && info.price !== '-' ? coinText(info.price) : '-';
            return `
              <div class="stella-detail-good">
                <div class="stella-detail-good-top">
                  <span class="stella-detail-name">${escapeHtml(displayItemName(itemName))}</span>
                  <span class="stella-detail-stock" style="color:${stockColor(count, max)};">${escapeHtml(itemStockText(info))}</span>
                  <span class="stella-detail-price">${escapeHtml(price)}</span>
                </div>
                <div class="stella-detail-meta">${escapeHtml(t('update'))}：${escapeHtml(info.time || '尚未更新')}　${escapeHtml(t('restock'))}：${escapeHtml(info.restock || '-')}　${escapeHtml(t('estimate'))}：${escapeHtml(restockEstimateText(info))}</div>
              </div>
            `;
          }).join('') || `<div class="stella-detail-empty">${escapeHtml(t('noSyncData'))}</div>`}
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
    return text === '出發' || text === '出发' || /^(Depart|Set Sail|Sail|Go)$/i.test(text) || text.includes('出發') || text.includes('出发') || /Depart|Set Sail/i.test(text);
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

      if (text.includes('首頁') || text.includes('倉庫') || text.includes('市場') || text.includes('Discord') || text.includes('職業') || text.includes('排行') || text.includes('Home') || text.includes('Warehouse') || text.includes('Market') || text.includes('Profession') || text.includes('Ranking')) continue;

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
      showSyncToast(t('resetToastTitle'), t('resetToastMessage'));
      return;
    }

    if (action === 'scan-current') {
      const scanned = scrapeCurrentVisibleData({ upload: true, silent: false });
      if (!scanned) showSyncToast(t('noScanTitle'), t('noScanMessage'));
      return;
    }

    if (action === 'manual-sync') {
      const uploaded = scrapeCurrentVisibleData({ upload: true, silent: true });
      if (!uploaded) fetchCloudData({ silent: false, force: true });
      return;
    }

    if (action === 'cloud-ping') {
      pingCloud();
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
    return text.includes('返航') || text.includes('返回') || text.includes('離港') || text.includes('离港') || text.includes('出發') || text.includes('出发') || /Return|Back|Leave|Depart|Set Sail/i.test(text);
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

  function autoPublishCurrentVisibleData() {
    lastAutoPublishAt = Date.now();

    const ok = scrapeCurrentVisibleData({
      upload: true,
      silent: true
    });

    if (ok) {
      console.log('[StellaTrade] 每 5 分鐘自動掃描並公布目前港口商品資料');
    }
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
        font-size: 11px !important;
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
        font-size: 11px !important;
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
        font-size: 11px !important;
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
        font-size: 11px !important;
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
        font-size: 11px !important;
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
        font-size: 11px !important;
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
        font-size: 11px !important;
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

      .stella-error-detail {
        word-break: break-all;
        white-space: pre-wrap;
      }

      .stella-setting-sub {
        color: #b7c1d8 !important;
        font-size: 11px !important;
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
        font-size: 11px !important;
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
        font-size: 11px !important;
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
        font-size: 11px !important;
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

        .stella-panel-body {
          padding-top: 24px !important;
        }

        .stella-tabs {
          padding-bottom: 10px !important;
          overflow-x: auto !important;
          overflow-y: visible !important;
          align-items: flex-end !important;
        }

        .stella-tabs::-webkit-scrollbar,
        .stella-port-nav::-webkit-scrollbar {
          display: none !important;
        }

        .stella-port-layout {
          grid-template-columns: 1fr !important;
          gap: 16px !important;
        }

        .stella-port-nav {
          display: flex !important;
          gap: 10px !important;
          overflow-x: auto !important;
          overflow-y: visible !important;
          padding: 14px 0 12px !important;
          margin-top: 2px !important;
          min-height: 68px !important;
          align-items: center !important;
          scrollbar-width: none !important;
        }

        .stella-port-nav-btn {
          flex: 0 0 auto !important;
          width: auto !important;
          min-height: 48px !important;
          padding: 10px 20px !important;
          line-height: 1.15 !important;
          white-space: nowrap !important;
        }

        .stella-port-detail-head {
          display: grid !important;
        }

        .stella-good-row {
          grid-template-columns: 1fr !important;
          gap: 5px !important;
        }

        /* 1.6.49 手機設定頁修正：避免右側選單/按鈕把整個面板撐寬，害人左右滑動。 */
        #stella-trade-panel,
        .stella-panel-body,
        .stella-settings-list,
        .stella-setting-row {
          max-width: 100% !important;
          box-sizing: border-box !important;
        }

        .stella-panel-body {
          overflow-x: hidden !important;
          -webkit-overflow-scrolling: touch !important;
        }

        .stella-setting-row {
          display: grid !important;
          grid-template-columns: minmax(0, 1fr) !important;
          align-items: stretch !important;
          gap: 9px !important;
        }

        .stella-setting-row > div,
        .stella-setting-title,
        .stella-setting-sub,
        .stella-error-detail {
          min-width: 0 !important;
          max-width: 100% !important;
          overflow-wrap: anywhere !important;
          word-break: break-word !important;
        }

        .stella-setting-row .stella-select,
        .stella-setting-row .stella-small-btn,
        .stella-setting-row .stella-danger-btn {
          width: 100% !important;
          min-width: 0 !important;
          max-width: 100% !important;
          justify-self: stretch !important;
        }

        .stella-setting-row input[type="checkbox"] {
          justify-self: end !important;
          width: 22px !important;
          height: 22px !important;
        }

        .stella-setting-actions {
          width: 100% !important;
          display: grid !important;
          grid-template-columns: 1fr !important;
        }

        #stella-trade-launcher-fallback {
          position: fixed !important;
          top: auto !important;
          left: 16px !important;
          right: auto !important;
          bottom: calc(env(safe-area-inset-bottom, 0px) + 2px) !important;
          width: 58px !important;
          height: 58px !important;
          min-width: 58px !important;
          min-height: 58px !important;
          padding: 0 !important;
          border-radius: 999px !important;
          z-index: 2147483000 !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          box-shadow:
            0 10px 26px rgba(0, 0, 0, 0.36),
            inset 0 1px 0 rgba(255,255,255,0.22) !important;
          touch-action: manipulation !important;
        }

        #stella-trade-launcher-fallback > span {
          display: none !important;
        }

        #stella-trade-launcher-fallback::before {
          content: "商" !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          width: 100% !important;
          height: 100% !important;
          font-size: 21px !important;
          font-weight: 950 !important;
          line-height: 1 !important;
          color: #ffffff !important;
          text-shadow: 0 2px 8px rgba(0,0,0,0.35) !important;
        }

        #stella-trade-launcher-fallback .stella-launcher-badge {
          position: absolute !important;
          top: -6px !important;
          right: -6px !important;
          min-width: 20px !important;
          height: 20px !important;
          padding: 0 6px !important;
          font-size: 11px !important;
          border: 2px solid rgba(30, 38, 70, 0.96) !important;
          box-sizing: border-box !important;
        }

        #stella-trade-launcher-fallback .stella-launcher-alert {
          position: absolute !important;
          top: -6px !important;
          left: -6px !important;
          min-width: 20px !important;
          height: 20px !important;
          padding: 0 6px !important;
          font-size: 11px !important;
          border: 2px solid rgba(30, 38, 70, 0.96) !important;
          box-sizing: border-box !important;
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
      scrapeCurrentVisibleData({ upload: false, silent: true });
      fetchCloudData({ silent: true });
      scheduleInject();
      scheduleLauncherUpdate();
    }, 1000);

    setInterval(() => {
      ensureLauncherButton();
      if (Date.now() - lastCloudPullAt >= CLOUD_PULL_INTERVAL) fetchCloudData({ silent: true });
    }, CLOUD_PULL_INTERVAL);

    lastAutoPublishAt = Date.now();
    autoPublishTimer = setInterval(() => {
      autoPublishCurrentVisibleData();
    }, AUTO_PUBLISH_INTERVAL);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => start());
    start();
  } else {
    start();
  }
})();
