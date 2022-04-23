import { useReducer } from "react";

export const cartReducer = () => {
  const cartHandler = (cartState, cartAction) => {};

  const initialCartState = {};
  const [cartState, cartDispatch] = useReducer(cartHandler, initialCartState);

  return { cartState, cartDispatch };
};
