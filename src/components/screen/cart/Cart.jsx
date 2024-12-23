import React, { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../../../context/CartContext";

const Cart = () => {
  const { cartItems, updateItemQuantity, removeItem } = useContext(CartContext);

  const handleQuantityChange = (id, quantity) => {
    updateItemQuantity(id, quantity);
  };

  const handleRemoveItem = (id) => {
    removeItem(id);
  };

  const handleCheckout = () => {
    alert("¡Compra finalizada!");
  };

  return (
    <div className="cart-container">
      <h1>Carrito de Compras</h1>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <h2>{item.title}</h2>
                  <p>Precio: ${item.price}</p>
                  <p>Total: ${item.price * item.quantity}</p>
                  <div className="cart-item-actions">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                      className="cart-item-quantity"
                    />
                    <button onClick={() => handleRemoveItem(item.id)} className="remove-button">
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button onClick={handleCheckout} className="checkout-button">
            Finalizar Compra
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
