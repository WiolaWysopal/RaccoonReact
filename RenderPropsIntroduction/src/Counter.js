import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  render() {
    return (
      <div>
        <button onClick={this.increment}>Increase</button>
        {/* Wywołujemy funkcję render przekazując aktualny count */}
        {this.props.render(this.state.count)}
      </div>
    );
  }
}

export default Counter;
