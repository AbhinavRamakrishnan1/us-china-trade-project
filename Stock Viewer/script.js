const stocks = [
  { ticker: "AAPL", name: "Apple", price: 212.42, change: 1.24 },
  { ticker: "MSFT", name: "Microsoft", price: 428.17, change: 0.88 },
  { ticker: "NVDA", name: "NVIDIA", price: 903.56, change: 2.31 },
  { ticker: "TSLA", name: "Tesla", price: 171.48, change: -1.72 }
];

const watchlist = document.getElementById("watchlist");
const topTicker = document.getElementById("topTicker");
const topPrice = document.getElementById("topPrice");
const topChange = document.getElementById("topChange");
const marketMood = document.getElementById("marketMood");
const marketDate = document.getElementById("marketDate");

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(value);
}

function renderWatchlist() {
  watchlist.innerHTML = "";

  stocks.forEach((stock) => {
    const row = document.createElement("article");
    const directionClass = stock.change >= 0 ? "positive" : "negative";
    const signedChange = `${stock.change >= 0 ? "+" : ""}${stock.change.toFixed(2)}%`;

    row.className = "watch-item";
    row.innerHTML = `
      <div>
        <strong>${stock.ticker}</strong>
        <p class="muted">${stock.name}</p>
      </div>
      <strong>${formatCurrency(stock.price)}</strong>
      <strong class="${directionClass}">${signedChange}</strong>
    `;

    watchlist.appendChild(row);
  });
}

function renderHighlight() {
  const leader = [...stocks].sort((a, b) => b.change - a.change)[0];

  topTicker.textContent = leader.ticker;
  topPrice.textContent = formatCurrency(leader.price);
  topChange.textContent = `${leader.change >= 0 ? "+" : ""}${leader.change.toFixed(2)}%`;
  topChange.className = leader.change >= 0 ? "positive" : "negative";
  marketMood.textContent = leader.change >= 0 ? "Bullish" : "Cautious";
}

function renderDate() {
  marketDate.textContent = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric"
  });
}

renderWatchlist();
renderHighlight();
renderDate();
