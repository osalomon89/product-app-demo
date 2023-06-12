import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

export default function FilterableProductTable() {
  return (
    <div>
      <SearchBar />
      <br />
      <ProductTable />
    </div>
  );
}
