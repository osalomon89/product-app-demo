import { TextField, FormControlLabel, Checkbox } from "@mui/material";

export default function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) {
  return (
    <form>
      <TextField
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
        label="Product"
        fullWidth
        id="fullWidth"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={inStockOnly}
            onChange={(e) => onInStockOnlyChange(e.target.checked)}
          />
        }
        label="Only show products in stock"
      />
    </form>
  );
}
