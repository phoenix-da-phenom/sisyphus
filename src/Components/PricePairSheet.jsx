import React from "react";
import { FaLongArrowAltUp } from "react-icons/fa";
import PriceText from "./PriceText";

export default function PricePairSheet() {
  // Overlay coverage percentage (0-100)
  const overlayPercentage = 500;

  return (
    <div>
      <div className="price-pair" style={{ position: "relative" }}>
 
        {/* <div>
          <PriceText overlayPercentage={50} top="8px" color={"#FF6838"} />
          <PriceText overlayPercentage={1} top="8px" color={"#FF6838"} />
          <PriceText overlayPercentage={30} top="8px" color={"#FF6838"} />
          <PriceText overlayPercentage={90} top="8px" color={"#FF6838"} />
          <PriceText overlayPercentage={50} top="8px" color={"#FF6838"} />
       
        </div>

        <div className="main_display">
          <div>
            <h4 className="text-green">36,641.20</h4>
          </div>
          <div>
            <FaLongArrowAltUp className="text-green" />
          </div>
          <div>
            {" "}
            <h4 className="text-white">36,641.20</h4>
          </div>
        </div>
        <PriceText overlayPercentage={90} top="10px" color={"#00C076"} />
        <PriceText overlayPercentage={50} top="10px" color={"#00C076"} />
        <PriceText overlayPercentage={30} top="10px" color={"#00C076"} />
        <PriceText overlayPercentage={90} top="10px" color={"#00C076"} />
        <PriceText overlayPercentage={50} top="10px" color={"#00C076"} />
        <PriceText overlayPercentage={30} top="10px" color={"#00C076"} /> */}

          <div className="order-table-wrapper">
  <table className="order-table">
    <thead>
      <tr>
        <th style={{ textAlign:'left' }}>
          Price
          <span>USDT</span>
        </th>
        <th>
          Amount
          <span>BTC</span>
        </th>
        <th>Total</th>
      </tr>
    </thead>

    <tbody>
     

    </tbody>
   
  </table>
   <PriceText overlayPercentage={30} top="10px" color={"#00C076"} />
    <PriceText overlayPercentage={50} top="8px" color={"#FF6838"} />
          <PriceText overlayPercentage={1} top="8px" color={"#FF6838"} />
          <PriceText overlayPercentage={30} top="8px" color={"#FF6838"} />
          <PriceText overlayPercentage={90} top="8px" color={"#FF6838"} />
          <PriceText overlayPercentage={50} top="8px" color={"#FF6838"} />
      <PriceText overlayPercentage={30} top="10px" color={"#00C076"} />

</div>




      </div>
    </div>
  );
}
