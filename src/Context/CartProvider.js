import React, { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const findExistingProduct = cartItems.find((i) => i._id === product._id);
    if (findExistingProduct) {
      const updatedCart = cartItems.map((item) => {
        if (item._id === product._id) {
          return { ...item, orderQty: item.orderQty + 1 };
        }
        return item;
      });

      setCartItems(updatedCart);
    } else {
      product.orderQty = 1;
      setCartItems([...cartItems, product]);
    }
  };

  const cartInfo = { handleAddToCart, cartItems };
  console.log(cartItems);
  return (
    <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
