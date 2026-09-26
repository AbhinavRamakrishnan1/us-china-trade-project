const CONFIG = {
  apiKey: "28DEVC85V2N6KAN2",
  quoteUrl: "https://www.alphavantage.co/query?function=GLOBAL_QUOTE",
  overviewUrl: "https://www.alphavantage.co/query?function=OVERVIEW",
  chartUrl: "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&interval=60min&outputsize=compact",
  favoritesKey: "marketlens-favorites",
  recentKey: "marketlens-recent-searches",
  marketTickers: ["AAPL", "MSFT", "TSLA", "NVDA", "SPY"],
  maxRecent: 6,
  maxFavorites: 10
};

const dom = {
  searchForm: document.getElementById("searchForm"),
  tickerInput: document.getElementById("tickerInput"),
  searchButton: document.getElementById("searchButton"),
  stockSummary: document.getElementById("stockSummary"),
  chartCard: document.getElementById("chartCard"),
  sparklinePath: document.getElementById("sparklinePath"),
  sparklineArea: document.getElementById("sparklineArea"),
  chartLabel: document.getElementById("chartLabel"),
  trendBadge: document.getElementById("trendBadge"),
  marketOverview: document.getElementById("marketOverview"),
  refreshMarketButton: document.getElementById("refreshMarketButton"),
  watchlistContainer: document.getElementById("watchlistContainer"),
  recentSearchesContainer: document.getElementById("recentSearchesContainer"),
  saveFavoriteButton: document.getElementById("saveFavoriteButton"),
  clearRecentButton: document.getElementById("clearRecentButton"),
  feedbackBanner: document.getElementById("feedbackBanner"),
  apiModeLabel: document.getElementById("apiModeLabel")
};

const state = {
  currentStock: null,
  favorites: loadStorage(CONFIG.favoritesKey, []),
  recentSearches: loadStorage(CONFIG.recentKey, []),
  marketData: [],
  usingMockData: !hasApiKey()
};

const MOCK_STOCKS = {
  AAPL: { companyName: "Apple Inc.", price: 212.42, change: 3.16, percentChange: 1.51, previousClose: 209.26, open: 210.14, high: 213.9, low: 208.75, updatedAt: "Mock feed", chartPoints: [205, 206, 208, 207, 210, 212, 211, 212.42] },
  MSFT: { companyName: "Microsoft Corporation", price: 428.17, change: 2.84, percentChange: 0.67, previousClose: 425.33, open: 426.02, high: 429.44, low: 423.88, updatedAt: "Mock feed", chartPoints: [419, 421, 424, 423, 425, 427, 426, 428.17] },
  TSLA: { companyName: "Tesla, Inc.", price: 171.48, change: -2.98, percentChange: -1.71, previousClose: 174.46, open: 173.81, high: 175.24, low: 170.4, updatedAt: "Mock feed", chartPoints: [178, 176, 175, 174, 173, 172, 171.7, 171.48] },
  NVDA: { companyName: "NVIDIA Corporation", price: 903.56, change: 21.74, percentChange: 2.47, previousClose: 881.82, open: 887.14, high: 907.4, low: 884.55, updatedAt: "Mock feed", chartPoints: [860, 868, 872, 881, 889, 896, 900, 903.56] },
  SPY: { companyName: "SPDR S&P 500 ETF Trust", price: 521.4, change: 2.06, percentChange: 0.4, previousClose: 519.34, open: 519.88, high: 522.02, low: 518.55, updatedAt: "Mock feed", chartPoints: [513, 514.5, 516.2, 517.3, 518.8, 520.4, 521, 521.4] }
};

function hasApiKey() {
  return Boolean(CONFIG.apiKey && !CONFIG.apiKey.includes("PASTE_YOUR"));
}

function loadStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    return fallback;
  }
}

function saveStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: value >= 1000 ? 0 : 2
  }).format(value);
}

function formatSignedNumber(value) {
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(2)}`;
}

function formatSignedPercent(value) {
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(2)}%`;
}

function formatTimestamp(value) {
  if (!value) {
    return "Unavailable";
  }

  if (value === "Mock feed") {
    return value;
  }

  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return value;
  }

  return parsed.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  });
}

function sanitizeTicker(input) {
  return input.trim().toUpperCase().replace(/[^A-Z.]/g, "");
}

function getDirectionClass(change) {
  if (change > 0) {
    return "up";
  }

  if (change < 0) {
    return "down";
  }

  return "flat";
}

