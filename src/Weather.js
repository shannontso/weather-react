import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="weather">
        <div className="row">
          <div className="col city-time">
            <h2 className="city">Tokyo</h2>
            <h4 className="time">
              Last updated: <span className="date">Saturday, 15:44</span> CET
            </h4>
          </div>
          <div className="col search-form">
            <form className="search">
              <input
                type="text"
                placeholder="Search city"
                className="findCity"
              />
              <button type="submit" className="search-button">
                <i className="bx bx-search"></i>
              </button>
            </form>
            <button className="current-location">
              <i className="bx bxs-map"></i> Current location
            </button>
          </div>
        </div>
        <div className="current-weather">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/sun-bright-rays-sunny-weather-33960.png"
            alt="icon"
            id="icon"
          />
          <h1 className="current-temperature">
            <span className="temperature">18</span>
            <sup className="units">
              <a href="#/" className="celsius" rel="noreferrer">
                °C{" "}
              </a>
              <a href="#/" className="celsius" rel="noreferrer">
                {" "}
                | °F
              </a>
            </sup>
            <h4 className="weather-description description">Sunny</h4>
            <h4 className="weather-description">
              Humidity: <span className="humidity">44</span>%
            </h4>
            <h4 className="weather-description">
              Wind speed: <span className="wind">2</span>km/h
            </h4>
          </h1>
        </div>
      </div>
    );
  } else {
    const apiKey = "159a9f8ff294f264def02ae4cac4278a";
    let city = "Tokyo";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
