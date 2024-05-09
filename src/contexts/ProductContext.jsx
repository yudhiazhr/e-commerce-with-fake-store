/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

// create context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // products state
  const [products, setProducts] = useState([]);

  // fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data)
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
