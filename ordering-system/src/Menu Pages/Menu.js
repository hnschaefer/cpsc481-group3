import "./Menu.css";
import data from "../Data/menudata.json";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useState } from "react";
import Features from "./ItemDisplay.js";
import Navbar from "../Navbar";

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
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          backgroundColor: "#414042",
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        <Navbar />
      </div>
      <div style={{ background: "#f7c97c" }}>
        <div
          style={{
            fontSize: 55,
            textAlign: "center",
            paddingTop: 40,
            paddingBottom: 40,
            fontWeight: "bold",
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
      </div>
      <h1
        style={{
          fontSize: 50,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {pageStatus}
      </h1>
      <div>
        <Features status={pageStatus} />
      </div>
    </div>
  );
}

export default Menu;
