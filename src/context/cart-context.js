import { createContext, useContext, useEffect } from "react";
import { getCart } from "../services/cartservices/getcart";
import { useLogin } from "./login-context";
import { cartReducer } from "../reducer/cart-reducer";

const CartContext = createContext();
const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const { cartState, cartDispatch } = cartReducer();
  const { userData } = useLogin();
  const initialCart = getCart(userData);
  console.log("initialcart", initialCart);

  return (
    <CartContext.Provider value={{ initialCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, useCart };
