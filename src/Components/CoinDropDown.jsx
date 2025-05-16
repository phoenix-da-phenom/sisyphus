import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import Groupicon from '../assets/Groupicon.png'
export default function CoinDropDown() {
  return (
    <div className='coin-container'>
        <img src={Groupicon} className='coin-container__img'/>
        <div className='coin-container__text'>
            <p className='coin-container__txt' >BTC/USDT</p>
         <RiArrowDropDownLine className='coin-container__icon'  />
        </div>
              <div className="top-info-data__main-number">
        <p>$20.634</p>
      </div>
    </div>
  )
}
