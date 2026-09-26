import pandas as pd
import matplotlib.pyplot as plt

# -----------------------------
# LOAD DATA
# -----------------------------
imports = pd.read_csv("imports.csv")
exports = pd.read_csv("exports.csv")

# print columns so you can see the file structure
print("Imports columns:", imports.columns)
print("Exports columns:", exports.columns)

# first column in each file is the date column
date_col_imports = imports.columns[0]
date_col_exports = exports.columns[0]

# convert date columns to datetime
imports[date_col_imports] = pd.to_datetime(imports[date_col_imports])
exports[date_col_exports] = pd.to_datetime(exports[date_col_exports])

# rename columns to make them easier to use
imports = imports.rename(columns={
    date_col_imports: "DATE",
    "IMPCH": "Imports"
})

exports = exports.rename(columns={
    date_col_exports: "DATE",
    "EXPCH": "Exports"
})

# merge datasets on DATE
trade = pd.merge(imports, exports, on="DATE", how="inner")

# sort by date
trade = trade.sort_values("DATE")

# -----------------------------
# CALCULATIONS
# -----------------------------
trade["Trade_Deficit"] = trade["Imports"] - trade["Exports"]
trade["Imports_Pct_Change"] = trade["Imports"].pct_change() * 100
trade["Exports_Pct_Change"] = trade["Exports"].pct_change() * 100

# classify time periods
def classify_period(date):
    if date < pd.to_datetime("2018-01-01"):
        return "Pre-Trade War"
    elif date < pd.to_datetime("2020-03-01"):
        return "Trade War"
    else:
        return "COVID/Post-COVID"

trade["Period"] = trade["DATE"].apply(classify_period)

# period summary
period_summary = trade.groupby("Period")[["Imports", "Exports", "Trade_Deficit"]].mean()
print("\nPeriod Summary:")
print(period_summary)

# -----------------------------
# GRAPH 1: IMPORTS + EXPORTS
# -----------------------------
plt.figure(figsize=(12, 6))

plt.plot(trade["DATE"], trade["Imports"], label="Imports from China", linewidth=2)
plt.plot(trade["DATE"], trade["Exports"], label="Exports to China", linewidth=2)

plt.axvline(pd.to_datetime("2018-01-01"), linestyle="--", linewidth=2, label="Tariffs Begin")
plt.axvline(pd.to_datetime("2020-03-01"), linestyle="--", linewidth=2, label="COVID")

plt.text(pd.to_datetime("2018-02-01"), trade["Imports"].max() * 0.98, "Tariffs", rotation=90, va="top")
plt.text(pd.to_datetime("2020-04-01"), trade["Imports"].max() * 0.98, "COVID", rotation=90, va="top")

plt.title("US-China Trade Dynamics (2016–2025)", fontsize=16)
plt.xlabel("Year")
plt.ylabel("Trade Value")
plt.legend()
plt.grid()
plt.tight_layout()
plt.savefig("graph1_trade_dynamics.png", dpi=300, bbox_inches="tight")
plt.show()

# -----------------------------
# GRAPH 2: TRADE DEFICIT
# -----------------------------
plt.figure(figsize=(12, 6))

plt.plot(trade["DATE"], trade["Trade_Deficit"], label="US Trade Deficit with China", linewidth=2)

plt.axvline(pd.to_datetime("2018-01-01"), linestyle="--", linewidth=2, label="Tariffs Begin")
plt.axvline(pd.to_datetime("2020-03-01"), linestyle="--", linewidth=2, label="COVID")

plt.title("US Trade Deficit with China Over Time", fontsize=16)
plt.xlabel("Year")
plt.ylabel("Trade Deficit")
plt.legend()
plt.grid()
plt.tight_layout()
plt.savefig("graph2_trade_deficit.png", dpi=300, bbox_inches="tight")
plt.show()

# -----------------------------
# GRAPH 3: PERCENT CHANGE
# -----------------------------
plt.figure(figsize=(12, 6))

plt.plot(trade["DATE"], trade["Imports_Pct_Change"], label="Imports % Change", linewidth=2)
plt.plot(trade["DATE"], trade["Exports_Pct_Change"], label="Exports % Change", linewidth=2)

plt.axvline(pd.to_datetime("2018-01-01"), linestyle="--", linewidth=2, label="Tariffs Begin")
plt.axvline(pd.to_datetime("2020-03-01"), linestyle="--", linewidth=2, label="COVID")

plt.title("Percent Change in US-China Trade", fontsize=16)
plt.xlabel("Year")
plt.ylabel("Percent Change")
plt.legend()
plt.grid()
plt.tight_layout()
plt.savefig("graph3_percent_change.png", dpi=300, bbox_inches="tight")
plt.show()

# -----------------------------
# SAVE CLEAN DATA
# -----------------------------
trade.to_csv("clean_trade_analysis.csv", index=False)
print("\nSaved cleaned file as clean_trade_analysis.csv")
print("Saved graph1_trade_dynamics.png")
print("Saved graph2_trade_deficit.png")
print("Saved graph3_percent_change.png")