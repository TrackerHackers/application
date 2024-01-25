import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container id="landing-page" fluid className="py-3 d-flex flex-column justify-content-center align-items-center vh-100">
    <Row className="flex-grow-1" />
    <Row>
      <Col />
      <Col xs={8} className="text-center">
        <h1>Welcome to TrackMyStuff!</h1>
        <p>A documentation tool that will allow you to keep track of office inventory. To get started, log in or create an account!</p>
      </Col>
      <Col />
    </Row>
    <Row className="flex-grow-1" />
  </Container>
);

export default Landing;
