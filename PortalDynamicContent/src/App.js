import React, { useState } from "react";
import Modal from "./Modal";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const openModalWith = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Portal Dynamic Modal</h1>

      <button onClick={() => openModalWith("This is first message")}>
        Show message 1
      </button>

      <button
        onClick={() => openModalWith("This is second message")}
        style={{ marginLeft: "10px" }}
      >
        Show message 2
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2>Modal Content:</h2>
        <p>{modalContent}</p>
      </Modal>
    </div>
  );
}

export default App;
