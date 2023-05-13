import React, { useState } from 'react';
import { Row, Col, Card, Toast } from 'react-bootstrap';
import Button from '@mui/material/Button';
import { ShoppingCartRounded } from '@mui/icons-material';

const ProductList = ({ products, addToCart }) => {
  const [showToast, setShowToast] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  const handleAddToCart = (product) => {
    addToCart(product);
    setSelectedProduct(product);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div>
      <Row xs={1} md={2} lg={3} className="g-4">
        {products.map((product) => (
          <Col key={product.id}>
            <Card style={{ height: '100%' }}>
              <Card.Img variant="top" src={product.url} height={250} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{`$${product.price}`}</Card.Text>
                <Button onClick={() => handleAddToCart(product)} variant="contained" startIcon={<ShoppingCartRounded />}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Toast
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={3000}
        autohide
        style={{ position: 'fixed', top: 20, right: 20 }}
      >
        <Toast.Header>
          <strong className="me-auto">Success!</strong>
        </Toast.Header>
        <Toast.Body>{`${selectedProduct.name} added to cart.`}</Toast.Body>
      </Toast>
    </div>
  );
};

export default ProductList;
