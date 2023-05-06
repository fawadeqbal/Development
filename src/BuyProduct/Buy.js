import React, { useState } from 'react'
import Product from './Product'
import Checkout from './CheckOut'
import './buy.css'

const Buy = () => {
  const [cart, setCart]= useState([])
  const updateCart = (product)=> {
    setCart([...cart, product])
  }
  const clear = ()=> {
    setCart([])
  }
  return (
    <div className='buy'>
      <Product name="Pen" price={120} description= "Dollar pen" addToCart={()=> updateCart({name:"Pen", price:120})}/>
      <Product name="Sticky Notes" price={80} description= "Jellybeans Sticky Notes, Study Hard"  addToCart={()=> updateCart({name:"Sticky Notes", price:80})}/>
      <Checkout cartItems={cart} clear={clear}/>
    </div>
  )
}

export default Buy
