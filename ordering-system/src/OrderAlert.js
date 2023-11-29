import "./OrderAlert.css";
import Navbar from "./Navbar"; // Import the Navbar component

function OrderAlert({ item, onClose }) {
  return (
    <div className="order-alert">
      <Navbar /> {/* Include the Navbar component here */}
      <div className="spacer"></div>
      <div className="order-alert-content">
        <div className="border-box">
          <div className="disclaimer">
            <p className="red-text">Order Alert Disclaimer</p>
          </div>
          <div className="box">
            <p>The item "{item}" is unavailable</p>
          </div>
          <div className="box">
            <p>Click here to make a new selection</p>
          </div>
          <div className="box">
            <p>We are sorry for any inconvenience 😞</p>
            {/* Use the HTML entity &#128532; for a sad face */}
          </div>
          <button onClick={onClose} className="close-button">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderAlert;
