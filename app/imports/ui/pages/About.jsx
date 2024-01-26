import React from 'react';
import { Container, Row } from 'react-bootstrap';

const About = () => (
  <Container id="about" fluid className="py-3">
    <Container style={{ backgroundColor: 'white', padding: '10px', width: '70%' }} className="rounded">
      <Row className="align-middle text-center pt-3">
        <h1>About Us</h1>
      </Row>
      <Row className="py-4 d-flex justify-content-center">
        <p style={{ maxWidth: '90%' }} className="text-black">
          The TrackMyStuff! app is designed to help make office management easier! We have created a comprehensive inventory application that allows you to easily view your current inventory, add inventory, modify inventory, or delete inventory.
        </p>
        <p style={{ maxWidth: '90%' }} className="text-black">
          This service was created by UH Manoa ICS undergraduate students as a project for ICS 427.
        </p>
      </Row>
      <Container style={{ backgroundColor: 'white', padding: '10px', width: '90%' }} className="rounded">
        <Row className="align-middle">
          <h2 className="text-center py-2">
            How to Use the TrackMyStuff! App
          </h2>
          <h3 className="py-3">
            Log In or Sign Up
          </h3>
          <p className="text-black">
            If you have created an account with us before, simply log in using either your username or email and your password. If you have not yet used TrackMyStuff!, simply create an account using your email and a password of your choice.
          </p>
          <h3 className="py-2">
            Current Inventory
          </h3>
          <p className="text-black">
            changeme
          </p>
          <h3 className="py-2">
            Add An Item
          </h3>
          <p className="text-black">
            changeme
          </p>
          <h3 className="py-2">
            Edit Inventory
          </h3>
          <p className="text-black">
            changeme
          </p>
        </Row>
      </Container>
    </Container>
  </Container>
);

export default About;