function showFeedback(message, tone = "neutral") {
  dom.feedbackBanner.textContent = message;
  dom.feedbackBanner.className = "feedback-banner";
  if (tone !== "neutral") {
    dom.feedbackBanner.classList.add(tone);
  }
}

function setApiModeLabel() {
  dom.apiModeLabel.textContent = state.usingMockData
    ? "Demo-ready fallback mode enabled"
    : "Live Alpha Vantage mode active";
}

function updateTrendBadge(change) {
  const direction = getDirectionClass(change);
  dom.trendBadge.className = `trend-badge ${direction === "flat" ? "neutral" : direction}`;
  dom.trendBadge.textContent = direction === "up" ? "UP" : direction === "down" ? "DOWN" : "FLAT";
}

function renderSummarySkeleton() {
  dom.stockSummary.className = "stock-summary";
  dom.stockSummary.innerHTML = '<div class="summary-skeleton skeleton"></div>';
}

function renderChartSkeleton() {
  dom.chartCard.className = "chart-card";
  dom.chartCard.innerHTML = '<div class="chart-skeleton skeleton"></div>';
}

function restoreChartFrame() {
  dom.chartCard.className = "chart-card";
  dom.chartCard.innerHTML = `
    <svg id="sparkline" viewBox="0 0 600 220" preserveAspectRatio="none" aria-label="Stock price trend chart" role="img">
      <defs>
        <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="rgba(93, 152, 255, 0.42)"></stop>
          <stop offset="100%" stop-color="rgba(93, 152, 255, 0)"></stop>
        </linearGradient>
      </defs>
      <path id="sparklineArea" d=""></path>
      <path id="sparklinePath" d=""></path>
    </svg>
  `;
  dom.sparklinePath = document.getElementById("sparklinePath");
  dom.sparklineArea = document.getElementById("sparklineArea");
}

function renderSummary(stock) {
  const direction = getDirectionClass(stock.change);
  const directionClass = direction === "flat" ? "" : direction;

  dom.stockSummary.className = "stock-summary";
  dom.stockSummary.innerHTML = `
    <div class="summary-grid">
      <div class="summary-top">
        <div class="symbol-wrap">
          <div class="chip">${stock.symbol}</div>
          <h3>${stock.symbol}</h3>
          <p>${stock.companyName || "Company name unavailable"}</p>
        </div>

        <div class="price-wrap">
          <div class="price">${formatCurrency(stock.price)}</div>
          <div class="delta-row">
            <span class="delta ${directionClass}">${formatSignedNumber(stock.change)}</span>
            <span class="delta ${directionClass}">${formatSignedPercent(stock.percentChange)}</span>
          </div>
        </div>
      </div>

      <div class="summary-details">
        <article class="detail-card">
          <span class="detail-label">Last Updated</span>
          <span class="detail-value">${formatTimestamp(stock.updatedAt)}</span>
        </article>
        <article class="detail-card">
          <span class="detail-label">Previous Close</span>
          <span class="detail-value">${formatCurrency(stock.previousClose)}</span>
        </article>
        <article class="detail-card">
          <span class="detail-label">Open</span>
          <span class="detail-value">${formatCurrency(stock.open)}</span>
        </article>
        <article class="detail-card">
          <span class="detail-label">Day High</span>
          <span class="detail-value up">${formatCurrency(stock.high)}</span>
        </article>
        <article class="detail-card">
          <span class="detail-label">Day Low</span>
          <span class="detail-value down">${formatCurrency(stock.low)}</span>
        </article>
        <article class="detail-card">
          <span class="detail-label">Data Source</span>
          <span class="detail-value">${stock.sourceLabel}</span>
        </article>
      </div>
    </div>
  `;

  updateTrendBadge(stock.change);
  dom.saveFavoriteButton.disabled = false;
}

function renderEmptySummary() {
  dom.stockSummary.className = "stock-summary empty";
  dom.stockSummary.innerHTML = `
    <div class="empty-state">
      <span class="empty-icon">+</span>
      <h3>No ticker loaded yet</h3>
      <p>Search for a stock to see live data or mock demo values, price movement, and a mini trend chart.</p>
    </div>
  `;
  dom.saveFavoriteButton.disabled = true;
  dom.trendBadge.className = "trend-badge neutral";
  dom.trendBadge.textContent = "Waiting";
}

