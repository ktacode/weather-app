"use strict";

const API_KEY = "68c1d6e4972945f1a20164852240604";
const API = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=London`;

function getGeoCoordinates() {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      console.log(latitude, longitude);
    },
    (error) => console.log(error)
  );
}

async function sendRequest() {
  try {
    const response = await fetch(API);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

function init() {
  getGeoCoordinates();
  //   sendRequest();
}

init();
