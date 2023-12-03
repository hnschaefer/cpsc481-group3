import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import ReturnToMenuNavbar from "./ReturnToMenuNavbar";
import StarRating from "./StarRating";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Pay() {
  // Sample rating values for the items
  const spaghettiRating = 4;

  // Calculate the total price of items
  let totalPrice = 0;

  const payCart = useSelector((state) => state.cart.cartItems);
  const orderedItems = payCart.filter((item) => item.status === "Ordered");
  console.log(orderedItems);

  // const calcCost = () => {
  //   totalPrice = orderedItems.reduce((accumulator, item) => {
  //     const itemCost = item.price * item.quantity;
  //     return accumulator + itemCost;
  //   }, 0);
  // };

  // useEffect(() => {
  //   calcCost();
  // }, []);

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
        <tr>
          <td>
            <h1>
              <b>Items</b>
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
          <tr>
            <td>
              <Image
                src={require("./images/" + item.image + ".jpg")}
                rounded
                style={{ width: "240px", height: "200px" }}
              />
              <p>{item.name}</p>
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
                <StarRating rating={spaghettiRating} />{" "}
              </div>
            </td>
          </tr>
        ))}
      </table>
      <div class="d-flex justify-content-center">
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <p style={{ fontSize: "25px", fontWeight: "bold" }}>
            Total: ${totalPrice}
          </p>
        </div>
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
          Make Payment{" "}
        </Button>{" "}
      </div>
    </div>
  );
}

export default Pay;
