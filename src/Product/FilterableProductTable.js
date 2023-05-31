import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

const PRODUCTS = [
  { id: 1, price: "$1", stocked: true, name: "Apple" },
  { id: 2, price: "$1", stocked: true, name: "Dragonfruit" },
  { id: 3, price: "$2", stocked: false, name: "Passionfruit" },
  { id: 4, price: "$2", stocked: true, name: "Spinach" },
  { id: 5, price: "$4", stocked: false, name: "Pumpkin" },
  { id: 6, price: "$1", stocked: true, name: "Peas" },
];

export default function FilterableProductTable() {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <br />
      <ProductTable
        products={PRODUCTS}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}
