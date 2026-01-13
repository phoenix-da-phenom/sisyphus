import React from "react";

export default function MobileOrderTab({ setTab, activeTab }) {
  const getClass = (tabName) =>
    `mobile-tab ${activeTab === tabName ? "active" : ""}`;

  return (
    <div className="mobile-order-tab">
      <div className="mobile-order-tab__container">
        <div
          className={getClass("buySell")}
          onClick={() => setTab("buySell")}
        >
          Buy/Sell
        </div>

        <div
          className={getClass("charts")}
          onClick={() => setTab("charts")}
        >
          Charts
        </div>

        <div
          className={getClass("orderBook")}
          onClick={() => setTab("orderBook")}
        >
          Order Book
        </div>

        <div
          className={getClass("recentTrades")}
          onClick={() => setTab("recentTrades")}
        >
          Recent Trades
        </div>
      </div>
    </div>
  );
}
