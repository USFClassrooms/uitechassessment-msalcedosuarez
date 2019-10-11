import React, { Component } from "react";

//send a GET /list request and
//show the data in a tabular format (not json).
class Cart extends Component {
  // Initialize the state
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch("/list")
      .then(res => res.json())
      .then(list => this.setState({ list }));
    console.log("Receive Items");
  };

  render() {
    const { list } = this.state;

    return (
      <div>
        <h1>List of Items</h1>
        {/* Check to see if any items are found*/}
        {list.length ? (
          <div>
            {/* Render the list of items */}
            {list.map(item => {
              return <div>{item}</div>;
            })}
          </div>
        ) : (
          <div>
            <h2>No List Items Found</h2>
          </div>
        )}
      </div>
    );
  }
}

export default Cart;
