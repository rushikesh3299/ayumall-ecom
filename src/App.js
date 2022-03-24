import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Login } from "./pages/authpages/Login";
import { Signup } from "./pages/authpages/Signup";
import Mockman from "mockman-js";
export const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
};
