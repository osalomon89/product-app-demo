import * as actions from "./actions";

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

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FILTER_TEXT_CHANGED: {
      const {
        payload: { filterText, inStockOnly },
      } = action;

      return {
        ...state,
        filteredData: filterData(filterText, inStockOnly, state.data),
      };
    }
    case actions.FILTER_ONLY_STOCK: {
      const {
        payload: { filterText, inStockOnly },
      } = action;

      return {
        ...state,
        filteredData: filterData(filterText, inStockOnly, state.data),
      };
    }
    default:
      return state;
  }
};

const filterData = (filterText, inStockOnly, data) => {
  const filts = data.filter((p) =>
    p.name.toLowerCase().includes(filterText.toLowerCase())
  );

  return filts.filter((p) => !inStockOnly || (inStockOnly && p.stocked));
};

export { productReducer };
