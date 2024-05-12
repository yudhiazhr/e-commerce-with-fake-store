/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

// create context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // products state
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLaoding] = useState(true)

  // fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data)
    };
    fetchProducts();
  }, []);

  // waiting connection
  useEffect (() => {
    const timer = setTimeout (() => {
      setIsLaoding(false)
    }, 500)
    return () => clearTimeout(timer)
  },[])

  return (
    <ProductContext.Provider value={{ products, isLoading }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
