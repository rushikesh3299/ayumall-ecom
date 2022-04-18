import axios from "axios";

export const addToCart = (userData, product) => {
  try {
    (async () => {
      const { data } = await axios.post(
        "/api/user/cart",
        { product },
        {
          headers: {
            authorization: userData.userToken,
          },
        }
      );
      console.log(data);
    })();
  } catch (error) {
    console.error(error);
  }
};
