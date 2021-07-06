import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
      </div>
      <footer>
        This project was coded by Shannon Tan and is{" "}
        <a
          href="https://github.com/shannontso"
          target="_blank"
          rel="noopener noreferrer"
        >
          open sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
