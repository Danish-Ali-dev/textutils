import React, { useState } from "react";
import { Card } from "react-bootstrap";

function AboutUs() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [btnText, setBtnText] = useState("Enable Dark Mode");

  let toggleStyle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border: "2px solid white",
      });
      setBtnText("Enable Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
    }
  };
  return (
    <div>
      <Card style={myStyle}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title> Card Title </Card.Title>{" "}
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card 's content. Lorem ipsum dolor sit amet consectetur
            adipisicing elit.Officia totam commodi, cupiditate optio, laboriosam
            eaque id voluptates necessitatibus maiores expedita nam est iure
            fugit velit saepe ea assumenda perspiciatitogs ? Error reprehenderit
            quia vero eum.{" "}
          </Card.Text>{" "}
        </Card.Body>{" "}
      </Card>{" "}
      <button onClick={toggleStyle} className="btn btn-primary my-2">
        {" "}
        {btnText}{" "}
      </button>{" "}
    </div>
  );
}

export default AboutUs;
