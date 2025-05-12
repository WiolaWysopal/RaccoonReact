import React, { Component } from "react";

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  // componentDidMount jest wywoływana po zamontowaniu komponentu
  componentDidMount() {
    console.log("Komponent został zamontowany");
  }

  // componentDidUpdate jest wywoływana po każdej aktualizacji komponentu
  componentDidUpdate(prevProps, prevState) {
    console.log("Komponent został zaktualizowany");
    console.log("Poprzedni stan:", prevState);
    console.log("Nowy stan:", this.state);
  }

  // componentWillUnmount jest wywoływana tuż przed odmontowaniem komponentu
  componentWillUnmount() {
    console.log("Komponent zostanie odmontowany");
  }

  // Zwiększenie wartości liczby w stanie
  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Renderowanie komponentu
  render() {
    return (
      <div>
        <h1>Aktualny stan: {this.state.count}</h1>
        <button onClick={this.increase}>Zwiększ licznik</button>
      </div>
    );
  }
}

export default LifecycleDemo;
