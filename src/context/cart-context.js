import { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useLogin } from "../context/index";
import axios from "axios";
const CartContext = createContext();
const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const { userData } = useLogin();
  const [cartItems, setCartItems] = useState([]);

  const getCartItems = async () => {
    try {
      const authToken = localStorage.getItem("token");
      const { data } = await axios.get(
        "https://ayumallecomstore.rushikesh3299.repl.co/cart",
        {
          headers: {
            encodedtoken: authToken,
          },
        }
      );
      setCartItems(data.cart);
    } catch (error) {
      console.error(error);
    }
  };

  const addToCart = async (product) => {
    // const checkItemAlreadyPresent = checkItemInCart(product._id);

    // if (checkItemAlreadyPresent) {
    //   increaseItemQty(product._id);
    // } else {
    //   addNewItemToCart(product);
    // }
    try {
      const authToken = localStorage.getItem("token");
      const { data } = await axios.post(
        "https://ayumallecomstore.rushikesh3299.repl.co/cart",
        { product },
        {
          headers: {
            encodedtoken: authToken,
          },
        }
      );
      setCartItems(data.cart);
      toast.success("Item added to cart", {
        duration: 2000,
        position: "top-right",
      });
    } catch (error) {
      console.error(error);
    }
  };

  // const addNewItemToCart = async (product) => {
  //   try {
  //     const authToken = localStorage.getItem("token");
  //     const { data } = await axios.post(
  //       "/api/user/cart",
  //       { product },
  //       {
  //         headers: {
  //           authorization: authToken,
  //         },
  //       }
  //     );
  //     setCartItems(data.cart);
  //     toast.success("Item added to cart", {
  //       duration: 2000,
  //       position: "top-right",
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const increaseItemQty = async (itemId) => {
  //   try {
  //     const authToken = localStorage.getItem("token");
  //     const { data } = await axios.post(
  //       "/api/user/cart/" + itemId,
  //       { action: { type: "increment" } },
  //       {
  //         headers: {
  //           authorization: authToken,
  //         },
  //       }
  //     );
  //     setCartItems(() =>
  //       cartItems.map((item) =>
  //         item._id == itemId ? { ...item, qty: item.qty + 1 } : item
  //       )
  //     );
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const decreaseItemQty = async (item) => {
    if (item.qty <= 1) {
      removeItemFromCart(item._id);
    } else {
      try {
        const authToken = localStorage.getItem("token");
        const { data } = await axios.post(
          "/api/user/cart/" + item._id,
          { action: { type: "decrement" } },
          {
            headers: {
              authorization: authToken,
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
      const authToken = localStorage.getItem("token");
      const { data } = await axios.delete("api/user/cart/" + itemId, {
        headers: {
          authorization: authToken,
        },
      });
      setCartItems(() => cartItems.filter((item) => item._id != itemId));
    } catch (error) {
      console.error(error);
    }
  };

  // const checkItemInCart = (itemId) => {
  //   let itemPresent = false;
  //   cartItems.forEach((item) => {
  //     if (item._id == itemId) {
  //       itemPresent = true;
  //     }
  //   });
  //   return itemPresent;
  // };

  useEffect(() => {
    if (userData.isLoggedIn) {
      getCartItems(userData);
      console.log("run");
    } else {
      setCartItems([]);
    }
  }, [userData]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        // increaseItemQty,
        decreaseItemQty,
        removeItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { useCart, CartProvider };
