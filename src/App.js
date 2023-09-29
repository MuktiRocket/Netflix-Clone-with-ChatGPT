import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import Shimmer from "./components/Shimmer";

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <Body />
        {/* <Shimmer/> */}
      </Provider>
    </div>
  );
}

export default App;
