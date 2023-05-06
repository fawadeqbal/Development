import React from 'react';
import './product.css'
const Product = (props) => {
  const {name, price, description, addToCart} = props;
  return (
    <div className="product">
      <h2 className="product__name">{name}</h2>
      <p className="product__price">Price: {price}</p>
      <p className="product__description">Description: {description}</p>
      <button className="product__button" onClick={addToCart}>Add To Cart</button>
    </div>
  )
}

export default Product;
