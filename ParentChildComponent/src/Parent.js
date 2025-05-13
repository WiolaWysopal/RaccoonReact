import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello from Parent!",
    };
  }

  changeMessage = () => {
    this.setState({
      message: "The message has been changed!",
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <Child onChange={this.changeMessage} />
      </div>
    );
  }
}

export default Parent;
