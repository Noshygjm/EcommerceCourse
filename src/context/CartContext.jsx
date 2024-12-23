import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item, quantity) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCartItems((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        )
      );
    } else {
      setCartItems((prevCart) => [...prevCart, { ...item, quantity }]);
    }
  };

  const updateItemQuantity = (id, quantity) => {
    setCartItems((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === id ? { ...cartItem, quantity } : cartItem
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevCart) => prevCart.filter((cartItem) => cartItem.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateItemQuantity, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};