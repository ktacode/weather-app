"use strict";

const WEATHERAPI_KEY = "68c1d6e4972945f1a20164852240604";
const WEATHERAPI_ADDRESS = `http://api.weatherapi.com/v1/current.json?key=${WEATHERAPI_KEY}&q=London`;

async function sendRequest() {
  try {
    const response = await fetch(WEATHERAPI_ADDRESS);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

function init() {
  sendRequest();
}

init();
