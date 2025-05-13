import React, { Component } from "react";

class Child extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onChange}>
          Click to change parent's message
        </button>
      </div>
    );
  }
}

export default Child;
