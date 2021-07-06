import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: "Saturday, 15:44",
      iconUrl:
        "https://cdn.iconscout.com/icon/free/png-256/sun-bright-rays-sunny-weather-33960.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <div className="row">
          <div className="col city-time">
            <h2 className="city">{weatherData.city}</h2>
            <h4 className="time">
              Last updated: <span className="date">{weatherData.date}</span> CET
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
            src={weatherData.iconUrl}
            alt={weatherData.description}
            id="icon"
          />
          <h1 className="current-temperature">
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <sup className="units">
              <a href="#/" className="celsius" rel="noreferrer">
                °C{" "}
              </a>
              <a href="#/" className="celsius" rel="noreferrer">
                {" "}
                | °F
              </a>
            </sup>
            <h4 className="weather-description description text-capitalize">
              {weatherData.description}
            </h4>
            <h4 className="weather-description">
              Humidity: <span className="humidity">{weatherData.humidity}</span>
              %
            </h4>
            <h4 className="weather-description">
              Wind speed:{" "}
              <span className="wind">{Math.round(weatherData.wind)}</span>km/h
            </h4>
          </h1>
        </div>
      </div>
    );
  } else {
    const apiKey = "159a9f8ff294f264def02ae4cac4278a";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
