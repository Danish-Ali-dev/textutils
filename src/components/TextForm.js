import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpperClick = () => {
    console.log("Upper Case Button Clicked " + text);
    let upperText = text.toUpperCase();
    setText(upperText);
    if (text.length > 0) {
      props.showAlert("Converted to Upper Case", "Success", "success");
    } else {
      props.showAlert(
        "Enter something in the textbox above to Upper Case",
        "Error",
        "danger"
      );
    }
  };

  const handleLowerClick = () => {
    console.log("Upper Case Button Clicked " + text);
    let lowerText = text.toLowerCase();
    setText(lowerText);
    if (text.length > 0) {
      props.showAlert("Converted to Lower Case", "Success", "success");
    } else {
      props.showAlert(
        "Enter something in the textbox above to Lower Case",
        "Error",
        "danger"
      );
    }
  };

  const clearText = () => {
    let newText = "";
    setText(newText);
    if (text.length > 0) {
      props.showAlert("Cleared Text", "Success", "success");
    } else {
      props.showAlert(
        "Enter something in the textbox above to Clear Text",
        "Error",
        "danger"
      );
    }
  };

  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    if (text.length > 0) {
      props.showAlert("Extra spaces removed", "Success", "success");
    } else {
      props.showAlert(
        "Enter something in the textbox above to Remove extra spaces",
        "Error",
        "danger"
      );
    }
  };

  const copyText = () => {
    navigator.clipboard.writeText(text);
    if (text.length > 0) {
      props.showAlert("Copy to Clipboard", "Success", "success");
    } else {
      props.showAlert(
        "Enter something in the textbox above to Copy Text",
        "Error",
        "danger"
      );
    }
  };

  const [text, setText] = useState("");
  return (
    <div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <textarea
          style={{
            backgroundColor: props.mode === "dark" ? "#042743" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          className="form-control"
          onChange={handleOnChange}
          id="myBox"
          value={text}
          rows="8"
        ></textarea>
        <div className="my-2">
          <button
            className="btn btn-primary mx-1"
            onClick={handleUpperClick}
            disabled={text.length === 0}
          >
            Convert to UpperCase
          </button>
          <button
            className="btn btn-primary mx-1"
            onClick={handleLowerClick}
            disabled={text.length === 0}
          >
            Convert to LowerCase
          </button>
          <button
            className="btn btn-primary mx-1"
            onClick={clearText}
            disabled={text.length === 0}
          >
            Clear Text
          </button>
          <button
            className="btn btn-primary mx-1"
            onClick={removeExtraSpaces}
            disabled={text.length === 0}
          >
            Remove Extra Spaces
          </button>
          <button
            className="btn btn-primary mx-1"
            onClick={copyText}
            disabled={text.length === 0}
          >
            Copy Text
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <h6>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          {""} words and {text.length} {""} characters
        </h6>
        <h6>
          You can read this data in{" "}
          {0.005 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          {""} Minutes
        </h6>
        <h2 className="my-3">Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to Preview!"}</p>
      </div>
    </div>
  );
}
