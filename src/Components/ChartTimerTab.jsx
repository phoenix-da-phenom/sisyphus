import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { LuChartCandlestick } from "react-icons/lu";
import { RiArrowGoBackLine } from "react-icons/ri";
import { RiArrowGoForwardLine } from "react-icons/ri";
export default function ChartTimerTab() {
  return (
    <div className='chart-tab'>
        <ul className='list'>
            <li>Time</li>
            <li>1H</li>
            <li>2H</li>
            <li>4H</li>
            <li><span className='active'>1D</span></li>
            <li>1W</li>
            <li>1M</li>
            <li><MdKeyboardArrowDown /></li>
            <li style={{ borderLeft:'1px solid #393D41',borderRight:'1px solid #393D41', padding:'0px 10px' }}><LuChartCandlestick /></li>
            <li>Fx Indicators</li>
            <li style={{ borderLeft:'1px solid rgb(111, 111, 119)', paddingLeft:'10px', color:'#393D41' }}><RiArrowGoBackLine /></li>
            <li style={{ borderRight:'1px solid rgb(111, 111, 119)', paddingRight:'10px' ,color:'#393D41', marginLeft:'-15px' }}><RiArrowGoForwardLine /></li>
        </ul>

    </div>
  )
}
