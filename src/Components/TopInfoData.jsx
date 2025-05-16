import React from "react";
import { FaRegClock } from "react-icons/fa";
import { IoIosArrowRoundUp } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";
import { FaRegChartBar } from "react-icons/fa";
export default function TopInfoData() {
  return (
    <div className="top-info-data">

      <div className="data-container">
        <div className="txt">
          <span><FaRegClock /> 24h change</span>
        </div>
        <p>520.80 +1.25%</p>
      </div>

      <div className="data-container">
        <div className="txt">
          <span><IoIosArrowRoundUp /> 24h high</span>
        </div>
        <p>520.80 +1.25%</p>
      </div>

    <div className="data-container">
        <div className="txt">
          <span><IoIosArrowRoundDown /> 24h low</span>
        </div>
        <p>520.80 +1.25%</p>
      </div>

   <div className="data-container">
        <div className="txt">
          <span><FaRegChartBar /> 24h volume</span>
        </div>
        <p>75.655.26</p>
      </div>
    </div>
  );
}
