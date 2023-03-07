import { createContext, useContext, useState } from "react";
import { loginHandler } from "../services/login-handler";
import { signupHandler } from "../services/signup-handler";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const LoginContext = createContext();
const useLogin = () => useContext(LoginContext);

const getToken = localStorage.getItem("token");
const isTokenSet = getToken ? true : false;

const LoginProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    isLoggedIn: isTokenSet,
    userToken: getToken,
  });
  const [userName, setUserName] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const navigate = useNavigate();

  const loginService = async ({ email, password }) => {
    const { data, status } = await loginHandler(email, password);
    if (status === 200) {
      localStorage.setItem("token", data.encodedToken);
      setUserData({
        ...userData,
        isLoggedIn: true,
        userToken: data.encodedToken,
      });
      console.log("login data", data);
      setUserName({
        ...userName,
        firstName: data.data.firstname,
        lastName: data.data.lastname,
        email: data.data.email,
      });
      navigate(-1);
    }
  };

  const signupService = async ({ firstName, lastName, email, password }) => {
    const { data, status } = await signupHandler(
      firstName,
      lastName,
      email,
      password
    );
    console.log("signup data", data);
    if (status === 201) {
      localStorage.setItem("token", data.encodedToken);
      setUserData({
        ...userData,
        isLoggedIn: true,
        userToken: data.encodedToken,
      });
      setUserName({
        ...userName,
        firstName: data.data.firstname,
        lastName: data.data.lastname,
        email: data.data.email,
      });
      navigate("/");
    }
  };

  const logoutHandler = () => {
    setUserData({ ...userData, isLoggedIn: false, userToken: null });
    localStorage.removeItem("token");
    toast.success("Logged Out successfully", {
      duration: 2000,
      position: "top-right",
    });
  };

  return (
    <LoginContext.Provider
      value={{ userData, loginService, signupService, logoutHandler, userName }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export { useLogin, LoginProvider };
