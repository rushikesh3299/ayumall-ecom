import { useState, useEffect } from "react";
import axios from "axios";

export const initialProducts = () => {
  const [initialProductList, setInitialProductList] = useState([]);

  useEffect(async () => {
    try {
      const data = await axios.get("/api/products");
      setInitialProductList(() => data.data.products);
    } catch (error) {
      console.error("products not found", error);
    }
  }, []);

  return initialProductList;
};
