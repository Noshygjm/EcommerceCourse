import React from "react";
import "./CourseCard.css";

const CourseCard = ({ course, onDetailsClick }) => {
  
  const handleDetailsClick = () => {
    onDetailsClick(course);
  };

  return (
    <div className="course-card">
      <img src={course.image} alt={course.title} className="course-image" />
      <div className="course-info">
        <h2 className="course-title">{course.title}</h2>
        <p className="course-category">{course.category}</p>
      </div>
      <button onClick={handleDetailsClick} className="details-button">
        Detalles
      </button>
    </div>
  );
};

export default CourseCard;

