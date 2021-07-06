import React from "react";
import axios from "axios";

export default function Weather() {
  let weatherData = {
    city: "Tokyo",
    day: "Saturday",
    time: "15:44",
    temperature: "18",
    description: "Sunny",
    wind: "12",
    humidity: "45",
  };
  return (
    <div className="weather">
      <div className="row">
        <div className="col city-time">
          <h2 className="city">{weatherData.city}</h2>
          <h4 className="time">
            Last updated:{" "}
            <span class="date">
              {weatherData.day}, {weatherData.time}
            </span>{" "}
            CET
          </h4>
        </div>
        <div className="col search-form">
          <form className="search">
            <input type="text" placeholder="Search city" className="findCity" />
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
          <span className="temperature">{weatherData.temperature}</span>
          <sup className="units">
            <a href="#/" className="celsius" rel="noreferrer">
              °C{" "}
            </a>
            <a href="#/" className="celsius" rel="noreferrer">
              {" "}
              | °F
            </a>
          </sup>
          <h4 className="weather-description description">
            {weatherData.description}
          </h4>
          <h4 className="weather-description">
            Humidity: <span className="humidity">{weatherData.humidity}</span>%
          </h4>
          <h4 className="weather-description">
            Wind speed: <span className="wind">{weatherData.wind}</span>km/h
          </h4>
        </h1>
      </div>
    </div>
  );
}
