import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CourseCard from "../../coursecards/CourseCard";
import { getAllCourses, getCoursesByCategory } from "../../../firestore/fireStoreFunctions";
import "./ItemListContainer.css";

const ItemListContainer = ({ courses }) => {
  const { category } = useParams(); 
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      if (category) {
        const coursesByCategory = await getCoursesByCategory(category);
        setFilteredCourses(coursesByCategory);
      } else {
        setFilteredCourses(courses); 
      }
    };

    fetchCourses();
  }, [category, courses]);

  return (
    <div className="itemlist-container">
      <h1 className="itemlist-title">
        {category ? `Cursos de ${category}` : "Todos los Cursos"}
      </h1>
      <div className="courses-grid">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
