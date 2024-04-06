"use strict";

const API_KEY = "68c1d6e4972945f1a20164852240604";
const API = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

const placeLbl = document.querySelector("#place");
const conditionIcon = document.querySelector("#conditionIcon");
const currentTempLbls = document.querySelectorAll(".current__temp-lbl");

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
  conditionIcon.src = data.current.condition.icon;

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
