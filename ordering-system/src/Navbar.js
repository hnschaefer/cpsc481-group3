import Button from "react-bootstrap/Button";
import cart from ".//icons/icons/cart-fill.svg";
import person from ".//icons/icons/person-fill.svg";
import cash from ".//icons/icons/cash-coin.svg";
import Image from "react-bootstrap/Image";
const Navbar = () => {
  return (
    <div style={{ width: "100%" }}>
      <Button variant="dark" size="lg" style={{ marginLeft: "12%" }}>
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
      <Button variant="dark" size="lg" style={{ marginLeft: "22%" }}>
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
      <Button variant="dark" size="lg" style={{ marginLeft: "20%" }}>
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
