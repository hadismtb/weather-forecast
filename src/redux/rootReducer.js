import { combineReducers} from "redux";
import currentLocationReducer from "./currentLocation/currentLocationReducer";

const rootReducer = combineReducers({
    locationState: currentLocationReducer,
})

export default rootReducer;