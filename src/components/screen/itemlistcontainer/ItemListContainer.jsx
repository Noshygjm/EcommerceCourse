import React, { useEffect, useState } from "react";
import { getAllCourses, getCoursesByCategory } from "../../../firestore/firestoreFunctions";
import "./ItemListContainer.css";
import CourseCard from "../../coursecards/CourseCard";

const ItemListContainer = ({ selectedCategory }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        let coursesData;
        if (selectedCategory) {
          // Si hay una categoría seleccionada, filtrar por categoría
          coursesData = await getCoursesByCategory(selectedCategory);
        } else {
          // Si no hay categoría seleccionada, obtener todos los cursos
          coursesData = await getAllCourses();
        }
        setCourses(coursesData);
      } catch (error) {
        console.error("Error al recuperar los cursos:", error);
      }
    };

    fetchCourses();
  }, [selectedCategory]);

  return (
    <div className="itemlist-container">
      <h1 className="itemlist-title">
        {selectedCategory ? `Cursos de ${selectedCategory}` : "Todos los Cursos"}
      </h1>
      <div className="courses-grid">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onDetailsClick={(selectedCourse) =>
              console.log("Detalles del curso:", selectedCourse)
            } 
          />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
