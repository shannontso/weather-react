import { directive } from "@babel/types";
import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFah(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div>
        <span className="temperature">{Math.round(props.celsius)}</span>
        <sup className="units">
          °C{" "}
          <a href="#/" className="fah" rel="noreferrer" onClick={showFah}>
            {" "}
            | °F
          </a>
        </sup>
      </div>
    );
  } else {
    return (
      <div>
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <sup className="units">
          <a
            href="#/"
            className="celsius"
            rel="noreferrer"
            onClick={showCelsius}
          >
            °C{" "}
          </a>
          | °F
        </sup>
      </div>
    );
  }
}
