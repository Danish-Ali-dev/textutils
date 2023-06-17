import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Alert from "./components/Alert";
import AboutUs from "./components/AboutUs";
import TextForm from "./components/TextForm";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type, color) => {
    setAlert({
      msg: message,
      type: type,
      color: color,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1750);
  };

  const [Button, setButton] = useState("Enable Dark Mode");
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      removeBodyClasses();
      document.body.style.backgroundColor = "#042743";
      setButton("Disable Dark Mode");
      showAlert("Dark Mode has been Enabled", "Success", "success");
      // document.title = "Textutils - Dark Mode";
    } else {
      setMode("light");
      removeBodyClasses();
      document.body.style.backgroundColor = "white";
      setButton("Enable Dark Mode");
      showAlert("Dark Mode has been Disabled", "Success", "info");
      // document.title = "Textutils - Light Mode";
    }
  };

  let removeBodyClasses = () => {
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-info");
    document.body.classList.remove("bg-secondary");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-light");
  };

  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  let handleColor = (color) => {
    console.log(color);
    showAlert(`${capitalize(color)} Mode has been Enabled`, "Success", color);
    removeBodyClasses();
    document.body.classList.add("bg-" + color);
  };
  return (
    <div>
      <Router>
        <NavBar
          title="Textutils"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
          Button={Button}
          handleColor={handleColor}
        />{" "}
        <Alert alert={alert} />{" "}
        <div className="container my-3">
          <Switch>
            <Route exact path="/">
              <TextForm
                heading="Enter the text to analyze below"
                mode={mode}
                showAlert={showAlert}
              />{" "}
            </Route>{" "}
            <Route exact path="/about">
              <AboutUs />
            </Route>{" "}
          </Switch>{" "}
        </div>{" "}
      </Router>{" "}
    </div>
  );
}

export default App;
