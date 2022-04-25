import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {
  ProductProvider,
  LoginProvider,
  CartProvider,
  WishlistProvider,
} from "./context/index";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginProvider>
        <WishlistProvider>
          <CartProvider>
            <ProductProvider>
              <App />
            </ProductProvider>
          </CartProvider>
        </WishlistProvider>
      </LoginProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
