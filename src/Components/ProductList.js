import React from 'react'
import { Row,Col,Card,Button } from 'react-bootstrap'

const ProductList = ({products,addToCart}) => {
  return (
    <div>
        <Row xs={1} md={2} lg={3} className="g-4">
          {products.map((product) => (
            <Col key={product.id}>
              <Card style={{ height: '390px', width: '330px' }}>
                <Card.Img variant="top" src={product.url} height={250} />
                <Card.Body >
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

export default ProductList