function renderEmptyChart() {
  dom.chartCard.className = "chart-card empty";
  dom.chartCard.innerHTML = `
    <div class="chart-placeholder">
      <p>Search a ticker to generate a mini price trend using API time-series data or demo fallback points.</p>
    </div>
    <svg id="sparkline" viewBox="0 0 600 220" preserveAspectRatio="none" aria-label="Stock price trend chart" role="img">
      <defs>
        <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="rgba(93, 152, 255, 0.42)"></stop>
          <stop offset="100%" stop-color="rgba(93, 152, 255, 0)"></stop>
        </linearGradient>
      </defs>
      <path id="sparklineArea" d=""></path>
      <path id="sparklinePath" d=""></path>
    </svg>
  `;
  dom.sparklinePath = document.getElementById("sparklinePath");
  dom.sparklineArea = document.getElementById("sparklineArea");
  dom.chartLabel.textContent = "Sparkline unavailable";
}

function createPath(points, width, height) {
  if (!points.length) {
    return "";
  }

  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min || 1;

  return points
    .map((point, index) => {
      const x = (index / Math.max(points.length - 1, 1)) * width;
      const y = height - ((point - min) / range) * (height - 28) - 14;
      return `${index === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(" ");
}

function createAreaPath(points, width, height) {
  if (!points.length) {
    return "";
  }

  const linePath = createPath(points, width, height);
  const endX = width;
  return `${linePath} L ${endX} ${height} L 0 ${height} Z`;
}

function renderChart(points, symbol) {
  restoreChartFrame();

  if (!points || points.length < 2) {
    renderEmptyChart();
    return;
  }

  const width = 600;
  const height = 220;
  dom.sparklinePath.setAttribute("d", createPath(points, width, height));
  dom.sparklineArea.setAttribute("d", createAreaPath(points, width, height));
  dom.chartLabel.textContent = `${symbol} intraday trend`;
}

function renderList(container, items, emptyMessage, type) {
  if (!items.length) {
    container.className = "list-block empty";
    container.innerHTML = `
      <div class="empty-list">
        <span class="empty-icon">${type === "watchlist" ? "*" : "#"}</span>
        <h3>${type === "watchlist" ? "Watchlist is empty" : "No recent searches"}</h3>
        <p>${emptyMessage}</p>
      </div>
    `;
    return;
  }

  container.className = "list-block";
  container.innerHTML = items.map((item) => {
    const symbol = typeof item === "string" ? item : item.symbol;
    const companyName = typeof item === "string" ? "" : item.companyName || "";

    return `
      <article class="list-item">
        <div class="list-item-top">
          <div>
            <div class="list-symbol">${symbol}</div>
            <p class="list-meta">${companyName || (type === "watchlist" ? "Saved ticker" : "Recent lookup")}</p>
          </div>
          <div class="chip">${type === "watchlist" ? "Saved" : "Recent"}</div>
        </div>
        <div class="list-actions">
          <button class="chip" type="button" data-action="load-${type}" data-symbol="${symbol}">Load</button>
          ${type === "watchlist"
            ? `<button class="icon-btn" type="button" aria-label="Remove ${symbol} from watchlist" data-action="remove-favorite" data-symbol="${symbol}">x</button>`
            : ""}
        </div>
      </article>
    `;
  }).join("");
}

function renderWatchlist() {
  renderList(
    dom.watchlistContainer,
    state.favorites,
    "Save the currently loaded stock to keep a reusable set of tickers here.",
    "watchlist"
  );
}

function renderRecentSearches() {
  renderList(
    dom.recentSearchesContainer,
    state.recentSearches,
    "Your recent ticker lookups will appear here and can be reopened in one click.",
    "recent"
  );
}

function renderMarketSkeleton() {
  dom.marketOverview.innerHTML = Array.from({ length: CONFIG.marketTickers.length }, () => '<div class="market-skeleton skeleton"></div>').join("");
}

function renderMarketOverview() {
  dom.marketOverview.innerHTML = state.marketData.map((stock) => {
    const direction = getDirectionClass(stock.change);
    const chipClass = direction === "flat" ? "flat" : direction;
    return `
      <button class="market-card" type="button" data-market-symbol="${stock.symbol}" aria-label="Load ${stock.symbol}">
        <div class="market-card-header">
          <span class="market-symbol">${stock.symbol}</span>
          <span class="status-chip ${chipClass}">${direction === "up" ? "UP" : direction === "down" ? "DOWN" : "FLAT"}</span>
        </div>
        <p class="market-company">${stock.companyName}</p>
        <div class="market-price">${formatCurrency(stock.price)}</div>
        <div class="market-change ${chipClass === "flat" ? "" : chipClass}">
          ${formatSignedNumber(stock.change)} • ${formatSignedPercent(stock.percentChange)}
        </div>
      </button>
    `;
  }).join("");
}

function addRecentSearch(stock) {
  state.recentSearches = [
    { symbol: stock.symbol, companyName: stock.companyName },
    ...state.recentSearches.filter((entry) => entry.symbol !== stock.symbol)
  ].slice(0, CONFIG.maxRecent);

  saveStorage(CONFIG.recentKey, state.recentSearches);
  renderRecentSearches();
}

function addFavorite() {
  if (!state.currentStock) {
    return;
  }

  const exists = state.favorites.some((item) => item.symbol === state.currentStock.symbol);
  if (exists) {
    showFeedback(`${state.currentStock.symbol} is already in your watchlist.`, "success");
    return;
  }

  state.favorites = [
    { symbol: state.currentStock.symbol, companyName: state.currentStock.companyName },
    ...state.favorites
  ].slice(0, CONFIG.maxFavorites);

  saveStorage(CONFIG.favoritesKey, state.favorites);
  renderWatchlist();
  showFeedback(`${state.currentStock.symbol} saved to watchlist.`, "success");
}

function removeFavorite(symbol) {
  state.favorites = state.favorites.filter((item) => item.symbol !== symbol);
  saveStorage(CONFIG.favoritesKey, state.favorites);
  renderWatchlist();
  showFeedback(`${symbol} removed from watchlist.`, "neutral");
}

function clearRecentSearches() {
  state.recentSearches = [];
  saveStorage(CONFIG.recentKey, state.recentSearches);
  renderRecentSearches();
  showFeedback("Recent searches cleared.", "neutral");
}

function parseAlphaVantageQuote(symbol, quoteData, overviewData, chartPoints) {
  const quote = quoteData["Global Quote"];
  if (!quote || !quote["05. price"]) {
    throw new Error("Ticker data not available.");
  }

  const price = Number(quote["05. price"]);
  const change = Number(quote["09. change"]);
  const percentChange = Number(String(quote["10. change percent"]).replace("%", ""));

  return {
    symbol,
    companyName: overviewData?.Name || `${symbol} Corporation`,
    price,
    change,
    percentChange,
    previousClose: Number(quote["08. previous close"]) || price - change,
    open: Number(quote["02. open"]) || price,
    high: Number(quote["03. high"]) || price,
    low: Number(quote["04. low"]) || price,
    updatedAt: quote["07. latest trading day"],
    chartPoints,
    sourceLabel: "Alpha Vantage"
  };
}

function buildMockStock(symbol) {
  const upperSymbol = symbol.toUpperCase();
  const preset = MOCK_STOCKS[upperSymbol];

  if (preset) {
    return {
      symbol: upperSymbol,
      ...preset,
      sourceLabel: "Mock fallback"
    };
  }

  const base = 90 + upperSymbol.length * 17;
  const volatility = upperSymbol.charCodeAt(0) % 9;
  const change = Number(((volatility - 4) * 0.83).toFixed(2));
  const price = Number((base + volatility * 6.3).toFixed(2));
  const percentChange = Number(((change / (price - change)) * 100).toFixed(2));
  const previousClose = Number((price - change).toFixed(2));
  const open = Number((previousClose + change * 0.3).toFixed(2));
  const high = Number((Math.max(price, open) + 2.6).toFixed(2));
  const low = Number((Math.min(price, open) - 2.1).toFixed(2));
  const chartPoints = Array.from({ length: 8 }, (_, index) =>
    Number((previousClose + index * (change / 5 || 0.8) + Math.sin(index) * 1.6).toFixed(2))
  );

  return {
    symbol: upperSymbol,
    companyName: `${upperSymbol} Holdings`,
    price,
    change,
    percentChange,
    previousClose,
    open,
    high,
    low,
    updatedAt: "Mock feed",
    chartPoints,
    sourceLabel: "Mock fallback"
  };
}

async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network request failed.");
  }

  return response.json();
}

async function fetchChartPoints(symbol) {
  if (!hasApiKey()) {
    return buildMockStock(symbol).chartPoints;
  }

  const url = `${CONFIG.chartUrl}&symbol=${encodeURIComponent(symbol)}&apikey=${CONFIG.apiKey}`;
  const data = await fetchJson(url);

  if (data.Note || data.Information) {
    throw new Error("API rate limit reached.");
  }

  const timeSeries = data["Time Series (60min)"];
  if (!timeSeries) {
    throw new Error("Chart points unavailable.");
  }

  return Object.entries(timeSeries)
    .slice(0, 8)
    .reverse()
    .map(([, point]) => Number(point["4. close"]))
    .filter((value) => Number.isFinite(value));
}

async function fetchStockData(symbol) {
  if (!hasApiKey()) {
    state.usingMockData = true;
    setApiModeLabel();
    return buildMockStock(symbol);
  }

  const quoteEndpoint = `${CONFIG.quoteUrl}&symbol=${encodeURIComponent(symbol)}&apikey=${CONFIG.apiKey}`;
  const overviewEndpoint = `${CONFIG.overviewUrl}&symbol=${encodeURIComponent(symbol)}&apikey=${CONFIG.apiKey}`;

  try {
    const [quoteData, overviewData, chartPoints] = await Promise.all([
      fetchJson(quoteEndpoint),
      fetchJson(overviewEndpoint),
      fetchChartPoints(symbol)
    ]);

    if (quoteData.Note || quoteData.Information || quoteData["Error Message"]) {
      throw new Error("Quote lookup failed.");
    }

    state.usingMockData = false;
    setApiModeLabel();
    return parseAlphaVantageQuote(symbol, quoteData, overviewData, chartPoints);
  } catch (error) {
    state.usingMockData = true;
    setApiModeLabel();
    return buildMockStock(symbol);
  }
}

async function loadStock(symbol, options = {}) {
  const cleanSymbol = sanitizeTicker(symbol);
  if (!cleanSymbol) {
    showFeedback("Enter a valid stock ticker using letters only.", "error");
    return;
  }

  renderSummarySkeleton();
  renderChartSkeleton();
  dom.searchButton.disabled = true;
  showFeedback(`Loading ${cleanSymbol}...`, "neutral");

  try {
    const stock = await fetchStockData(cleanSymbol);
    state.currentStock = stock;
    renderSummary(stock);
    renderChart(stock.chartPoints, stock.symbol);
    addRecentSearch(stock);
    dom.tickerInput.value = stock.symbol;
    showFeedback(
      stock.sourceLabel === "Mock fallback"
        ? `${stock.symbol} loaded with fallback demo data. Add your Alpha Vantage key for live quotes.`
        : `${stock.symbol} loaded successfully.`,
      stock.sourceLabel === "Mock fallback" ? "neutral" : "success"
    );
  } catch (error) {
    renderEmptySummary();
    renderEmptyChart();
    showFeedback(`Could not load ${cleanSymbol}. Try another ticker.`, "error");
  } finally {
    dom.searchButton.disabled = false;
  }

  if (!options.silentScroll) {
    dom.stockSummary.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

async function loadMarketOverview() {
  renderMarketSkeleton();
  dom.refreshMarketButton.disabled = true;

  const cards = await Promise.all(
    CONFIG.marketTickers.map((symbol) => fetchStockData(symbol))
  );

  state.marketData = cards;
  renderMarketOverview();
  dom.refreshMarketButton.disabled = false;
}

function handleSearchSubmit(event) {
  event.preventDefault();
  loadStock(dom.tickerInput.value);
}

function handleListAction(event) {
  const button = event.target.closest("button");
  if (!button) {
    return;
  }

  const { action, symbol, marketSymbol } = button.dataset;

  if (marketSymbol) {
    loadStock(marketSymbol, { silentScroll: true });
    return;
  }

  if (action === "load-watchlist" || action === "load-recent") {
    loadStock(symbol, { silentScroll: true });
  }

  if (action === "remove-favorite") {
    removeFavorite(symbol);
  }
}

function attachEventListeners() {
  dom.searchForm.addEventListener("submit", handleSearchSubmit);
  dom.saveFavoriteButton.addEventListener("click", addFavorite);
  dom.clearRecentButton.addEventListener("click", clearRecentSearches);
  dom.refreshMarketButton.addEventListener("click", loadMarketOverview);
  dom.marketOverview.addEventListener("click", handleListAction);
  dom.watchlistContainer.addEventListener("click", handleListAction);
  dom.recentSearchesContainer.addEventListener("click", handleListAction);
}

function initialize() {
  setApiModeLabel();
  renderEmptySummary();
  renderEmptyChart();
  renderWatchlist();
  renderRecentSearches();
  attachEventListeners();
  loadMarketOverview();
  loadStock("AAPL", { silentScroll: true });
}

initialize();
