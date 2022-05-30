import axios from "axios";

//api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
//api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid={API key}

//API REQUIREMENTS
const API_KEY = "65ab2c747b41b6ef08230971719b640f";
const BASE_URL = "api.openweathermap.org/data/2.5/forecast?";

const fetchWeatherRequest = () => {
    return {type: "FETCH_WEATHER_REQUEST"}
}

const fetchWeatherSuccess = data => {
    return { type: "FETCH_WEATHER_SUCCESS", payload: data}
}

const fetchWeatherFailure = error => {
    return {type: "FETCH_WEATHER_FAILURE", payload: error}
}

