import React, { useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import ReturnToMenuNavbar from "./ReturnToMenuNavbar";
import StarRating from "./StarRating";
import { useSelector } from "react-redux";
import PaymentConfirmation from "./PaymentConfirmation";

function Pay() {
  const spaghettiRating = 4;

  const payCart = useSelector((state) => state.cart.cartItems);
  const costs = useSelector((state) => state.cart);
  const orderedItems = payCart.filter((item) => item.status === "Ordered");

  const [showMessage, setShowMessage] = useState(false);

  const handleMakePayment = () => {
    setShowMessage(true);
  };

  const handleCloseMessage = () => {
    setShowMessage(false);
  };

  return (
    <div className="Cart">
      <div
        style={{
          backgroundColor: "#414042",
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        <ReturnToMenuNavbar />
      </div>
      <br />
      <table style={{ marginLeft: "auto", marginRight: "auto" }}>
        <tr style={{ fontSize: "25px" }}>
          <td>
            <h1>
              <b>Items</b>
            </h1>
          </td>
          <td>
            <h1>
              <b>Notes</b>
            </h1>
          </td>
          <td>
            <h1>
              <b>Price</b>
            </h1>
          </td>
          <td>
            <h1>
              <b>Quantity</b>
            </h1>
          </td>
          <td>
            <h1>
              <b>Review</b>
            </h1>
          </td>
        </tr>
        {orderedItems.map((item) => (
          <tr key={item.name}>
            <td>
              <Image
                src={require("./images/" + item.image + ".jpg")}
                rounded
                style={{ width: "240px", height: "200px" }}
              />
              <p
                style={{
                  textAlign: "center",
                  fontSize: "25px",
                  fontWeight: "light",
                }}
              >
                {item.name}
              </p>
            </td>
            <td>
              <p>{item.note}</p>
            </td>
            <td>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "25px",
                  fontWeight: "light",
                }}
              >
                {item.price}
              </p>
            </td>
            <td>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "25px",
                  fontWeight: "light",
                }}
              >
                {item.quantity}
              </p>
            </td>
            <td>
              <div>
                <StarRating rating={spaghettiRating} />
              </div>
            </td>
          </tr>
        ))}
      </table>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <p style={{ fontSize: "35px", fontWeight: "bold" }}>
          Total: ${costs.totalCost}
        </p>
      </div>
      <div className="d-flex justify-content-center">
        {orderedItems.length > 0 ? (
          <>
            <Button
              variant="dark"
              size="lg"
              style={{
                padding: "0px",
                marginLeft: "3%",
                backgroundColor: "#414042",
                border: "1px solid #c69a50",
                borderRadius: 0,
                width: "30%",
                height: "80px",
                fontSize: "30px",
              }}
              onClick={handleMakePayment}
            >
              <span
                style={{
                  fontSize: "35px",
                  margin: "0 10px",
                  verticalAlign: "middle",
                }}
              >
                Make Payment
              </span>
            </Button>
            <PaymentConfirmation
              show={showMessage}
              handleClose={handleCloseMessage}
              message="The server will take payment at your table shortly"
            />
          </>
        ) : (
          <h1
            style={{
              fontSize: 30,
              textAlign: "center",
              marginTop: "10%",
              color: "red",
            }}
          >
            No orders have been placed yet!
          </h1>
        )}
      </div>
    </div>
  );
}

export default Pay;
