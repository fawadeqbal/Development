import React, { useState } from "react";
import Cart from "./Cart";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import "./products.css";
import Header from "./Header";
import data from '../data/products.json'

function Products() {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);
    if (existingItemIndex >= 0) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
      setTotal(total + product.price);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      setTotal(total + product.price);
    }
  };

  const incrQuan = (item) => {
    const updatedCart = cart.map((product) =>
      product.id === item.id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setCart(updatedCart);
    setTotal(total + item.price);
  };

  const decrQuan = (item) => {
    const updatedCart = cart.map((product) =>
      product.id === item.id && product.quantity > 0
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    setCart(updatedCart);
    if (item.quantity > 0) {
      setTotal(total - item.price);
    }
  };

  const removeItem = (item) => {
    const updatedCart = cart.filter((product) => product.id !== item.id);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
    setTotal(0);
  };

  const handleCheckout = () => {
    alert("Thank you for your purchase!");
    clearCart();
  };

  return (
    <>
      <Header cartItems={cart} />
      <Container>
        <h2 className="my-3">Products</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {products.map((product) => (
            <Col key={product.id}>
              <Card>
                <Card.Img variant="top" src={product.url} height={250}/>
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{`$${product.price}`} <br />
      {product.description}</Card.Text>
                  <Button onClick={() => addToCart(product)} variant="primary">
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Cart
          cartItems={cart}
          totalBill={total}
          clearCart={clearCart}
          incrQuan={incrQuan}
          decrQuan={decrQuan}
          removeItem={removeItem}
          handleCheckout={handleCheckout}
        />
      </Container>
    </>
  );
}

export default Products;