import { useReducer } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import { productReducer, initialState } from "../../reducer/product";

export default function FilterableProductTable() {
  const [products, dispatch] = useReducer(productReducer, initialState);

  return (
    <div>
      <SearchBar dispatch={dispatch} />
      <br />
      <ProductTable products={products} />
    </div>
  );
}
