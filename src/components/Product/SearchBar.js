import { useState } from "react";
import { TextField, FormControlLabel, Checkbox } from "@mui/material";

import { FILTER_TEXT_CHANGED, FILTER_ONLY_STOCK } from "../../reducer/product";

const SearchBar = ({ dispatch }) => {
  const [inStockOnly, setInStockOnly] = useState(false);
  const [filterText, setFilterText] = useState("");

  return (
    <form>
      <TextField
        value={filterText}
        onChange={(e) => {
          setFilterText(e.target.value);
          dispatch({
            type: FILTER_TEXT_CHANGED,
            payload: {
              inStockOnly: inStockOnly,
              filterText: e.target.value,
            },
          });
        }}
        label="Product"
        fullWidth
        id="fullWidth"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={inStockOnly}
            onChange={(e) => {
              setInStockOnly(e.target.checked);
              dispatch({
                type: FILTER_ONLY_STOCK,
                payload: {
                  inStockOnly: e.target.checked,
                  filterText: filterText,
                },
              });
            }}
          />
        }
        label="Only show products in stock"
      />
    </form>
  );
};

export default SearchBar;
