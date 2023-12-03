import "./ThankYou.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ReturnToMenuNavbar from "./ReturnToMenuNavbar";
import smile from ".//icons/icons/emoji-smile.svg";
import Image from "react-bootstrap/Image";

function ThankYou() {
  return (
    <div className="ThankYou">
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
      <hr></hr>
      <div class="box">
        <p>
          <span style={{ fontSize: "120px" }}>Thank You!</span>
        </p>
        <p>
          <span style={{ fontSize: "35px" }}>
            Your order is being prepared. If you would like to return to the
            menu, press the return to menu button in the top left.{" "}
          </span>
        </p>
        <br></br>
        <Image
          src={smile}
          rounded
          style={{
            width: "80px",
            height: "80px",
            display: "inline-block",
            marginLeft: 20,
          }}
        />
        <br></br>
      </div>
      <hr></hr>
    </div>
  );
}

export default ThankYou;
