import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { LuChartCandlestick } from "react-icons/lu";
import { RiArrowGoBackLine } from "react-icons/ri";
import { RiArrowGoForwardLine } from "react-icons/ri";
import { useFetchChart } from '../Hooks/useFetchChart';
export default function ChartTimerTab({setDays}) {
  const handleClick= (e)=>{
  const selectedList= e.target.textContent;
const daysMap= {
  
      "1D": 1,
      "1W": 7,
      "1M": 30,
      "3M": 90,
      '6M': 180,
      '12M': 365
}
if (daysMap[selectedList]){
  setDays(daysMap[selectedList])
}






  }
  return (
    <div className='chart-tab'>
        <ul className='list' onClick={handleClick}>
            <li value="time">Time</li>
           
            <li><span className='active'>1D</span></li>
            <li value="1w">1W</li>
            <li value="1m">1M</li>
             <li value="3m">3M</li>
              <li value="6m">6M</li>
                <li value="12m">12M</li>
            <li><MdKeyboardArrowDown /></li>
            <li style={{ borderLeft:'1px solid #393D41',borderRight:'1px solid #393D41', padding:'0px 10px' }}><LuChartCandlestick /></li>
            <li>Fx Indicators</li>
            <li style={{ borderLeft:'1px solid rgb(111, 111, 119)', paddingLeft:'10px', color:'#393D41' }}><RiArrowGoBackLine /></li>
            <li style={{ borderRight:'1px solid rgb(111, 111, 119)', paddingRight:'10px' ,color:'#393D41', marginLeft:'-15px' }}><RiArrowGoForwardLine /></li>
        </ul>

    </div>
  )
}
