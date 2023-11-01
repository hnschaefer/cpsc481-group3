import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import featuredata from "../Data/features.json";
import mainsdata from "../Data/mains.json";
import startandsharedata from "../Data/startandshare.json";
import bowlsdata from "../Data/bowls.json";
import greensdata from "../Data/greens.json";
import sushidata from "../Data/sushi.json";
import burgersdata from "../Data/burgers.json";
import steaksdata from "../Data/steaks.json";
import dessertsdata from "../Data/desserts.json";
import beveragesdata from "../Data/beverages.json";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const Features = (props) => {
  const status = props.status;
  var renderData = "";
  if (status === "Features") {
    renderData = featuredata;
  } else if (status === "Mains") {
    renderData = mainsdata;
  } else if (status === "Start + Share") {
    renderData = startandsharedata;
  } else if (status === "Bowls") {
    renderData = bowlsdata;
  } else if (status === "Greens") {
    renderData = greensdata;
  } else if (status === "Sushi") {
    renderData = sushidata;
  } else if (status === "Burgers") {
    renderData = burgersdata;
  } else if (status === "Steaks") {
    renderData = steaksdata;
  } else if (status === "Desserts") {
    renderData = dessertsdata;
  } else if (status === "Beverages") {
    renderData = beveragesdata;
  }

  return (
    <div className="overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
      <Row xs={2} md={4} className="g-4" style={{ display: "flex" }}>
        {renderData.map((menu) => (
          <Col
            key={menu.id}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card style={{ width: "300px" }}>
              <Card.Img
                variant="top"
                src={require("../images/" + menu.image + ".jpg")}
                style={{ width: "300px", height: "230px" }}
              />
              <Card.Body style={{ background: "#414042", color: "#ffffff" }}>
                <Card.Title style={{ fontSize: 20 }}>{menu.item}</Card.Title>
                <Card.Text>
                  {menu.price}{" "}
                  <AddCircleOutlineIcon
                    style={{
                      width: "30px",
                      height: "30px",
                      display: "inline-block",
                      marginLeft: 190,
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

export default Features;
