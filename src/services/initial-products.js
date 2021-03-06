import { useState, useEffect } from "react";
import axios from "axios";

export const initialProducts = () => {
  const [initialProductList, setInitialProductList] = useState([]);

  useEffect(async () => {
    const data = await axios.get("/api/products");
    setInitialProductList(() => data.data.products);
  }, []);

  return initialProductList;
};
