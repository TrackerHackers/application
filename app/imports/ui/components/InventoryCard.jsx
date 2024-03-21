import React from 'react';
import PropTypes from 'prop-types';
import { PencilFill, TrashFill } from 'react-bootstrap-icons';
import { Card, Button } from 'react-bootstrap';

const InventoryCard = ({ item }) => (
  <Card style={{ width: '18rem' }} className="h-100 m-auto">
    <Card.Header>
      <Card.Title className="px-3 text-center" style={{ marginTop: '10px' }}>{item.name}</Card.Title>
      <Card.Subtitle className="card-subtitle mb-2 text-muted" style={{ marginLeft: '15px', marginTop: '10px' }}>Quantity: {item.quantity}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text className="mb-auto">Description: {item.description}</Card.Text>
      <Card.Text className="mb-auto">Condition: {item.rating}</Card.Text>
      <Card.Text className="mb-auto">Notes: {item.notes ? item.notes : 'N/A'}</Card.Text>
    </Card.Body>
    <Card.Footer>
      <Card.Text className="mb-auto d-flex justify-content-center" style={{ marginTop: '10px' }}>
        <a href={`/edit/${item._id}`}><Button aria-label="Edit" variant="primary"><PencilFill /></Button></a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a href={`/delete/${item._id}`}><Button aria-label="Delete" variant="secondary"><TrashFill /></Button></a>
      </Card.Text>
    </Card.Footer>
  </Card>
);

// Require a document to be passed to this component.
InventoryCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    quantity: PropTypes.number,
    description: PropTypes.string,
    rating: PropTypes.string,
    notes: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default InventoryCard;
