import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { TextField, FormControlLabel, Checkbox } from "@mui/material";

import { FILTER_TEXT_CHANGED, FILTER_ONLY_STOCK } from "../../reducer/actions";

const SearchBar = () => {
  const [inStockOnly, setInStockOnly] = useState(false);
  const [filterText, setFilterText] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = () => {
      dispatch({
        type: FILTER_TEXT_CHANGED,
        payload: { filterText: "" },
      });
    };

    fetchData();
  }, [dispatch]);

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
