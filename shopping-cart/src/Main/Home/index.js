import React, { Component } from "react";
import { Card } from "react-bootstrap";

//send a GET /list request and
//show the data in a tabular format (not json).
class Cart extends Component {
  render() {
    return (
      <Card border="info">
        <Card.Header>Shop Today!</Card.Header>
        <Card.Body></Card.Body>
      </Card>
    );
  }
}

export default Cart;
