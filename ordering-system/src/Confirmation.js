import React from "react";
import Modal from "react-bootstrap/Modal";
import "./Confirmation.css";

function Confirmation({ show, handleClose, message }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Message</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <button
          className="ok-confirmation-button"
          onClick={handleClose}
        >
          OK
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default Confirmation;
