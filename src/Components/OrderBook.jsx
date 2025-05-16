import React from 'react'
import OrderTab from './OrderTab'
import TradingPairtab from './TradingPairtab'
import PricePairSheet from './PricePairSheet'

export default function OrderBook() {
  return (
    <section className='order-book__container'>
        <OrderTab/>
        <TradingPairtab/>
        <PricePairSheet/>

    </section>
  )
}
