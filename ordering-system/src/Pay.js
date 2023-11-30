import "./App.css";
import portofino from "./images/portofino.jpg";
import burger from "./images/impossibleburger.jpg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Navbar from "./Navbar";
import StarRating from "./StarRating"; // Import the StarRating component

function Pay() {
  // Sample rating values for the items
  const spaghettiRating = 4;
  const burgerRating = 3;

  // Calculate the total price of items
  const totalPrice = 28 + 2 * 19;

  return (
    <div className="Cart">
      <br />
      <div
        style={{
          backgroundColor: "#414042",
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        <Navbar />
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
        <tr>
          <td>
            <Image
              src={portofino}
              rounded
              style={{ width: "240px", height: "200px" }}
            />
            <p>Spaghetti Portofino</p>
          </td>
          <td>
            <p
              style={{
                textAlign: "center",
                fontSize: "25px",
                fontWeight: "light",
              }}
            >
              $28
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
              1
            </p>
          </td>
          <td>
            <div>
              <StarRating rating={spaghettiRating} />{" "}
              {/* Add the rating value as needed */}
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <Image
              src={burger}
              rounded
              style={{ width: "240px", height: "200px" }}
            />
            <p>burger</p>
          </td>
          <td>
            <p
              style={{
                textAlign: "center",
                fontSize: "25px",
                fontWeight: "light",
              }}
            >
              $19
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
              2
            </p>
          </td>
          <td>
            <div>
              <StarRating rating={burgerRating} />{" "}
              {/* Add the rating value as needed */}
            </div>
          </td>
        </tr>
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
