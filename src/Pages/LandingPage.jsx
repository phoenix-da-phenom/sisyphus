import CandlestickChart from "../Components/CandlestickChart";
import OrderBook from "../Components/OrderBook";
import BuyBTC from "../Components/BuyBTC";
import Navbar from "../Components/Navbar";
import TopInfo from "../Components/TopInfo";
import ChartTimerTab from "../Components/ChartTimerTab";
import { useState } from "react";
import MobileOrderTab from "../Components/MobileOrderTab";

function App() {
  const [days, setDays] = useState(30);
  const [selectTab, setSelectTab] = useState("charts");

  return (
    <>
      <Navbar />

      <div className="top-info-container">
        <TopInfo />
      </div>

      {/* ===== MOBILE VIEW ===== */}
      <div className="mobile-view">
        <MobileOrderTab setTab={setSelectTab} activeTab={selectTab} />

        {selectTab === "charts" && (
          <div className="candleStick__container">
            <ChartTimerTab setDays={setDays} />
            <CandlestickChart days={days} coinId="bitcoin" />
          </div>
        )}

        {selectTab === "orderBook" && (
          <div className="order-book-container">
            <OrderBook />
          </div>
        )}

        {selectTab === "buySell" && (
          <div className="buy-btc-container">
            <BuyBTC />
          </div>
        )}
      </div>

      {/* ===== DESKTOP VIEW ===== */}
      <div className="desktop-view main-area">
        <div className="candleStick__container">
          <ChartTimerTab setDays={setDays} />
          <CandlestickChart days={days} coinId="bitcoin" />
        </div>

        <div className="order-book-container">
          <OrderBook />
        </div>

        <div className="buy-btc-container">
          <BuyBTC />
        </div>
      </div>
    </>
  );
}

export default App;
