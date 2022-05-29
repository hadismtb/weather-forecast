import { combineReducers} from "redux";
import currentLocationReducer from "./currentLocationReducer";

const rootReducer = combineReducers({
    locationState: currentLocationReducer,
})

export default rootReducer;