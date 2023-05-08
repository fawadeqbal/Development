import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import CartIcon from './CartIcon';
import { faUserCircle, faShoppingBasket, faSearch, faHome, faInfoCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header({ cart }) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          My Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" exact activeClassName="active" className='nav'>
              <FontAwesomeIcon icon={faHome} /> Products
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" activeClassName="active" className='nav'>
              <FontAwesomeIcon icon={faEnvelope} /> Contact
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" activeClassName="active" className='nav'>
            <FontAwesomeIcon icon={faInfoCircle} /> About
          </Nav.Link>
          </Nav>
          
          <Nav>
            <Nav.Link as={NavLink} to="/search" activeClassName="active" className='nav'>
              <FontAwesomeIcon icon={faSearch} /> Search Product
            </Nav.Link>
            <Nav.Link as={NavLink} to="/cart" activeClassName="active" className='nav d-flex align-items-center'>
              <CartIcon cart={cart} />
              <span className="ms-2"><FontAwesomeIcon icon={faShoppingBasket} /></span>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/signin" activeClassName="active" className='nav'>
              <FontAwesomeIcon icon={faUserCircle} /> SignIn
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
