import spaghetti from ".//images/danijela-prijovic-qits91IZv1o-unsplash.jpg";
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

function DetailedItem() {
  return (
    <div className="DetailedItem">
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
            <h1 style={{ fontSize: 50, fontWeight: "bold" }}>
              Spaghetti Portofino
            </h1>
            <Image
              src={spaghetti}
              rounded
              style={{ width: "480px", height: "400px" }}
            />
            <p class="text-left" style={{ fontSize: "25px" }}>
              Lemon butter sauce, roasted gem tomatoes, corn, fennel chili
              crumb, garlic crostini
            </p>
            <p class="text-left" style={{ fontSize: "22px" }}>
              Customer rating:
              <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
              ></link>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
            </p>
            <p class="text-left" style={{ fontSize: "22px" }}>
              Price: $28
            </p>
            <p class="text-left" style={{ fontSize: "22px" }}>
              Tags: <u>vegetarian</u> <u>pasta</u>
            </p>
          </Col>
          <Col md={6}>
            <h1 style={{ fontSize: 50, fontWeight: "bold" }}>
              Customize Order
            </h1>
            <p class="text-left">
              {" "}
              <br></br>
              <h3 style={{ fontSize: 40 }}>Add protein</h3>
            </p>
            <Form style={{ fontSize: "26px" }}>
              {["checkbox"].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check
                    type={type}
                    id={`shrimp-${type}`}
                    label={`Shrimp $4`}
                  />
                  <Form.Check
                    type={type}
                    id={`chicken-${type}`}
                    label={`Chicken $4`}
                  />
                  <Form.Check
                    type={type}
                    id={`sausage-${type}`}
                    label={`Sausage $4`}
                  />
                </div>
              ))}
            </Form>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>
                  <br></br>
                  <h3 style={{ fontSize: 40 }}>Customization notes</h3>
                </Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
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
            Add To Order
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
