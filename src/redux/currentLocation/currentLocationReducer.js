const initialState = {
    city: "",
    country: "",
    loading: false,
    error: false
}

const currentLocationReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case "FETCH_LOCATION_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "FETCH_LOCATION_SUCCESS":
            return {
                loading: false,
                city: payload.city,
                country: payload.country
            }
        case "FETCH_LOCATION_FAILURE":
            return {
                loading: false,
                error: true,
                city: payload
            }
        default: return state
    }
}

export default currentLocationReducer;