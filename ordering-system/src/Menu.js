import Button from "react-bootstrap/Button";
import cart from ".//icons/icons/cart-fill.svg";
import person from ".//icons/icons/person-fill.svg";
import cash from ".//icons/icons/cash-coin.svg";
import Image from "react-bootstrap/Image";
import "./Menu.css";
import data from "./menudata.json";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useState } from "react";
import Features from "./Menu_category_pages/Features.js";

function Menu() {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 700;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 700;
  };

  const [pageStatus, setPageStatus] = useState("Features");

  return (
    <div style={{ background: "#fdf0db" }}>
      <div>
        <Button
          variant="dark"
          size="lg"
          style={{
            paddingBottom: 60,
            paddingTop: 60,
            paddingLeft: 80,
            paddingRight: 80,
            marginLeft: 130,
            marginTop: 20,
            fontSize: 40,
          }}
        >
          Order Cart
          <Image
            src={cart}
            rounded
            style={{
              width: "40px",
              height: "40px",
              filter: "invert(100%)",
              display: "inline-block",
              marginLeft: 20,
            }}
          />
        </Button>{" "}
        <Button
          variant="dark"
          size="lg"
          style={{
            paddingBottom: 60,
            paddingTop: 60,
            paddingLeft: 60,
            paddingRight: 60,
            marginLeft: 200,
            marginTop: 20,
            fontSize: 40,
          }}
        >
          Call For Server{" "}
          <Image
            src={person}
            rounded
            style={{
              width: "40px",
              height: "40px",
              filter: "invert(100%)",
              display: "inline-block",
              marginLeft: 20,
            }}
          />
        </Button>{" "}
        <Button
          variant="dark"
          size="lg"
          style={{
            paddingBottom: 60,
            paddingTop: 60,
            paddingLeft: 60,
            paddingRight: 60,
            fontSize: 40,
            marginTop: 20,
            marginLeft: 200,
          }}
        >
          Pay For Order{" "}
          <Image
            src={cash}
            rounded
            style={{
              width: "40px",
              height: "40px",
              filter: "invert(100%)",
              display: "inline-block",
              marginLeft: 20,
            }}
          />
        </Button>{" "}
      </div>
      <div
        style={{
          fontSize: 55,
          textAlign: "center",
          marginTop: 60,
          marginBottom: 30,
        }}
      >
        Menu
      </div>
      <div className="relative flex items-center">
        <MdChevronLeft onClick={slideLeft} size={40} />
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {data.map((menu) => (
            <button
              style={{
                marginLeft: 30,
                display: "inline-block",
                fontSize: 40,
                paddingRight: 150,
              }}
              key={menu.id}
              onClick={() => {
                setPageStatus(menu.item);
              }}
            >
              {menu.item}
            </button>
          ))}
        </div>
        <MdChevronRight onClick={slideRight} size={40} />
      </div>
      <h1 style={{ fontSize: 50, fontWeight: "bold", marginLeft: 50 }}>
        {pageStatus}
      </h1>
      {pageStatus === "Features" && <Features />}
    </div>
  );
}

export default Menu;
