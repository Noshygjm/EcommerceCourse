import React, { useState, useContext } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore"; 
import "./Checkout.css";
import { CartContext } from "../../../context/CartContext";

const Checkout = () => {
  const { cartItems, clearCart } = useContext(CartContext); 
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");

  const handleFinalizePurchase = async () => {
    if (!name || !cardNumber) {
      alert("Por favor completa todos los campos.");
      return;
    }

    const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    try {
      const db = getFirestore();
      const ordersCollection = collection(db, "pedido"); 
      const order = {
        nombre: name,
        cantidad: totalQuantity,
        fecha: new Date().toISOString(),
      };

      const docRef = await addDoc(ordersCollection, order); 
      alert(`Compra realizada con éxito. ID del pedido: ${docRef.id}`);
      clearCart(); // Vacía el carrito
    } catch (error) {
      console.error("Error al finalizar la compra: ", error);
      alert("Hubo un problema al procesar la compra.");
    }
  };

  return (
    <div className="checkout-container">
      <h1>Finalizar Compra</h1>
      <div className="checkout-form">
        <label>
          Nombre:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ingresa tu nombre"
          />
        </label>
        <label>
          Número de Tarjeta:
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="1234 5678 9101 1121"
          />
        </label>
        <button onClick={handleFinalizePurchase} className="checkout-button">
          Finalizar
        </button>
      </div>
    </div>
  );
};

export default Checkout;
