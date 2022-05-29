import axios from "axios";

const fetchLocationRequest = () => {
    return {type: "FETCH_LOCATION_REQUEST"}
}

const fetchLocationSuccess = data => {
    return {
        type: "FETCH_LOCATION_SUCCESS",
        payload : data
    }
}

const fetchLocationFailure = error => {
    return {
        type: "FETCH_LOCATION_FAILURE",
        payload: error
    }
}

export const fetchLocation = () => {
    return (dispatch) => {
        dispatch(fetchLocationRequest());
        axios.get("http://ipinfo.io")
            .then(response => {
                const data = response.data;
                dispatch(fetchLocationSuccess(data))
            })
            .catch(error => {
                dispatch(fetchLocationFailure("Unknown"))
            })
    }
}