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
  "1H": 1,
      "2H": 2,
      "4H": 4,
      "1D": 1,
      "1W": 7,
      "1M": 30,
}
if (daysMap[selectedList]){
  setDays(daysMap[selectedList])
}






  }
  return (
    <div className='chart-tab'>
        <ul className='list' onClick={handleClick}>
            <li value="time">Time</li>
            <li value="1h">1H</li>
            <li value="2h">2H</li>
            <li value="4h">4H</li>
            <li><span className='active'>1D</span></li>
            <li value="1w">1W</li>
            <li value="1m">1M</li>
            <li><MdKeyboardArrowDown /></li>
            <li style={{ borderLeft:'1px solid #393D41',borderRight:'1px solid #393D41', padding:'0px 10px' }}><LuChartCandlestick /></li>
            <li>Fx Indicators</li>
            <li style={{ borderLeft:'1px solid rgb(111, 111, 119)', paddingLeft:'10px', color:'#393D41' }}><RiArrowGoBackLine /></li>
            <li style={{ borderRight:'1px solid rgb(111, 111, 119)', paddingRight:'10px' ,color:'#393D41', marginLeft:'-15px' }}><RiArrowGoForwardLine /></li>
        </ul>

    </div>
  )
}
