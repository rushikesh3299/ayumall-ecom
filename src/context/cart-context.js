import { createContext, useContext, useState, useEffect } from "react";
import { useLogin } from "../context/index";
import axios from "axios";
const CartContext = createContext();
const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const { userData } = useLogin();
  const [cartItems, setCartItems] = useState([]);

  const getCartItems = async () => {
    try {
      const { data } = await axios.get("/api/user/cart", {
        headers: {
          authorization: userData.userToken,
        },
      });
      setCartItems(data.cart);
    } catch (error) {
      console.error(error);
    }
  };

  const addToCart = (product) => {
    const checkItemAlreadyPresent = checkItemInCart(product._id);

    if (checkItemAlreadyPresent) {
      increaseItemQty(product._id);
    } else {
      addNewItemToCart(product);
    }
  };

  const addNewItemToCart = async (product) => {
    try {
      const { data } = await axios.post(
        "/api/user/cart",
        { product },
        {
          headers: {
            authorization: userData.userToken,
          },
        }
      );
      setCartItems(data.cart);
    } catch (error) {
      console.error(error);
    }
  };

  const increaseItemQty = async (itemId) => {
    try {
      const { data } = await axios.post(
        "/api/user/cart/" + itemId,
        { action: { type: "increment" } },
        {
          headers: {
            authorization: userData.userToken,
          },
        }
      );
      setCartItems(() =>
        cartItems.map((item) =>
          item._id == itemId ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  const decreaseItemQty = async (item) => {
    if (item.qty <= 1) {
      removeItemFromCart(item._id);
    } else {
      try {
        const { data } = await axios.post(
          "/api/user/cart/" + item._id,
          { action: { type: "decrement" } },
          {
            headers: {
              authorization: userData.userToken,
            },
          }
        );
        setCartItems(() =>
          cartItems.map((cartItem) =>
            item._id == cartItem._id
              ? { ...cartItem, qty: item.qty - 1 }
              : cartItem
          )
        );
      } catch (error) {
        console.error(error);
      }
    }
  };

  const removeItemFromCart = async (itemId) => {
    try {
      const { data } = await axios.delete("api/user/cart/" + itemId, {
        headers: {
          authorization: userData.userToken,
        },
      });
      setCartItems(() => cartItems.filter((item) => item._id != itemId));
    } catch (error) {
      console.error(error);
    }
  };

  const checkItemInCart = (itemId) => {
    let itemPresent = false;
    cartItems.forEach((item) => {
      if (item._id == itemId) {
        itemPresent = true;
      }
    });
    return itemPresent;
  };

  useEffect(() => {
    if (userData.isLoggedIn) {
      getCartItems(userData);
    } else {
      setCartItems([]);
    }
  }, [userData]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, increaseItemQty, decreaseItemQty }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { useCart, CartProvider };
