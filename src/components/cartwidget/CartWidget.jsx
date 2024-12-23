import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./CartWidget.css";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { cartItems } = useContext(CartContext); 
  const navigate = useNavigate();

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0); 

  return (
    <div className="cart-widget" onClick={() => navigate("/cart")}>
      🛒 <span className="cart-count">{totalItems}</span>
    </div>
  );
};

export default CartWidget;

