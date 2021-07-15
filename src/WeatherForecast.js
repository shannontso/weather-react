import React from "react";

export default function WeatherForecast() {
  return (
    <div class="week-weather">
      <div class="row days">
        <div class="col predicted-weather">Thu</div>

        <div class="col predicted-weather">Fri</div>

        <div class="col predicted-weather">Sat</div>

        <div class="col predicted-weather">Sun</div>

        <div class="col predicted-weather">Mon</div>

        <div class="col predicted-weather">Tue</div>
      </div>
      <div class="row week-icons">
        <div class="col predicted-weather">
          <i class="bx bx-cloud"></i>
        </div>

        <div class="col predicted-weather">
          <i class="bx bx-cloud"></i>
        </div>

        <div class="col predicted-weather">
          <i class="bx bx-cloud"></i>
        </div>

        <div class="col predicted-weather">
          <i class="bx bx-cloud"></i>
        </div>

        <div class="col predicted-weather">
          <i class="bx bx-cloud"></i>
        </div>

        <div class="col predicted-weather">
          <i class="bx bx-cloud"></i>
        </div>
      </div>
      <div class="row week-temp">
        <div class="col predicted-weather">12°</div>

        <div class="col predicted-weather">15°</div>

        <div class="col predicted-weather">14°</div>

        <div class="col predicted-weather">15°</div>

        <div class="col predicted-weather">13°</div>

        <div class="col predicted-weather">14°</div>
      </div>
    </div>
  );
}
