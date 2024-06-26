import React from 'react';
import swal from 'sweetalert';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, HiddenField, LongTextField, NumField, SelectField, SubmitField, TextField } from 'uniforms-bootstrap5';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { useParams, useNavigate } from 'react-router';
import { Stuffs } from '../../api/stuff/Stuff';
import LoadingSpinner from '../components/LoadingSpinner';
import sanitize from '../../api/Sanitize';

const bridge = new SimpleSchema2Bridge(Stuffs.schema);

/* Renders the EditStuff page for editing a single document. */
const EditStuff = () => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const { _id } = useParams();
  const pid = sanitize(_id);
  const navigate = useNavigate();
  // console.log('EditStuff', _id);
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { doc, ready } = useTracker(() => {
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Stuffs.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the document
    const document = Stuffs.collection.findOne(pid);
    return {
      doc: document,
      ready: rdy,
    };
  }, [pid]);
  // console.log('EditStuff', doc, ready);
  if (!doc) navigate('/notfound');

  // On successful submit, insert the data.
  const submit = (data) => {
    const { name, description, quantity, rating, notes, owner } = data;
    Stuffs.collection.update(pid, { $set: { name, description, quantity, rating, notes, owner } }, (error) => {
      if (error) {
        swal('Error', error.message, 'error');
      } else {
        swal('Success', `${name} updated successfully`, 'success');
        navigate('/list');
      }
    });
  };

  return ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center"><h2>Edit Inventory</h2></Col>
          <AutoForm schema={bridge} onSubmit={data => submit(data)} model={doc}>
            <Card>
              <Card.Body>
                <TextField name="name" />
                <TextField name="description" />
                <NumField name="quantity" decimal={null} />
                <SelectField name="rating" />
                <LongTextField name="notes" />
                <SubmitField value="Submit" />
                <ErrorsField />
                <HiddenField name="owner" />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />;
};

export default EditStuff;
