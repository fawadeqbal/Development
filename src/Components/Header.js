import React from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import CartIcon from './CartIcon';

function Header({cart}) {
  

  return (
    <Navbar bg="light" expand="lg" >
      <Container >
        <Navbar.Brand as={Link} to="/">My Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" exact activeClassName="active" className='nav'>Products</Nav.Link>
            <Nav.Link as={NavLink} to="/about" activeClassName="active" className='nav'>About</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" activeClassName="active" className='nav'>Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/signin" activeClassName="active" className='nav'>SignIn</Nav.Link>
            <Nav.Link as={NavLink} to="/search" activeClassName="active" className='nav'>Search Product</Nav.Link>
            <Nav.Link as={NavLink} to="/cart" activeClassName="active" className='nav'>View Cart</Nav.Link>
            <CartIcon cart={cart}/>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
