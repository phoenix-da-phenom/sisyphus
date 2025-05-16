import React from 'react'

export default function OrderTab() {
  return (
    <div className='order-tab'>
        <div className='order-tab__container'>
          <div id='tab1'>Charts</div>
            <div id="tab2" className=' active'>Order Book</div>
            <div id="tab3" className=''>Recent trades</div>
           
        </div>
    </div>
  )
}
