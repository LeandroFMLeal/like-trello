import { Board } from "./components/Board";
import { Header } from "./components/Header";
import { store } from "./redux-toolkit/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Board />
    </Provider>
  );
}

export default App;
