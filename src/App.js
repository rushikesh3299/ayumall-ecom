import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Navbar, Footer } from "./components/index";
import { Login, Signup, ProductPage, Home, ErrorPage } from "./pages/index";
import Mockman from "mockman-js";

export const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
};
