import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import { ProductContextProvider } from "./ProductContext";

const FilterableProductTable = () => {
  return (
    <div>
      <ProductContextProvider>
        <SearchBar />
        <br />
        <ProductTable />
      </ProductContextProvider>
    </div>
  );
};

export default FilterableProductTable;
