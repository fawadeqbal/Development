import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import CartIcon from './CartIcon';
import { faUserCircle, faSearch, faHome, faInfoCircle, faEnvelope, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ShoppingCartRounded } from '@mui/icons-material';

function Header({ cart }) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light">
      <Container>
        <Navbar.Brand as={Link} to="/Web-app">
          My Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/Web-app" exact activeClassName="active" className='nav'>
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
            <Nav.Link as={NavLink} to="/addproduct" activeClassName="active" className='nav'>
              <FontAwesomeIcon icon={faPlus} /> Add Product
            </Nav.Link>
            <Nav.Link as={NavLink} to="/cart" activeClassName="active" className='nav'>
              <ShoppingCartRounded />
              <CartIcon cart={cart} />
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
