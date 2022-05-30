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
                ...state,
                loading: true
            }
        case "FETCH_WEATHER_SUCCESS":
            return {
                ...state,
                loading: false,
                data: payload
            }
        case "FETCH_WEATHER_FAILURE":
            return {
                error: payload
            }
        default: return state
    }
}

export default weatherDataReducer;