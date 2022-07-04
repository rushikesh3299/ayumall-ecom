import { createContext, useContext, useState } from "react";
import { loginHandler } from "../services/login-handler";
import { signupHandler } from "../services/signup-handler";
import { useNavigate } from "react-router-dom";

const LoginContext = createContext();
const useLogin = () => useContext(LoginContext);

const getToken = localStorage.getItem("token");
const isTokenSet = getToken ? true : false;

const LoginProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    isLoggedIn: isTokenSet,
    userToken: getToken,
  });
  const [userName, setUserName] = useState({ firstName: "", lastName: "" });
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
      setUserName({
        ...userName,
        firstName: data.foundUser.firstName,
        lastName: data.foundUser.lastName,
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
    if (status === 201) {
      localStorage.setItem("token", data.encodedToken);
      setUserData({
        ...userData,
        isLoggedIn: true,
        userToken: data.encodedToken,
      });
      navigate("/");
    }
  };

  return (
    <LoginContext.Provider
      value={{ userData, loginService, signupService, setUserData }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export { useLogin, LoginProvider };
