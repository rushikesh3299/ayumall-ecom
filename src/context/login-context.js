import { createContext, useContext, useState } from "react";

const LoginContext = createContext();
const useLogin = () => useContext(LoginContext);

const getToken = localStorage.getItem("token");
const isTokenSet = getToken ? true : false;

const LoginProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    isLoggedIn: isTokenSet,
    userToken: getToken,
  });
  return (
    <LoginContext.Provider value={{ userData, setUserData }}>
      {children}
    </LoginContext.Provider>
  );
};

export { useLogin, LoginProvider };
