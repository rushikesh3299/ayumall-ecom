import "./App.css";
import { Toaster } from "react-hot-toast";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar, Footer, RequireAuth } from "./components/index";
import { useLogin } from "./context";
import {
  Login,
  Signup,
  ProductPage,
  Home,
  ErrorPage,
  Cart,
  Wishlist,
  SingleProduct,
} from "./pages/index";
import Mockman from "mockman-js";
import { useEffect } from "react";

export const App = () => {
  const location = useLocation();
  const pathName = location.pathname;
  const { userData } = useLogin();

  useEffect(
    () =>
      (document.title = `AyuMall | ${
        pathName === "/" ? "home" : pathName.slice(1)
      }`)
  );

  return (
    <div className="App">
      {location.pathname != "/login" && location.pathname != "/signup" && (
        <Navbar />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/cart"
          element={
            <RequireAuth login={userData.isLoggedIn}>
              <Cart />
            </RequireAuth>
          }
        />
        <Route
          path="/wishlist"
          element={
            <RequireAuth login={userData.isLoggedIn}>
              <Wishlist />
            </RequireAuth>
          }
        />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      {location.pathname != "/login" && location.pathname != "/signup" && (
        <Footer />
      )}
      <Toaster />
    </div>
  );
};
