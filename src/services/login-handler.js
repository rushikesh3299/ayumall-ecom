import axios from "axios";

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
          userToken: JSON.stringify(data.encodedToken),
        });
        localStorage.setItem("token", JSON.stringify(data.encodedToken));
      }
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  })();
};
