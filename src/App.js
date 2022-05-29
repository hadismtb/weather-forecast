import Main from "./components/Main";
import { Provider} from "react-redux";
import store from "./redux/store";

function App() {
  return (
     <Provider store={store}>
        <div className="app">
            <Main/>
        </div>
     </Provider>
  );
}

export default App;
