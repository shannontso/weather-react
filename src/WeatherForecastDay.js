import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  return (
    <div>
      <div className="row days">
        <div className="col predicted-weather">{props.data.dt}</div>
      </div>
      <div className="row week-icons">
        <div className="col predicted-weather">
          <WeatherIcon code={props.data.weather[0].icon} size={35} />
        </div>
      </div>
      <div className="row week-temp">
        <div className="col predicted-weather forecast-temp">
          <span className="forecast-temp-max">{maxTemp()} </span>
          <span className="forecast-temp-min">{minTemp()}</span>
        </div>
      </div>
    </div>
  );
}
