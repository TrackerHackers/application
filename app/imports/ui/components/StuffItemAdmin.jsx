import React from 'react';
import PropTypes from 'prop-types';
import { PencilFill, TrashFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
const StuffItemAdmin = ({ stuff }) => (
  <tr>
    <td>{stuff.name}</td>
    <td>{stuff.description}</td>
    <td>{stuff.quantity}</td>
    <td>{stuff.rating}</td>
    <td>{stuff.owner}</td>
    <td>
      <Link aria-label="Edit" to={`/edit/${stuff._id}`}><PencilFill /></Link>
    </td>
    <td>
      <Link aria-label="Delete" to={`/delete/${stuff._id}`}><TrashFill /></Link>
    </td>
  </tr>
);

// Require a document to be passed to this component.
StuffItemAdmin.propTypes = {
  stuff: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    quantity: PropTypes.number,
    rating: PropTypes.string,
    _id: PropTypes.string,
    owner: PropTypes.string,
  }).isRequired,
};

export default StuffItemAdmin;
