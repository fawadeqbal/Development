import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './css/Contact.css';

const Contact = () => {
  return (
    <Container className='contact'>
      <Row className="justify-content-center">
        <Col lg={8}>
          <h1 className="text-center my-5">Contact Us</h1>
          <p className="lead">Have a question or comment? We'd love to hear from you!</p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col lg={8}>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
            </Form.Group>
            <div className='submit'>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
