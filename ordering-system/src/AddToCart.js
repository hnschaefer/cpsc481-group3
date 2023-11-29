import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const AddToCart = () => {
  const [newAddition, setNewAddition] = useState("false");

  const addNewUser = () => {
    setNewAddition("true");
  };

  const resetState = () => {
    setNewAddition("false");
  };
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header style={{ background: "#414042", color: "white" }}>
          <Modal.Title>Specify the cart for the item.</Modal.Title>{" "}
          {/**Maybe we should ask how many people are dining at the start so that this popup doesnt show if its just one person */}
        </Modal.Header>

        <Modal.Body>
          <div>
            <Button
              style={{ fontSize: 20, background: "#414042" }}
              variant="secondary"
              onClick={resetState}
            >
              Add to the default cart.
            </Button>
          </div>
          <div>
            <Button
              style={{ fontSize: 20, marginTop: 30, background: "#414042" }}
              variant="secondary"
              onClick={addNewUser}
            >
              Create an additional cart for another customer.
            </Button>
          </div>
          *This is intended for those who wish to split the bill.
          {newAddition === "true" && (
            <div style={{ paddingTop: 20 }}>
              <div>Please enter the new cart name:</div>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Enter here"
                  aria-label="Enter here"
                  aria-describedby="basic-addon2"
                />
                <Button
                  variant="outline-secondary"
                  id="button-addon2"
                  style={{ background: "#414042", color: "white" }}
                >
                  Add
                </Button>
              </InputGroup>
            </div>
          )}
        </Modal.Body>

        <Modal.Footer style={{ background: "#414042" }}>
          <Button variant="secondary">Go Back</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default AddToCart;