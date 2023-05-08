import React, { useState } from 'react';
import { Form, Row, Col, Card, Button, Toast, Container } from 'react-bootstrap';

const Search = ({ addToCart, searchTerm, filteredProducts, setSearchTerm }) => {
  const [showToast, setShowToast] = useState(false); // state to show/hide toast message
  const [addedProduct, setAddedProduct] = useState(null); // state to store the added product

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedProduct(product);
    setShowToast(true);
  };

  const handleToastClose = () => setShowToast(false); // handler function to hide the toast message

  return (
    <div style={{ marginBottom: '10px' }}>
      <Container>
      <Form>
        <Form.Group className="search-container" controlId="search">
          <Form.Control
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Form.Group>
      </Form>
      </Container>
      <Container>
      {searchTerm.length === 0 && (
        <div style={{ textAlign: 'center' }}>
          <h3>All Products</h3>
        </div>
      )}

      {searchTerm.length > 0 && filteredProducts.length === 0 && (
        <div style={{ textAlign: 'center' }}>
          <h3>No products found</h3>
        </div>
      )}

      <Row xs={1} md={2} lg={3} className="g-4">
        {filteredProducts.map((product) => (
          <Col key={product.id}>
            <Card style={{ height: '390px', width: '330px' }}>
              <Card.Img variant="top" src={product.url} height={250} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{`$${product.price}`}</Card.Text>
                <Button onClick={() => handleAddToCart(product)} variant="primary">
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Toast message */}
      <Toast show={showToast} onClose={handleToastClose} style={{ position: 'absolute', top: 10, right: 10 }}>
        <Toast.Header>
          <strong className="me-auto">Success</strong>
        </Toast.Header>
        <Toast.Body>{addedProduct ? `${addedProduct.name} added to cart.` : ''}</Toast.Body>
      </Toast>
      </Container>
    </div>
  );
};

export default Search;
