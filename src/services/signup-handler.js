import axios from "axios";

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
