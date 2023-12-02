// OrderAlert.js
import "./OrderAlert.css";
import ReturnToMenuNavbar from "./ReturnToMenuNavbar";

function OrderAlert() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#414042",
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        <ReturnToMenuNavbar />
      </div>
      <div className="alert-container">
        <h1 className="disclaimer">Order Alert Disclaimer</h1>
        <p className="text">This item is unavailable.</p>
        <p className="texttwo">We are sorry for any inconvenience. 😞</p>
        <p className="textthree">
          You may press the close button below to go back to the order cart or
          select the order cart button above.
        </p>
        <button className="close">Close</button>
      </div>
    </div>
  );
}

export default OrderAlert;
