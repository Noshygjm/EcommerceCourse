import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import "./CourseDetails.css";
import { CartContext } from "../../../context/CartContext";

const CourseDetails = ({ courses }) => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const course = courses.find((course) => course.id === id);

  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(course, quantity);
    alert(`Agregado ${quantity} x ${course.title} al carrito`);
  };

  if (!course) {
    return <h1>Curso no encontrado</h1>;
  }

  return (
    <div className="course-details-container">
      <h1>{course.title}</h1>
      <p>Categoría: {course.category}</p>
      <img src={course.image} alt={course.title} className="course-image" />
      <p>{course.description}</p>
      <p>Duración: {course.duration}</p>
      <p>Precio: ${course.price}</p>
      <div className="purchase-section">
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="quantity-input"
        />
        <button onClick={handleAddToCart} className="add-to-cart-button">
          Comprar
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;





