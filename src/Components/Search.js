import React, { useState } from 'react';
import { Row, Col, Card, Toast } from 'react-bootstrap';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import './css/search.css'
import { ShoppingCartRounded } from '@mui/icons-material';
import Button from '@mui/material/Button';

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
    <div className='search-page'>
      <Container>
        <form>
          <TextField
            id="search"
            label="Search by name"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            variant="outlined"
            fullWidth
          />
        </form>
      </Container>
      <Container>
        {searchTerm.length === 0 && (
          <div style={{ textAlign: 'center' }}>
            <h3>All Products</h3>
          </div>
        )}
        <div className='products-search'>
          {searchTerm.length > 0 && filteredProducts.length === 0 && (
            <div style={{ textAlign: 'center' }}>
              <h3>No products found</h3>
            </div>
          )}

          <Row xs={1} md={2} lg={3} className="g-4">
            {filteredProducts.map((product) => (
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
        </div>
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
