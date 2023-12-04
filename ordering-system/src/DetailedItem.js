// DetailedItem.jsx

import React, { useState } from "react";
import "./DetailedItem.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import cartplus from ".//icons/icons/cart-plus-fill.svg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import ReturnToMenuNavbar from "./ReturnToMenuNavbar";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/actionimp";
import { useNavigate } from "react-router-dom";

function DetailedItem() {
  const location = useLocation();
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [note, setNote] = useState("");
  const customize = [
    "Substitute Salmon - $4",
    "Substitute Chicken - $4",
    "Substitute Prawns - $4",
  ];
  const { name, price, image, desc, tags } = location.state || {};

  const cartdetails = {
    name: name,
    quantity: count,
    itemPrice: price,
    note: note,
    image: image,
    extraProtein: "",
    status: "Incomplete",
  };

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { addToCart } = bindActionCreators(actionCreators, dispatch);

  const isProteinOptionsAvailable = [
    "Raincoast Greens",
    "Avocado Kale Salad",
    "Thai Green Curry",
    "Chargrilled Steak",
    "The Med Bowl",
  ].includes(name);

  const proteinAvailable = [
    "Raincoast Greens",
    "Avocado Kale Salad",
    "Thai Green Curry",
    "Chargrilled Steak",
    "The Med Bowl",
  ].includes(name);

  const [selectedProtein, setSelectedProtein] = useState("");

  const handleProteinChange = (event) => {
    setSelectedProtein(event.target.checked ? event.target.id : "");
  };

  const handleIncrement = () => {
    if (count < 9) {
      setCount(count + 1);
      cartdetails.quantity = count;
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
      cartdetails.quantity = count;
    }
  };

  const returnToPage = () => {
    cartdetails.extraProtein = selectedProtein;
    addToCart(cartdetails);
    navigate("/Menu");
  };

  const handleNote = (event) => {
    setNote(event.target.value);
  };

  return (
    <div className="DetailedItem">
      {console.log(state.totalCost)}
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
      <Container>
        <Row>
          <Col md={6}>
            <h1 style={{ fontSize: 50, fontWeight: "bold" }}>{name}</h1>
            <Image
              src={require("./images/" + image + ".jpg")}
              rounded
              style={{ width: "480px", height: "400px" }}
            />
            <p className="text-left" style={{ fontSize: "25px" }}>
              {desc}
            </p>
            <p className="text-left" style={{ fontSize: "22px" }}>
              Customer rating:
              <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
              ></link>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
            </p>
            <p className="text-left" style={{ fontSize: "22px" }}>
              Price: ${price}
            </p>
            <p className="text-left" style={{ fontSize: "22px" }}>
              Tags: <u>{tags}</u>
            </p>
          </Col>
          <Col md={6}>
            <>
              {proteinAvailable && (
                <>
                  <h1 style={{ fontSize: 50, fontWeight: "bold" }}>
                    Add protein
                  </h1>
                  <Form style={{ fontSize: "26px" }}>
                    {customize.map((proteinOption, index) => (
                      <Form.Check
                        key={index}
                        type="checkbox"
                        id={`protein-${index}`}
                        label={proteinOption}
                        checked={selectedProtein === `protein-${index}`}
                        onChange={handleProteinChange}
                      />
                    ))}
                  </Form>
                </>
              )}
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>
                    <br></br>
                    <h3 style={{ fontSize: 40 }}>Customization notes</h3>
                  </Form.Label>
                  <Form.Control as="textarea" rows={3} onChange={handleNote} />
                </Form.Group>
              </Form>
              <h1
                style={{
                  marginTop: 40,
                  fontSize: 40,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Quantity
              </h1>
              <div
                style={{
                  marginTop: 40,
                  fontSize: 40,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <button
                  style={{
                    fontSize: 20,
                    border: "3px solid black",
                    height: 40,
                    width: 40,
                  }}
                  onClick={handleDecrement}
                >
                  -
                </button>
                <h1 style={{ margin: "0 20px" }}>{count}</h1>
                <button
                  style={{
                    fontSize: 20,
                    border: "3px solid black",
                    height: 40,
                    width: 40,
                  }}
                  onClick={handleIncrement}
                >
                  +
                </button>
              </div>
            </>
          </Col>
        </Row>
      </Container>
      <div className="d-flex justify-content-center">
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
          onClick={() => returnToPage()}
        >
          <span
            style={{
              fontSize: "35px",
              margin: "0 10px",
              verticalAlign: "middle",
            }}
          >
            Add To Cart
          </span>
          <Image
            src={cartplus}
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

export default DetailedItem;
