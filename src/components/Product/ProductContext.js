import { useEffect, createContext, useReducer } from "react";
import {
  productReducer,
  initialState,
  FILTER_TEXT_CHANGED,
} from "../../reducer/product";

export const ProductContext = createContext(initialState.filteredData);

export const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const { filteredData: products } = state;

  useEffect(() => {
    dispatch({
      type: FILTER_TEXT_CHANGED,
      payload: { filterText: "" },
    });
  }, []);

  return (
    <ProductContext.Provider value={{ products, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
