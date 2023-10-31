import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import data from "../Data/mains.json";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
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
              <Card.Body style={{ background: "#000000", color: "#ffffff" }}>
                <Card.Title style={{ fontSize: 20 }}>{menu.item}</Card.Title>
                <Card.Text>
                  {menu.price}{" "}
                  <AddCircleOutlineIcon
                    style={{
                      width: "40px",
                      height: "40px",
                      display: "inline-block",
                      marginLeft: 180,
                      marginTop: 10,
                      color: "#c69a50",
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
