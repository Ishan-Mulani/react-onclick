import React, { Component } from "react";

class BrokenClick2 extends Component {
  // This alternate and short syntax to initailze state and bind this to the function
  // Note code below is not a valid javascript, babel does the heavy lifting and does above for us (which we do explictly eariler)
  state = {
    clicked: false,
  };
  handleClick = (evt) => {
    this.setState({ clicked: true });
  };
  render() {
    return (
      <div>
        <h1>{this.state.clicked ? "Clicked" : "Not Clicked"}</h1>
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    );
  }
}

export default BrokenClick2;
