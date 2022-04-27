import axios from "axios";
import toast from "react-hot-toast";

export const signupHandler = (
  signupFormData,
  userData,
  setUserData,
  navigate
) => {
  (async () => {
    try {
      const { data, status } = await axios.post("/api/auth/signup", {
        firstName: signupFormData.firstName,
        lastName: signupFormData.lastName,
        email: signupFormData.email,
        password: signupFormData.password,
      });
      if (status === 201) {
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
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Error occured!", {
        duration: 2000,
        position: "top-right",
      });
    }
  })();
};
