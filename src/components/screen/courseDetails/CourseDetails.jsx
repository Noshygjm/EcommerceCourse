import React from "react";
import { useParams } from "react-router-dom";
import "./CourseDetails.css";

const CourseDetails = ({ courses }) => {
  const { id } = useParams(); 
  const course = courses.find((course) => course.id === id); 

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
      <button className="back-button" onClick={() => window.history.back()}>
        Volver
      </button>
    </div>
  );
};

export default CourseDetails;
