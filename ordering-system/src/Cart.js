import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Cart.css";
import remove from ".//icons/icons/cart-x-fill.svg";
import edit from ".//icons/icons/pencil-square.svg";
import send from ".//icons/icons/send.svg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import ReturnToMenuNavbar from "./ReturnToMenuNavbar";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "./state/actionimp";
import { bindActionCreators } from "redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const cartState = useSelector((state) => state.cart.cartItems);
  const orderedItems = cartState.filter((item) => item.status === "Incomplete");
  const navigate = useNavigate();
  // const [contents, setContents] = useState(state.cart.cartItems);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [temp, setTemp] = useState("");
  const dispatch = useDispatch();
  const { lowerCart, higherCart, updateNote, removeCart, upstat } =
    bindActionCreators(actionCreators, dispatch);

  const lowerQuant = (item) => {
    lowerCart(item);
  };

  const higherQuant = (item) => {
    const name = item;
    higherCart(name);
    console.log(cartState);
  };

  const handleEditClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const tempRefresh = (item) => {
    setTemp(item);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const removalOfItem = (item) => {
    const name = item;
    removeCart(name);
    // setContents(state.cart.cartItems);
  };

  const handleSaveNote = () => {
    const note = { name: selectedItem.name, note: selectedItem.note };
    updateNote(note);
    setShowModal(false);
  };

  const processOrder = (cartState) => {
    upstat(cartState);
    navigate("/ThankYou");
  };

  useEffect(() => {
    //console.log(cartState);
    setTemp("");
  }, [cartState, temp]);

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
        {orderedItems.map((item) => (
          <tr key={item.name}>
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
                    border: "2px solid black",
                  }}
                  onClick={() => {
                    tempRefresh(item);
                    lowerQuant(item);
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
                  style={{
                    marginRight: "10px",
                    width: "60px",
                    height: "80px",
                    border: "2px solid black",
                  }}
                  onClick={() => {
                    tempRefresh(item);
                    higherQuant(item);
                  }}
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
                onClick={() => handleEditClick(item)}
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
                onClick={() => removalOfItem(item.name)}
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

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            as="textarea"
            rows={3}
            value={selectedItem?.note}
            onChange={(e) => {
              setSelectedItem((prev) => ({ ...prev, note: e.target.value }));
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            size="lg"
            style={{ backgroundColor: "#bb2d3b" }}
            onClick={handleModalClose}
          >
            Close
          </Button>
          <Button
            variant="dark"
            size="lg"
            style={{ backgroundColor: "#414042" }}
            onClick={() => handleSaveNote(selectedItem)}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <div class="d-flex justify-content-center">
        {orderedItems.length > 0 ? (
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
            onClick={() => processOrder(cartState)}
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
          </Button>
        ) : (
          <h1
            style={{
              fontSize: 30,
              textAlign: "center",
              marginTop: "15%",
              color: "red",
            }}
          >
            Please add an item to the cart first to send in your order.
          </h1>
        )}
      </div>
    </div>
  );
}

export default Cart;
