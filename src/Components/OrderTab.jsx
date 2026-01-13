import React from "react";

export default function OrderTab() {
  const showBuySell = () => {
  }
  const showCharts = () => {
  }

  const showOrderBook = () => {
  }
  const showRecentTrades = () => {
  }
  
  return (
    <div className="order-tab">
      <div className="order-tab__container">
      
        <div id="tab3" className=" active" onClick={showOrderBook}>
          Order Book
        </div>
        <div id="tab4" className="" onClick={showRecentTrades}>
          Recent trades
        </div>
      </div>
    </div>
  );
}
