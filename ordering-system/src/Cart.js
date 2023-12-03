import "./Cart.css";
import remove from ".//icons/icons/cart-x-fill.svg";
import edit from ".//icons/icons/pencil-square.svg";
import send from ".//icons/icons/send.svg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import ReturnToMenuNavbar from "./ReturnToMenuNavbar";
import { useSelector } from "react-redux";
import { useState } from "react";

function Cart() {
  const state = useSelector((state) => state);
  const [contents, setContents] = useState(state.cart.cartItems);
  console.log(contents);
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
      <br></br>
      <table style={{ marginLeft: "auto", marginRight: "auto" }}>
        <tr>
          <td>
            <h1 style={{ fontSize: 50, fontWeight: "bold" }}>Items</h1>
          </td>
          <td>
            <h1 style={{ fontSize: 50, fontWeight: "bold" }}>Quantity</h1>
          </td>
          <td>
            <h1 style={{ fontSize: 50, fontWeight: "bold" }}>Notes</h1>
          </td>
          <td>
            <h1 style={{ fontSize: 50, fontWeight: "bold" }}>Edit/Remove</h1>
          </td>
        </tr>
        {/* {state.cart.cartItems.map((item) => {
          <CartList item={item} />;
        })} */}
        {contents.map((item) => (
          <tr>
            <td style={{ paddingTop: 50 }}>
              <Image
                src={require("./images/" + item.image + ".jpg")}
                rounded
                style={{ width: "300px", height: "230px" }}
              />
              <p style={{ fontSize: "35px" }}>
                {item.name + `: $` + item.price}
              </p>
            </td>
            <td>
              <p>
                <Button
                  variant="light"
                  size="lg"
                  style={{
                    width: "60px",
                    height: "80px",
                    margin: "0 10px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ fontSize: "40px" }}>-</span>
                </Button>
                <span
                  style={{
                    fontSize: "40px",
                    margin: "0 10px",
                    verticalAlign: "middle",
                  }}
                >
                  {item.quantity}
                </span>
                <Button
                  variant="light"
                  size="lg"
                  style={{ marginRight: "10px", width: "60px", height: "80px" }}
                >
                  <span style={{ fontSize: "40px" }}>+</span>
                </Button>
              </p>
            </td>
            <td>
              <span style={{ fontSize: 20 }}>{item.note}</span>
            </td>
            <td>
              <Button
                variant="dark"
                size="lg"
                style={{
                  backgroundColor: "#414042",
                  marginRight: "10px",
                  marginLeft: "35px",
                }}
              >
                <Image
                  src={edit}
                  rounded
                  style={{
                    width: "60px",
                    height: "60px",
                    filter: "invert(100%)",
                  }}
                />
              </Button>
              <Button
                variant="dark"
                size="lg"
                style={{ backgroundColor: "#414042" }}
              >
                <Image
                  src={remove}
                  rounded
                  style={{
                    width: "60px",
                    height: "60px",
                    filter: "invert(100%)",
                  }}
                />
              </Button>
            </td>
          </tr>
        ))}
      </table>
      <div class="d-flex justify-content-center">
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
        >
          <span
            style={{
              fontSize: "35px",
              margin: "0 10px",
              verticalAlign: "middle",
            }}
          >
            Place Order
          </span>
          <Image
            src={send}
            rounded
            style={{
              width: "30px",
              height: "40px",
              filter: "invert(100%)",
              display: "inline-block",
              marginLeft: 20,
            }}
          />
        </Button>{" "}
      </div>
    </div>
  );
}

export default Cart;
