/*PaymentConfirmation.js*/
import React from 'react';
import './PaymentConfirmation.css';

function PaymentConfirmation() {
  return (
    <div className="payment-confirmation-container">
      <div className="confirmation-box">
        <p className="confirmation-text">The server will take payment at your table shortly</p>
        <button className="ok-payment-confirmation-button">OK</button>
      </div>
    </div>
  );
}

export default PaymentConfirmation;
