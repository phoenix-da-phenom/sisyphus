import React from "react";
import Icon1 from "../assets/icon1.svg";
import Icon2 from "../assets/icon2.svg";
import Icon3 from "../assets/icon3.svg";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function TradingPairtab() {
  return (
    <div className="trading-pair-tab">
      <div className="active">
        <img src={Icon1} />
      </div>

      <div>
        <img src={Icon2} />
      </div>

      <div>
        <img src={Icon3} />
      </div>

      <div className="trading-pair-tab__dropdown">
        <div>10</div>
            <RiArrowDropDownLine className='trading-pair-tab-icon'  />
      </div>
    </div>
  );
}
