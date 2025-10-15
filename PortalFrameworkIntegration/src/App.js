import React, { useState } from "react";
import Modal from "./Modal";
import "./App.css";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <h1>React Portal</h1>
      <button onClick={() => setModalOpen(true)}> Show Modal Window </button>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2> Welcome in Modal! </h2>
        <p> This is content rendered using React Portal. </p>
      </Modal>
    </div>
  );
}

export default App;
