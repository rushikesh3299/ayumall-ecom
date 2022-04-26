import { createContext, useContext, useState, useEffect } from "react";
import { useLogin } from "../context/index";
import axios from "axios";

const WishlistContext = createContext();
const useWishlist = () => useContext(WishlistContext);

const WishlistProvider = ({ children }) => {
  const { userData } = useLogin();
  const [wishlistItems, setWishlistItems] = useState([]);

  const getWishlistItems = async () => {
    try {
      const { data } = await axios.get("/api/user/wishlist", {
        headers: {
          authorization: userData.userToken,
        },
      });
      setWishlistItems(data.wishlist);
    } catch (error) {
      console.error(error);
    }
  };

  const addItemToWishlist = async (product) => {
    if (!checkItemInWiishlist(product._id)) {
      try {
        const { data } = await axios.post(
          "/api/user/wishlist",
          { product },
          {
            headers: {
              authorization: userData.userToken,
            },
          }
        );
        setWishlistItems(data.wishlist);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const removeItemFromWishlist = async (itemId) => {
    try {
      const { data } = await axios.delete("api/user/wishlist/" + itemId, {
        headers: {
          authorization: userData.userToken,
        },
      });
      setWishlistItems(() =>
        wishlistItems.filter((item) => item._id != itemId)
      );
    } catch (error) {
      console.error(error);
    }
  };

  const checkItemInWiishlist = (itemId) => {
    return wishlistItems.some((item) => item._id === itemId);
  };

  useEffect(() => {
    if (userData.isLoggedIn) {
      getWishlistItems();
    } else {
      setWishlistItems([]);
    }
  }, [userData]);

  return (
    <WishlistContext.Provider
      value={{ wishlistItems, addItemToWishlist, removeItemFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export { useWishlist, WishlistProvider };
