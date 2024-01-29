import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

const InventoryCard = ({ stuff }) => (
  <Card style={{ width: '18rem' }} className="h-100 m-auto">
    <Card.Img className="item-img" variant="top" src={stuff.image} style={{ height: '40vh' }} />
    <Card.Title className="px-3 text-center">{stuff.name}</Card.Title>
    <Card.Body>
      <Card.Text className="mb-auto">Quantity: {stuff.quantity}</Card.Text>
      <Card.Text className="mb-auto">Condition: {stuff.condition}</Card.Text>
      <Card.Text className="mb-auto d-flex justify-content-center" style={{ marginTop: '10px' }}><a href={`/edit/${stuff._id}`}><Button variant="danger">Edit</Button></a></Card.Text>
    </Card.Body>
  </Card>

);

// Require a document to be passed to this component.
InventoryCard.propTypes = {
  stuff: PropTypes.shape({
    name: PropTypes.string,
    quantity: PropTypes.number,
    condition: PropTypes.string,
    image: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default InventoryCard;
