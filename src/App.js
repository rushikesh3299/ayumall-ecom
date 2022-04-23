import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar, Footer } from "./components/index";
import {
  Login,
  Signup,
  ProductPage,
  Home,
  ErrorPage,
  Cart,
} from "./pages/index";
import Mockman from "mockman-js";

export const App = () => {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname != "/login" && location.pathname != "/signup" && (
        <Navbar />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      {location.pathname != "/login" && location.pathname != "/signup" && (
        <Footer />
      )}
    </div>
  );
};
