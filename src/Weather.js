import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
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
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "159a9f8ff294f264def02ae4cac4278a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <div className="row">
          <div className="col city-time">
            <h2 className="city">{weatherData.city}</h2>
            <h4 className="time">
              Last updated:{" "}
              <span className="date">
                <FormattedDate date={weatherData.date} />
              </span>{" "}
              CET
            </h4>
          </div>
          <div className="col search-form">
            <form className="search" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search city"
                className="findCity"
                onChange={handleCityChange}
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
          <WeatherIcon code={weatherData.icon} size={110} />
          <h1 className="current-temperature">
            <Temperature celsius={weatherData.temperature} />
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
        <WeatherForecast />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
