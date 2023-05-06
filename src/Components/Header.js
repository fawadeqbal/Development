import React from 'react';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';

function Header(props) {
  const { cartItems } = props;

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">My Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/cart">
              <i className="bi bi-cart"></i> Cart{' '}
              {cartItems.length > 0 && <Badge bg="secondary">{cartItems.length}</Badge>}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
