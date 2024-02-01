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
            {/* eslint-disable-next-line max-len */}
            Welcome to your Current Inventory page! Here, you can view all the items currently tracked by TrackMyStuff! The table below displays essential information about each item, including its name, quantity, location, and more. Use the search and filter options to quickly find specific items, or scroll through the list to browse your entire inventory.
          </p>
          <h3 className="py-2">
            Add An Item
          </h3>
          <p className="text-black">
            {/* eslint-disable-next-line max-len,react/no-unescaped-entities */}
            Ready to add a new item to your inventory? You're in the right place! Fill out the form below with details about the item you'd like to add, including its name, category, quantity, location, and any additional notes. Once you've provided all the necessary information, click the "Add Item" button to include it in your inventory. Keep your inventory organized and up-to-date with TrackMyStuff!
          </p>
          <h3 className="py-2">
            Edit Inventory
          </h3>
          <p className="text-black">
            {/* eslint-disable-next-line max-len,react/no-unescaped-entities */}
            Need to make changes to an existing item in your inventory? No problem! Simply select the item you'd like to edit from the list below, and you'll be able to modify its details as needed. Update the item's name, category, quantity, location, or any other relevant information, and then click the "Save Changes" button to update your inventory. With TrackMyStuff!, managing your inventory has never been easier.
          </p>
        </Row>
      </Container>
    </Container>
  </Container>
);

export default About;
