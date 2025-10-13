import React, { useState } from "react";
import Modal from "./Modal";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Portal - Modal Window Example</h1>
      <button onClick={() => setModalOpen(true)}>Open modal</button>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2>Hello!</h2>
        <p>This is a modal displayed by the portal.</p>
      </Modal>
    </div>
  );
}

export default App;
