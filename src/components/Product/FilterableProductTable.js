import { useReducer, useEffect } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import {
  productReducer,
  initialState,
  FILTER_TEXT_CHANGED,
} from "../../reducer/product";

export default function FilterableProductTable() {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const { filteredData: products } = state;

  useEffect(() => {
    dispatch({
      type: FILTER_TEXT_CHANGED,
      payload: { filterText: "" },
    });
  }, []);

  return (
    <div>
      <SearchBar dispatch={dispatch} />
      <br />
      <ProductTable products={products} />
    </div>
  );
}
