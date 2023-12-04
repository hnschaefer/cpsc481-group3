import React from "react";
import Modal from "react-bootstrap/Modal";
import "./PaymentConfirmation.css";

function PaymentConfirmation({ show, handleClose, message }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Message</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <button
          className="ok-payment-confirmation-button"
          onClick={handleClose}
        >
          OK
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default PaymentConfirmation;
