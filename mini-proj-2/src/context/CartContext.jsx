"use client";

import { createContext, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (itemName) => {
    console.log("Item added.");
    const selectedItem = productList.find((item) => item.title === itemName);
    if (selectedItem) {
      setCart((prevCart) => [...prevCart, selectedItem]);
      console.log(cart);
    }
  };
  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);