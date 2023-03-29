import { DndProvider } from "react-dnd";
import { Board } from "./components/Board";
import { Header } from "./components/Header";
import { store } from "./redux-toolkit/store";
import { Provider } from "react-redux";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Provider store={store}>
        <Header />
        <Board />
      </Provider>
    </DndProvider>
  );
}

export default App;
