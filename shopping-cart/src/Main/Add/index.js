import React, { Component } from "react";
import { Form, Card, Button } from "react-bootstrap";

//Will show 4 different input fields
//(name, description, price, amount)
//And an "add" button
//You will send a POST /item/add request
//and show that the request was successfu
class Add extends Component {
  render() {
    return (
      <Card border="info">
        <Card.Header>Add to Cart:</Card.Header>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Enter name" />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control type="description" placeholder="Enter description" />
          </Form.Group>
          <Form.Group controlId="price">
            <Form.Label>Price:</Form.Label>
            <Form.Control type="price" placeholder="Enter price" />
          </Form.Group>
          <Form.Group controlId="quantity">
            <Form.Label>Quantity:</Form.Label>
            <Form.Control type="quantity" placeholder="Enter quantity" />
          </Form.Group>
        </Form>
        <Card.Body>
          <Card.Text>
            <Button variant="primary" href="./label">
              Add Item
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Add;
