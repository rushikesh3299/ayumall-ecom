import axios from "axios";
import toast from "react-hot-toast";

export const loginHandler = async (email, password) => {
  try {
    const { data, status } = await axios.post(
      "https://ayumallecomstore.rushikesh3299.repl.co/auth/login",
      {
        email: email,
        password: password,
      }
    );
    toast.success("Welcome! Logged In successfully", {
      duration: 2000,
      position: "top-right",
    });
    return { data, status };
  } catch (error) {
    console.error(error);
    toast.error("Please check credentials", {
      duration: 2000,
      position: "top-right",
    });
  }
};
