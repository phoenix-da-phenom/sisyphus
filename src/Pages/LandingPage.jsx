import CandlestickChart from "../Components/CandlestickChart";
import OrderBook from "../Components/OrderBook";
import BuyBTC from "../Components/BuyBTC";
import Navbar from "../Components/Navbar";
import TopInfo from "../Components/TopInfo";
import ChartTimerTab from "../Components/ChartTimerTab";
import { useState } from "react";

function App() {
  const [days, setDays] = useState(30);
 

  return (
    <>
      <Navbar />
      <div className="top-info-container">
        <TopInfo />
      </div>

      <div className="main-area">
        <div className="candleStick__container">
          <ChartTimerTab setDays={setDays} />

          <CandlestickChart days={days} coinId={"bitcoin"}   />
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
