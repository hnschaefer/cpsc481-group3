import "./Cart.css";
import spaghetti from ".//images/danijela-prijovic-qits91IZv1o-unsplash.jpg";
import food from ".//images/chickenwings.jpg";
import remove from ".//icons/icons/x-lg.svg";
import edit from ".//icons/icons/pencil-square.svg";
import send from ".//icons/icons/send.svg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Navbar from "./Navbar";

function Cart() {
  return (
    <div className="Cart">
      <div
        style={{
          backgroundColor: "#414042",
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        <Navbar />
      </div>
      <br></br>
      <table style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
        <tr>
          <td>
            <h1 style={{ fontSize: 50, fontWeight: "bold" }}>Items</h1>
          </td>
          <td>
            <h1 style={{ fontSize: 50, fontWeight: "bold" }}>Quantity</h1>
          </td>
          <td>
            <h1 style={{ fontSize: 50, fontWeight: "bold" }}>Modify</h1>
          </td>
        </tr>
        <tr>
          <td>
            <Image
              src={spaghetti}
              rounded
              style={{ marginLeft: "auto", marginRight: "auto", width: "240px", height: "200px" }}
            />
            <p style={{ fontSize: "35px" }}>Spaghetti Portofino $28</p>
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
                  verticalAlign: "middle",
                  justifyContent: "center",
                  alignItems: "center",
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
                1
              </span>
              <Button
                variant="light"
                size="lg"
                style={{ marginRight: "10px", width: "60px", height: "80px" }}
              >
                <p
                  style={{
                    fontSize: "40px",
                    marginBottom: "20px",
                    verticalAlign: "middle",
                  }}
                >
                  +
                </p>
              </Button>
            </p>
          </td>
          <td>
            <Button
              variant="dark"
              size="lg"
              style={{
                backgroundColor: "#414042",
                marginRight: "10px",
                marginLeft: "35px",
                fontSize: 35,
                verticalAlign: "middle",
              }}
            > Edit
              <Image
                src={edit}
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
            <Button
              variant="dark"
              size="lg"
              style={{
                backgroundColor: "#414042",
                marginRight: "10px",
                marginLeft: "35px",
                fontSize: 35,
                verticalAlign: "middle",
              }}
            > Remove
              <Image
                src={remove}
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
          </td>
        </tr>
        <tr>
          <td>
            <Image
              src={food}
              rounded
              style={{ marginLeft: "auto", marginRight: "auto", width: "240px", height: "200px" }}
            />
            <p style={{ fontSize: "35px" }}>Chicken Wings $19</p>
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
                2
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
            <Button
                variant="dark"
                size="lg"
                style={{
                  backgroundColor: "#414042",
                  marginRight: "10px",
                  marginLeft: "35px",
                  fontSize: 35,
                  verticalAlign: "middle",
                }}
              > Edit
                <Image
                  src={edit}
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
              <Button
              variant="dark"
              size="lg"
              style={{
                backgroundColor: "#414042",
                marginRight: "10px",
                marginLeft: "35px",
                fontSize: 35,
                verticalAlign: "middle",
              }}
            > Remove
              <Image
                src={remove}
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
          </td>
        </tr>
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
