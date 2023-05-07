import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <div className='footer'>
    <footer className="bg-light py-3">
      <Container>
        <Row>
          <Col md={4}>
            <h5>My Shop</h5>
            <p>Discover a wide range of electronic devices, including mobiles, speakers, headphones, and more, at My Shop.</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="#!"><i className="bi bi-facebook"></i> Facebook</a></li>
              <li><a href="#!"><i className="bi bi-twitter"></i> Twitter</a></li>
              <li><a href="#!"><i className="bi bi-instagram"></i> Instagram</a></li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <p className="text-center">© My Shop {new Date().getFullYear()}</p>
          </Col>
        </Row>
      </Container>
    </footer>
    </div>
  );
}

export default Footer;
