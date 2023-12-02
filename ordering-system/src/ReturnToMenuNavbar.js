import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import cart from ".//icons/icons/cart-fill.svg";
import person from ".//icons/icons/person-fill.svg";
import cash from ".//icons/icons/cash-coin.svg";
import leftarrow from ".//icons/icons/caret-left-fill.svg";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom";
import CallForServer from "./CallForServer";
const ReturnToMenuNavbar = () => {
  const navigate = useNavigate();
  const [serverCall, setServerCall] = useState(false);

  useEffect(() => {
    if (serverCall) {
      setTimeout(() => {
        setServerCall(false);
      }, 30000);
    }
  }, [serverCall]);

  function navbarButtonPress(value) {
    if (value === "cart") {
      navigate("/Cart");
    } else if (value === "pay") {
      navigate("/Pay");
    } else if (value === "menu") {
      navigate("/Menu");
    } else if (value === "call") {
      setServerCall(true);
    }
  }

  return (
    <div style={{ width: "100%" }}>
      <Button
        variant="dark"
        size="lg"
        style={{
          padding: "0px",
          marginLeft: "3%",
          backgroundColor: "#414042",
          border: "1px solid #c69a50",
          borderRadius: 0,
          width: "21%",
          height: "100px",
          fontSize: "35px",
        }}
        onClick={() => navbarButtonPress("menu")}
      >
        <Image
          src={leftarrow}
          rounded
          style={{
            width: "40px",
            height: "40px",
            filter: "invert(100%)",
            display: "inline-block",
            marginLeft: 20,
          }}
        />
        <span style={{ margin: "0 10px", verticalAlign: "middle" }}>
          Return To Menu
        </span>
      </Button>{" "}
      <Button
        variant="dark"
        size="lg"
        style={{
          padding: "0px",
          marginLeft: "3%",
          backgroundColor: "#414042",
          border: "1px solid #c69a50",
          borderRadius: 0,
          width: "21%",
          height: "100px",
          fontSize: "35px",
        }}
        onClick={() => navbarButtonPress("cart")}
      >
        <span style={{ margin: "0 10px", verticalAlign: "middle" }}>
          Order Cart
        </span>
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
          padding: "0px",
          marginLeft: "3%",
          backgroundColor: "#414042",
          border: "1px solid #c69a50",
          borderRadius: 0,
          width: "21%",
          height: "100px",
          fontSize: "35px",
        }}
        onClick={() => navbarButtonPress("call")}
      >
        <span style={{ margin: "0 10px", verticalAlign: "middle" }}>
          Call For Server
        </span>
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
      </Button>
      {serverCall && <CallForServer />}
      <Button
        variant="dark"
        size="lg"
        style={{
          padding: "0px",
          marginLeft: "3%",
          backgroundColor: "#414042",
          border: "1px solid #c69a50",
          borderRadius: 0,
          width: "21%",
          height: "100px",
          fontSize: "35px",
        }}
        onClick={() => navbarButtonPress("pay")}
      >
        <span style={{ margin: "0 10px", verticalAlign: "middle" }}>
          Pay For Order
        </span>
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

export default ReturnToMenuNavbar;
