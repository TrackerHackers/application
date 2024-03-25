import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <div id="landing-page" className="landing-container">
    <div className="landing-green-background">
      <Container className="text-center">
        <h1 style={{ paddingTop: '20px', color: '#100f0f', fontSize: '36pt' }}>
          Welcome to Inventory Manager
        </h1>
        <h3 style={{ paddingBottom: '20px', color: '#100f0f' }}>
          A smart solution to manage your office inventory efficiently.
        </h3>
      </Container>
    </div>
    <div className="landing-white-background">
      <Container className="justify-content-center text-center">
        <h2 style={{ color: '#100f0f', paddingBottom: '30px' }}>Get started by logging in or create a profile:</h2>
        <Row>
          <Col>
            <Link to="/signin">
              <button
                type="button"
                className="btn btn-primary fw-bold"
                style={{
                  fontSize: '24pt',
                  borderRadius: '0',
                  marginBottom: '30px',
                  color: '#000',
                  backgroundColor: '#fff',
                  border: '2px solid #000',
                  padding: '20px 50px',
                }}
              >
                Sign In
              </button>
            </Link>
          </Col>
          <Col>
            <Link to="/signup">
              <button
                type="button"
                className="btn btn-primary fw-bold"
                style={{
                  fontSize: '24pt',
                  borderRadius: '0',
                  marginBottom: '30px',
                  color: '#000',
                  backgroundColor: '#fff',
                  border: '2px solid #000',
                  padding: '20px 50px',
                }}
              >
                Sign Up
              </button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="landing-green-background">
      <Container className="text-center">
        <h2 style={{ color: '#100f0f', paddingTop: '20px' }}>Key Features</h2>
        <Row className="mt-3">
          <Col xs={12} md={4} className="text-center">
            <img src="/images/add-inventory.png" alt="Add Inventory" className="img-fluid" />
            <h4>Add Inventory</h4>
            <p>Add new items to your inventory with ease.</p>
          </Col>
          <Col xs={12} md={4} className="text-center">
            <img src="/images/edit-inventory.png" alt="Edit Inventory" className="img-fluid" />
            <h4>Edit Inventory</h4>
            <p>Edit existing inventory items quickly and efficiently.</p>
          </Col>
          <Col xs={12} md={4} className="text-center">
            <img src="/images/view-inventory.png" alt="View Inventory" className="img-fluid" />
            <h4>View Inventory</h4>
            <p>View your entire inventory at a glance.</p>
          </Col>
        </Row>
      </Container>
    </div>
  </div>

);

export default Landing;
