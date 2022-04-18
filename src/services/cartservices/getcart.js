import axios from "axios";

export const getCart = () => {
  const token = localStorage.getItem("token");
  try {
    (async () => {
      const { data } = await axios.get("/api/user/cart", {
        headers: {
          authorization: token,
        },
      });
      console.log(data);
      return data;
    })();
  } catch (error) {
    console.error(error);
  }
};
