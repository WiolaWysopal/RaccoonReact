import React, { Component } from "react";

class EventHandlerDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "", // Stan przechowujący tekst z pola tekstowego
      count: 0, // Stan przechowujący liczbę kliknięć
    };

    // Bindowanie metod do instancji komponentu
    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  // Metoda obsługująca kliknięcie przycisku
  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  // Metoda obsługująca zmianę tekstu w polu tekstowym
  handleInputChange(event) {
    this.setState({ text: event.target.value });
  }

  render() {
    return (
      <div>
        <h1>Reakcja na zdarzenia</h1>

        {/* Przycisk, który zwiększa licznik po kliknięciu */}
        <button onClick={this.handleClick}>
          Kliknięto {this.state.count} razy
        </button>

        {/* Pole tekstowe, które zmienia stan tekstu w miarę wpisywania */}
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleInputChange}
          placeholder="Wpisz coś"
        />
        <p>Wpisany tekst: {this.state.text}</p>
      </div>
    );
  }
}

export default EventHandlerDemo;
