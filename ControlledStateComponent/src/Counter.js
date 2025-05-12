import React, { Component } from "react";

class Counter extends Component {
  // Konstruktor z inicjalizacją stanu
  constructor(props) {
    super(props);
    this.state = {
      number: 0, // Początkowa wartość liczby
    };
  }

  // Metoda do zwiększania liczby
  increase = () => {
    this.setState((prevState) => ({
      number: prevState.number + 1,
    }));
  };

  // Metoda do zmniejszania liczby
  decrease = () => {
    this.setState((prevState) => ({
      number: prevState.number - 1,
    }));
  };

  // Renderowanie komponentu
  render() {
    return (
      <div>
        <h1>Aktualna liczba: {this.state.number}</h1>
        <button onClick={this.increase}>Zwiększ</button>
        <button onClick={this.decrease}>Zmniejsz</button>
      </div>
    );
  }
}

export default Counter;
