import React from "react";

class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    console.log("Constructor: Component has been created");
  }

  componentDidMount() {
    console.log("componentDidMount: Component has been mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate: Component has been updated");
    console.log(
      `    Previous counter: ${prevState.counter}, New counter: ${this.state.counter}`,
    );
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: Component will be unmounted");
  }

  increaseCounter = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    return (
      <div>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.increaseCounter}>Increase counter</button>
      </div>
    );
  }
}

export default LifecycleDemo;
