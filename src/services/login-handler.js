import axios from "axios";
import toast from "react-hot-toast";

export const loginHandler = (
  loginFormData,
  userData,
  setUserData,
  navigate
) => {
  (async () => {
    try {
      const { data, status } = await axios.post("/api/auth/login", {
        email: loginFormData.email,
        password: loginFormData.password,
      });
      if (status === 200) {
        setUserData({
          ...userData,
          isLoggedIn: true,
          userToken: data.encodedToken,
        });
        localStorage.setItem("token", JSON.stringify(data.encodedToken));
        toast.success("Welcome! Logged In successfully", {
          duration: 2000,
          position: "top-right",
        });
      }
      navigate(-1);
    } catch (error) {
      console.error(error);
      toast.error("Please check credentials", {
        duration: 2000,
        position: "top-right",
      });
    }
  })();
};
