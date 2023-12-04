import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import cart from ".//icons/icons/cart-fill.svg";
import person from ".//icons/icons/person-fill.svg";
import cash from ".//icons/icons/cash-coin.svg";
import { useNavigate } from "react-router-dom";
import CallForServer from "./CallForServer";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "./state/actionimp";
import { bindActionCreators } from "redux";

const Navbar = () => {
  const navigate = useNavigate();
  const cartState = useSelector((state) => state.cart);
  const [serverCall, setServerCall] = useState(false);
  const dispatch = useDispatch();
  const { cartPriceUpdate } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    if (serverCall) {
      setTimeout(() => {
        setServerCall(false);
      }, 30000);
    }
  }, [serverCall]);

  function navbarButtonPress(value) {
    if (value === "cart") {
      console.log(cartState.cartTotalCost);
      cartPriceUpdate(cartState);

      navigate("/Cart");
    } else if (value === "pay") {
      navigate("/Pay");
    } else if (value === "call") {
      setServerCall(true);
    }
  }

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Button
        variant="dark"
        size="lg"
        style={{
          paddingLeft: 100,
          paddingRight: 100,
          marginLeft: 20,
          paddingBottom: 20,
          paddingTop: 20,
          backgroundColor: "#414042",
          border: "1px solid #c69a50",
          borderRadius: 0,
          fontSize: 35,
        }}
        onClick={() => navbarButtonPress("cart")}
      >
        Order Cart
        <Image
          src={cart}
          rounded
          style={{
            width: "40px",
            height: "40px",
            filter: "invert(100%)",
            display: "inline-block",
            marginLeft: 20,
          }}
        />
      </Button>{" "}
      <Button
        variant="dark"
        size="lg"
        style={{
          paddingLeft: 100,
          paddingRight: 100,
          paddingBottom: 20,
          paddingTop: 20,
          backgroundColor: "#414042",
          border: "1px solid #c69a50",
          borderRadius: 0,
          fontSize: 35,
        }}
        onClick={() => navbarButtonPress("call")}
      >
        Call For Server{" "}
        <Image
          src={person}
          rounded
          style={{
            width: "40px",
            height: "40px",
            filter: "invert(100%)",
            display: "inline-block",
            marginLeft: 20,
          }}
        />
      </Button>{" "}
      {serverCall && <CallForServer />}
      <Button
        variant="dark"
        size="lg"
        style={{
          paddingLeft: 100,
          paddingRight: 100,
          paddingBottom: 20,
          paddingTop: 20,
          marginRight: 20,
          backgroundColor: "#414042",
          border: "1px solid #c69a50",
          borderRadius: 0,
          fontSize: 35,
        }}
        onClick={() => navbarButtonPress("pay")}
      >
        Pay For Order{" "}
        <Image
          src={cash}
          rounded
          style={{
            width: "40px",
            height: "40px",
            filter: "invert(100%)",
            display: "inline-block",
            marginLeft: 20,
          }}
        />
      </Button>{" "}
    </div>
  );
};

export default Navbar;
