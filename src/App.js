import "./App.css";
import FilterableProductTable from "./components/Product/FilterableProductTable";
import { Provider } from "react-redux";
import store from "./reducer/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <FilterableProductTable />
      </div>
    </Provider>
  );
};

export default App;
