import { combineReducers} from "redux";
import currentLocationReducer from "./currentLocation/currentLocationReducer";
import weatherDataReducer from "./weatherData/WeatherDataReducer";

const rootReducer = combineReducers({
    locationState: currentLocationReducer,
    weatherState: weatherDataReducer
})

export default rootReducer;