"use strict";

const API_KEY = "68c1d6e4972945f1a20164852240604";
const API = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

const placeLbl = document.querySelector("#place");
const conditionIcons = document.querySelectorAll(".condition-icon");
const currentTempLbls = document.querySelectorAll(".current__temp-lbl");
const localTimeLbl = document.querySelector("#localTimeLbl");
const conditionLbl = document.querySelector("#conditionLbl");
const airQualityLbl = document.querySelector("#airQuality");
const windSpeedLbl = document.querySelector("#windSpeedLbl");
const humidityLbl = document.querySelector("#humidityLbl");
const visibilityLbl = document.querySelector("#visibilityLbl");
const uvLbl = document.querySelector("#uvLbl");
const pressionLbl = document.querySelector("#pressionLbl");

function getGeoCoordinates() {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      sendRequest(latitude, longitude);
    },
    (error) => console.log(error)
  );
}

function render(data) {
  placeLbl.textContent = data.location.name;
  localTimeLbl.textContent = data.location.localtime.split(" ")[1];
  conditionLbl.textContent = data.current.condition.text;
  windSpeedLbl.textContent = `${data.current.wind_kph} km/h`;
  humidityLbl.textContent = `${data.current.humidity} %`;
  visibilityLbl.textContent = `${data.current.vis_km} km`;
  uvLbl.textContent = `${data.current.uv}`;
  pressionLbl.textContent = `${data.current.pressure_mb} mb`;
  conditionIcons.forEach((img) => (img.src = data.current.condition.icon));
  currentTempLbls.forEach(
    (lbl) => (lbl.textContent = `${data.current.temp_c}ºC`)
  );
}

async function sendRequest(lat, lng) {
  try {
    const response = await fetch(`${API}&q=${lat},${lng}`);
    const result = await response.json();
    console.log(result);
    render(result);
  } catch (error) {
    console.log(error);
  }
}

function init() {
  getGeoCoordinates();
}

init();
