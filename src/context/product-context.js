import {
  useContext,
  createContext,
  useReducer,
  useState,
  useEffect,
} from "react";
import axios from "axios";

const ProductContext = createContext();
const useProduct = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);

  useEffect(async () => {
    const data = await axios.get("/api/products");
    // console.log(typeof JSON.stringify(data.data.products));
    console.log(data.data.products);
    setProductList(() => data.data.products);
  }, []);

  return (
    <ProductContext.Provider value={{ productList }}>
      {children}
    </ProductContext.Provider>
  );
};

export { useProduct, ProductProvider };
