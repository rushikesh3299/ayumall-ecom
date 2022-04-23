import axios from "axios";
import { useState, useEffect } from "react";

export const getCart = (userData) => {
  const [initialCart, setInitialCart] = useState([]);

  useEffect(async () => {
    try {
      if (userData.isLoggedIn) {
        const { data } = await axios.get("/api/user/cart", {
          headers: {
            authorization: userData.userToken,
          },
        });
        setInitialCart(data.cart);
      } else {
        setInitialCart([]);
      }
    } catch (error) {
      console.error("cart not found", error);
    }
  }, [userData]);

  return initialCart;
};
