import { useState, useEffect } from "react";
import axios from "axios";

export const initialProducts = () => {
  const [initialProductList, setInitialProductList] = useState([]);

  useEffect(async () => {
    const data = await axios.get(
      "https://ayumallecomstore.rushikesh3299.repl.co/products"
    );
    console.log(data.data.products);
    setInitialProductList(() => data.data.products);
  }, []);

  return initialProductList;
};
