import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <Container className='about'>
      <Row>
        <Col>
          <h2 className="mt-5">About Us</h2>
          <p className="lead">We are a furniture store that sells high-quality furniture at affordable prices.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
