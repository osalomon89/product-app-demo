const initialState = {
  data: [
    { id: 1, price: "$1", stocked: true, name: "Apple" },
    { id: 2, price: "$1", stocked: true, name: "Dragonfruit" },
    { id: 3, price: "$2", stocked: false, name: "Passionfruit" },
    { id: 4, price: "$2", stocked: true, name: "Spinach" },
    { id: 5, price: "$4", stocked: false, name: "Pumpkin" },
    { id: 6, price: "$1", stocked: true, name: "Peas" },
  ],
  filteredData: [],
};

// Acciones
const FILTER_TEXT_CHANGED = "FILTER_TEXT_CHANGED";
const FILTER_ONLY_STOCK = "FILTER_ONLY_STOCK";

const productReducer = (state, action) => {
  switch (action.type) {
    case FILTER_TEXT_CHANGED: {
      const {
        payload: { filterText, inStockOnly },
      } = action;

      return {
        ...state,
        filteredData: filterData(filterText, inStockOnly, state.data),
      };
    }
    case FILTER_ONLY_STOCK: {
      const {
        payload: { filterText, inStockOnly },
      } = action;

      return {
        ...state,
        filteredData: filterData(filterText, inStockOnly, state.data),
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

const filterData = (filterText, inStockOnly, data) => {
  const filts = data.filter((p) =>
    p.name.toLowerCase().includes(filterText.toLowerCase())
  );

  return filts.filter((p) => !inStockOnly || (inStockOnly && p.stocked));
};

export { productReducer, FILTER_TEXT_CHANGED, FILTER_ONLY_STOCK, initialState };
