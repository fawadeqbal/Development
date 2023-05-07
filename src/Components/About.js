import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './css/About.css';

const About = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={8}>
          <h1 className="text-center my-5">About Us</h1>
          <p className="lead">We are TechCo, a tech company that specializes in creating innovative solutions to everyday problems.</p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col lg={8}>
          <h2 className="my-5">Our Mission</h2>
          <p className="lead">Our mission is to make people's lives easier by providing them with the latest and greatest technology on the market.</p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col lg={8}>
          <h2 className="my-5">Our Team</h2>
          <p className="lead">We are a team of experienced professionals who are passionate about technology. Each member of our team brings a unique set of skills and expertise to the table, allowing us to deliver the best possible solutions to our customers.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
