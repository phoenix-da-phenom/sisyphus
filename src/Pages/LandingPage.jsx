import CandlestickChart from "../Components/CandlestickChart";
import OrderBook from "../Components/OrderBook";
import BuyBTC from "../Components/BuyBTC";
import Navbar from "../Components/Navbar";
import TopInfo from "../Components/TopInfo";
import ChartTimerTab from "../Components/ChartTimerTab";

function App() {
  // Sample candlestick data (time, open, high, low, close)
  const sampleData = [
    { time: "2023-01-01", open: 100, high: 110, low: 95, close: 105 },
    { time: "2023-01-02", open: 105, high: 115, low: 100, close: 110 },
    // Add more data points...
  ];

  return (
    <>
      <Navbar />
      <div className="top-info-container">
        <TopInfo />
      </div>

      <div className="main-area">
        <div className="candleStick__container">
          <ChartTimerTab />

          <CandlestickChart data={sampleData} />
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
