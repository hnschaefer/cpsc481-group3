import React, { useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import ReturnToMenuNavbar from "./ReturnToMenuNavbar";
import { useSelector } from "react-redux";
import Confirmation from "./Confirmation";
import { FaStar } from "react-icons/fa";

function Pay() {
  const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9",
  };

  const [itemRatings, setItemRatings] = useState({});

  const handleClick = (itemName, value) => {
    setItemRatings({
      ...itemRatings,
      [itemName]: value,
    });
  };

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
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000
        }}
      >
        <ReturnToMenuNavbar />
      </div>
      <div
        style={{
          paddingTop: 140
        }}
      />
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
              <b>Quantity</b>
            </h1>
          </td>
          <td>
            <h1>
              <b>Price</b>
            </h1>
          </td>
          <td>
            <h1>
              <b>Rate</b>
            </h1>
          </td>
        </tr>
        {orderedItems.map((item) => (
          <tr key={item.name}>
            <td>
              <Image
                src={require("./images/" + item.image + ".jpg")}
                rounded
                style={{ width: "240px", height: "200px", objectFit: "cover" }}
              />
              <p
                style={{
                  textAlign: "center",
                  fontSize: "25px",
                  fontWeight: "light",
                }}
              >
                {item.name + `: $` + item.price}
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
                {item.quantity}
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
                {'$' + item.price*item.quantity}
              </p>
            </td>
            <td>
              <div>
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    color={
                      itemRatings[item.name] > index
                        ? colors.orange
                        : colors.grey
                    }
                    style={{ height: 40, width: 30 }}
                    onClick={() => handleClick(item.name, index + 1)}
                  />
                ))}
              </div>{" "}
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
            <Confirmation
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
