import { useState } from "react";
import { TextField, FormControlLabel, Checkbox } from "@mui/material";

const SearchBar = ({ dispatch }) => {
  const [text, setText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <form>
      <TextField
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          dispatch({
            type: "filter",
            filterText: e.target.value,
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
                type: "stock",
                inStockOnly: e.target.checked,
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
