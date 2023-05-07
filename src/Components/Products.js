import React from "react";
import {Container } from "react-bootstrap";
import "./css/products.css";

import ProductList from "./ProductList";
function Products(props) {
  const {products,addToCart}=props
  return (
    <div className="product">
      <Container>
        {/* <AddProduct 
          products={products} 
          setProducts={setProducts}
      /> */}
      
        
        
        <h2 className="my-3">Products</h2>
        <ProductList 
            products={products}
            addToCart={addToCart}
        />
      </Container>
    </div>
  );
}

export default Products;
