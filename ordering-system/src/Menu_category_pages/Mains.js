import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import data from "../Data/mains.json";
import plus from "../icons/icons/plus-circle-fill.svg";
import Image from "react-bootstrap/Image";
// import truffle from "../images/Truffle.jpg";
const Mains = () => {
  return (
    <div
      style={{ marginLeft: 110, marginTop: 50 }}
      className="overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
    >
      <Row xs={2} md={4} className="g-4">
        {data.map((menu) => (
          <Col key={menu.id}>
            <Card style={{ width: "300px" }}>
              <Card.Img
                variant="top"
                src={require("../images/" + menu.image + ".jpg")}
                style={{ width: "300px", height: "230px" }}
              />
              <Card.Body>
                <Card.Title style={{ fontSize: 20 }}>{menu.item}</Card.Title>
                <Card.Text>
                  {menu.price}{" "}
                  <Image
                    src={plus}
                    rounded
                    style={{
                      width: "30px",
                      height: "30px",
                      display: "inline-block",
                      marginLeft: 190,
                      marginTop: 10,
                    }}
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Mains;
