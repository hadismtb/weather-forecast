import axios from "axios";

const fetchWeatherRequest = () => {
    return {type: "FETCH_WEATHER_REQUEST"}
}

const fetchWeatherSuccess = data => {
    return { type: "FETCH_WEATHER_SUCCESS", payload: data}
}

const fetchWeatherFailure = error => {
    return {type: "FETCH_WEATHER_FAILURE", payload: error}
}

export const fetchWeather = url => {
    return (dispatch) => {
        dispatch(fetchWeatherRequest());
        axios.get(url)
            .then(response => {
                const data = response.data
                dispatch(fetchWeatherSuccess(data))
            })
            .catch(error => {
                dispatch(fetchWeatherFailure("Location Not Found"))
            })
    }
}