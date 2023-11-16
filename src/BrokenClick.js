import React, { Component } from "react";

class BrokenClick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    // We bind "this" to the handleClick so that react can find this in the handleClick
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(evt) {
    this.setState({ clicked: true });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.clicked ? "Clicked !!!" : "Not Clicked"}</h1>
      </div>
    );
  }
}

export default BrokenClick;
