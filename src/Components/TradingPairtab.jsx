import React, { useState } from "react";
import Icon1 from "../assets/icon1.svg";
import Icon2 from "../assets/icon2.svg";
import Icon3 from "../assets/icon3.svg";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsDisplay } from "react-icons/bs";

export default function TradingPairtab() {
 const icons= [Icon1, Icon2, Icon3]
const [activeIndex, setActiveIndex]= useState(0)

  const handleSwitch= ()=>{


  }

  return (
    <div className="trading-pair-tab">
    
      <div style={{ display:'flex', gap:'5px' }}className="icon-wrapper">
        {icons.map((icon, index)=>(
          <div key={index} onClick={()=>setActiveIndex(index)}
          className={activeIndex=== index ? 'active': ""}
          >
            <img src={icon}/>
          </div>
        ))}



      </div>
 

      <div className="trading-pair-tab__dropdown">
        <div>10</div>
            <RiArrowDropDownLine className='trading-pair-tab-icon'  />
      </div>
    </div>
  );
}
