import axios from "axios";
import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "159a9f8ff294f264def02ae4cac4278a";
  let lat = props.coord.lat;
  let lon = props.coord.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="week-weather">
      <div className="row days">
        <div className="col predicted-weather">Thu</div>

        <div className="col predicted-weather">Fri</div>

        <div className="col predicted-weather">Sat</div>

        <div className="col predicted-weather">Sun</div>

        <div className="col predicted-weather">Mon</div>

        <div className="col predicted-weather">Tue</div>
      </div>
      <div className="row week-icons">
        <div className="col predicted-weather">
          <WeatherIcon code="02d" size={35} />
        </div>

        <div className="col predicted-weather">
          <WeatherIcon code="02d" size={35} />
        </div>

        <div className="col predicted-weather">
          <WeatherIcon code="02d" size={35} />
        </div>

        <div className="col predicted-weather">
          <WeatherIcon code="02d" size={35} />
        </div>

        <div className="col predicted-weather">
          <WeatherIcon code="02d" size={35} />
        </div>

        <div className="col predicted-weather">
          <WeatherIcon code="02d" size={35} />
        </div>
      </div>
      <div className="row week-temp">
        <div className="col predicted-weather forecast-temp">
          <span className="forecast-temp-max">12° </span>
          <span className="forecast-temp-min">10°</span>
        </div>

        <div className="col predicted-weather forecast-temp">
          <span className="forecast-temp-max">12° </span>
          <span className="forecast-temp-min">10°</span>
        </div>

        <div className="col predicted-weather forecast-temp">
          <span className="forecast-temp-max">12° </span>
          <span className="forecast-temp-min">10°</span>
        </div>

        <div className="col predicted-weather forecast-temp">
          <span className="forecast-temp-max">12° </span>
          <span className="forecast-temp-min">10°</span>
        </div>

        <div className="col predicted-weather forecast-temp">
          <span className="forecast-temp-max">12° </span>
          <span className="forecast-temp-min">10°</span>
        </div>

        <div className="col predicted-weather forecast-temp">
          <span className="forecast-temp-max">12° </span>
          <span className="forecast-temp-min">10°</span>
        </div>
      </div>
    </div>
  );
}
