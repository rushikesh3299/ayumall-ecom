import axios from "axios";
import toast from "react-hot-toast";

export const signupHandler = async (firstName, lastName, email, password) => {
  try {
    const { data, status } = await axios.post("/api/auth/signup", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });
    localStorage.setItem("token", JSON.stringify(data.encodedToken));
    toast.success("Welcome! Logged In successfully", {
      duration: 2000,
      position: "top-right",
    });
    return { data, status };
  } catch (error) {
    console.error(error);
    toast.error("Error occured!", {
      duration: 2000,
      position: "top-right",
    });
  }
};
