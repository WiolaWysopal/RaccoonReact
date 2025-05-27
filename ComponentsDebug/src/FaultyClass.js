import React, { Component } from "react";

class FaultyClass extends Component {
  componentDidMount() {
    this.interval = setInterval(() => {
      console.log("Licznik działa w klasie");
    }, 1000);
  }

  // Błąd: zapomniano o czyszczeniu efektu ubocznego
  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  render() {
    return (
      <div>
        <p>Click the button to test the class component.</p>
      </div>
    );
  }
}

export default FaultyClass;
