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
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import OrderAlert from "../OrderAlert";
import { useState } from "react";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const Features = (props) => {
  const { status, filter } = props;
  var renderData = "";
  if (status === "Features") {
    renderData = featuredata;
    if (filter) {
      renderData = renderData.filter((item) => item.tags.includes(filter));
    }
  } else if (status === "Mains") {
    renderData = mainsdata;
    if (filter) {
      renderData = renderData.filter((item) => item.tags.includes(filter));
    }
  } else if (status === "Start + Share") {
    renderData = startandsharedata;
    if (filter) {
      renderData = renderData.filter((item) => item.tags.includes(filter));
    }
  } else if (status === "Bowls") {
    renderData = bowlsdata;
    if (filter) {
      renderData = renderData.filter((item) => item.tags.includes(filter));
    }
  } else if (status === "Greens") {
    renderData = greensdata;
    if (filter) {
      renderData = renderData.filter((item) => item.tags.includes(filter));
    }
  } else if (status === "Sushi") {
    renderData = sushidata;
    if (filter) {
      renderData = renderData.filter((item) => item.tags.includes(filter));
    }
  } else if (status === "Burgers") {
    renderData = burgersdata;
    if (filter) {
      renderData = renderData.filter((item) => item.tags.includes(filter));
    }
  } else if (status === "Steaks") {
    renderData = steaksdata;
    if (filter) {
      renderData = renderData.filter((item) => item.tags.includes(filter));
    }
  } else if (status === "Desserts") {
    renderData = dessertsdata;
    if (filter) {
      renderData = renderData.filter((item) => item.tags.includes(filter));
    }
  } else if (status === "Beverages") {
    renderData = beveragesdata;
    if (filter) {
      renderData = renderData.filter((item) => item.tags.includes(filter));
    }
  }

  const navigate = useNavigate();
  const [showOrderAlert, setShowOrderAlert] = useState(false);

  function goToDetailedItem(id, name, price, image, desc, tags) {
    if (name === "Salmon Aburi Roll") {
      setShowOrderAlert(true);
    } else {
      navigate("/DetailedItem", {
        state: { id, name, price, image, desc, tags },
      });
    }
  }
  const state = useSelector((state) => state);

  return (
    <div className="overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide">
      <Row xs={2} md={4} className="g-4" style={{ display: "flex" }}>
        {renderData.map((menu) => (
          <Col
            key={menu.id}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              style={{ width: "300px" }}
              onClick={() =>
                goToDetailedItem(
                  menu.id,
                  menu.item,
                  menu.price,
                  menu.image,
                  menu.desc,
                  menu.tags
                )
              }
            >
              <Card.Img
                variant="top"
                src={require("../images/" + menu.image + ".jpg")}
                style={{ width: "300px", height: "230px" }}
              />
              <Card.Body style={{ background: "#414042", color: "#ffffff" }}>
                <Card.Title style={{ fontSize: 20 }}>{menu.item}</Card.Title>
                <Card.Text
                  style={{
                    whiteSpace: "pre-wrap",
                    maxHeight: "100px",
                    overflow: "hidden",
                  }}
                >
                  {`$` + menu.price} <br></br>
                  {menu.desc}
                </Card.Text>
                <AddCircleOutlineIcon
                  style={{
                    width: "30px",
                    height: "30px",
                    display: "inline-block",
                    marginLeft: "90%",
                    marginTop: 10,
                    color: "#c69a50",
                  }}
                />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <OrderAlert
        show={showOrderAlert}
        handleClose={() => setShowOrderAlert(false)}
      />
    </div>
  );
};

export default Features;
