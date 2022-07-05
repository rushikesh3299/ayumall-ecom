import { useReducer } from "react";

export const productReducer = () => {
  const filterHandler = (productState, action) => {
    switch (action.type) {
      case "SORT": {
        return action.payload === "HIGH_TO_LOW"
          ? { ...productState, sortBy: "HIGH_TO_LOW" }
          : { ...productState, sortBy: "LOW_TO_HIGH" };
      }
      case "CATEGORIZE": {
        return productState.showCategory.includes(action.payload)
          ? {
              ...productState,
              showCategory: [
                ...productState.showCategory.filter(
                  (item) => item !== action.payload
                ),
              ],
            }
          : {
              ...productState,
              showCategory: [...productState.showCategory, action.payload],
            };
      }
      case "BRANDWISE": {
        return { ...productState, showBrand: action.payload };
      }
      case "RATE": {
        return { ...productState, showRating: action.payload };
      }
      case "CLEAR_ALL": {
        return {
          ...productState,
          sortBy: null,
          showCategory: [],
          showBrand: null,
          showRating: 0,
        };
      }
      default:
        return { ...productState };
    }
  };

  const initialState = {
    sortBy: null,
    showCategory: [],
    showBrand: null,
    showRating: 0,
  };
  const [productState, productDispatch] = useReducer(
    filterHandler,
    initialState
  );

  return { productState, productDispatch };
};
