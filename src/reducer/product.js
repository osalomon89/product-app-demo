export const initialState = [
  { id: 1, price: "$1", stocked: true, name: "Apple" },
  { id: 2, price: "$1", stocked: true, name: "Dragonfruit" },
  { id: 3, price: "$2", stocked: false, name: "Passionfruit" },
  { id: 4, price: "$2", stocked: true, name: "Spinach" },
  { id: 5, price: "$4", stocked: false, name: "Pumpkin" },
  { id: 6, price: "$1", stocked: true, name: "Peas" },
];

export const productReducer = (products, action) => {
  switch (action.type) {
    case "filter": {
      const { filterText } = action;
      const filts = products.filter(
        (p) => p.name.toLowerCase().indexOf(filterText) !== -1
      );
      return filts;
    }
    case "stock": {
      const { inStockOnly } = action;
      const filts = products.filter(
        (p) => !inStockOnly || (inStockOnly && p.stocked)
      );
      return filts;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};
