import React from 'react';
import './checkout.css'

function Checkout(props){
  const {cartItems,clear}= props;
  const totalPrice = cartItems.reduce((sum, item)=>sum+ item.price, 0)
  return(
    
    <div className="checkout-container">
    <h2 className="checkout__heading">CheckOut</h2>
    <ul className="checkout__list">
      {
        cartItems.map((item)=>(
          <li className="checkout__item">
            <span className="checkout__item-name">{item.name}</span>
            <span className="checkout__item-price">{item.price}</span>
          </li>
        ))
      }
    </ul>
    <h3 className="checkout__total-price">Total Price: {totalPrice}</h3>
    <button className='clear-button' onClick={clear}>Clear Cart</button>
    </div>
  );
}

export default Checkout;
