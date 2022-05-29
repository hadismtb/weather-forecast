import { Provider} from "react-redux";
import store from "./redux/store";

//COMPONENTS
import Main from "./components/Main";
import WeatherInfo from "./components/WeatherInfo";

function App() {
  return (
     <Provider store={store}>
        <div className="app">
            <Main/>
            <WeatherInfo/>
        </div>
     </Provider>
  );
}

export default App;
