import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import "./OrderAlert.css";

function OrderAlert({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title className="disclaimer">Order Alert Disclaimer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="text">This item is unavailable.</p>
        <p className="texttwo">We are sorry for any inconvenience. 😞</p>
      </Modal.Body>
      <Modal.Footer>
        <button className="close-btn" onClick={handleClose}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default OrderAlert;
