import React from 'react'
import { Form, Row, Col, Card, Button } from 'react-bootstrap'

const Search = (props) => {
  
  const {addToCart,searchTerm,filteredProducts,setSearchTerm}=props

  return (
    <div style={{ marginBottom: '10px' }}>
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
            <Card style={{ height: "390px", width: "330px" }}>
              <Card.Img variant="top" src={product.url} height={250} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{`$${product.price}`}</Card.Text>
                <Button onClick={() => addToCart(product)} variant="primary">
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Search
