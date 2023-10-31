import Button from "react-bootstrap/Button";
import cart from ".//icons/icons/cart-fill.svg";
import person from ".//icons/icons/person-fill.svg";
import cash from ".//icons/icons/cash-coin.svg";
import Image from "react-bootstrap/Image";
const Navbar = () => {
  return (
    <div style={{ width: "100%" }}>
      <Button
        variant="dark"
        size="lg"
        style={{
          padding: "50px",
          marginLeft: "10%",
          backgroundColor: "#414042",
          border: "1px solid #c69a50",
          borderRadius: 0,
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
          padding: "50px",
          marginLeft: "18%",
          backgroundColor: "#414042",
          border: "1px solid #c69a50",
          borderRadius: 0,
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
          padding: "50px",
          marginLeft: "20%",
          backgroundColor: "#414042",
          border: "1px solid #c69a50",
          borderRadius: 0,
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
  );
};

export default Navbar;