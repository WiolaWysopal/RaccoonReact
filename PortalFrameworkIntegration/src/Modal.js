import React from "react";
import ReactDOM from "react-dom";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {children}
        <button className="close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>,
    document.body,
  );
}

export default Modal;
