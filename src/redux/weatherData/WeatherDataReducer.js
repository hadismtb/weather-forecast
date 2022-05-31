const initialState = {
    data : [],
    loading: false,
    error : ""
}

const weatherDataReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case "FETCH_WEATHER_REQUEST":
            return {
                error: "",
                data: [],
                loading: true
            }
        case "FETCH_WEATHER_SUCCESS":
            return {
                error: "",
                loading: false,
                data: payload
            }
        case "FETCH_WEATHER_FAILURE":
            return {
                error: payload,
                loading: false,
                data: []
            }
        default: return state
    }
}

export default weatherDataReducer;