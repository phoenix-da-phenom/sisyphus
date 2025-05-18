import React from 'react'
import BuySellTab from './BuySellTab'
import TextBox from './TextBox'

export default function BuyBTC() {
  return (
    <div className='order-book__container'>
      <BuySellTab/>
      <div className='options'>
        <div>
          <div ><span className='active'>Limit</span></div>
          <div><span>Market</span></div>
          <div><span>Stop-Limit</span></div>
        </div>

      </div>

      <div style={{ marginTop:'10px' ,display:'flex', flexDirection:'column', gap:'10px' }}>
        <TextBox  placeHolder={"Limit Price"}/>
        <TextBox  placeHolder={"Amount"}/>
        <TextBox  placeHolder={"Type "}/>
       

      </div>

    </div>
  )
}

