import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div id="landing-page" className="landing-container">
    <Container>
      <Row className="justify-content-center align-items-center text-center">
        <Col>
          <h1>Welcome to Inventory Manager</h1>
          <p className="lead">A smart solution to manage your office inventory efficiently.</p>
          <div>
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
          </div>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col className="text-center">
          <h2>Key Features</h2>
        </Col>
      </Row>
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
);

export default Landing;
