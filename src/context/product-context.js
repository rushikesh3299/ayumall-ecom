import { useContext, createContext, useState } from "react";
import { initialProducts } from "../services/initial-products";
import { productReducer } from "../reducer/product-reducer";
const ProductContext = createContext();
const useProduct = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {
  const initialProductList = initialProducts();
  const [showFilterMobileNav, setShowFilterMobileNav] = useState(false);
  const { productState, productDispatch } = productReducer();

  return (
    <ProductContext.Provider
      value={{
        initialProductList,
        productState,
        productDispatch,
        showFilterMobileNav,
        setShowFilterMobileNav,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { useProduct, ProductProvider };
