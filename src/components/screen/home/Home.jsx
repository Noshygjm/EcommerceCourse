import React, { useEffect, useState } from "react";
import { getAllCourses } from "../../../firestore/firestoreFunctions"; 
import CourseCard from "../../../components/coursecards/CourseCard"; 
import "./Home.css";

const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const allCourses = await getAllCourses();
        setCourses(allCourses);
      } catch (error) {
        console.error("Error al recuperar los cursos:", error);
      }
    };
    fetchCourses();
  }, []);

  const handleDetail = (course, quantity) => {
    console.log("click en detalle");
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Todos los Cursos</h1>
      <div className="courses-grid">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onDetailsClick={ handleDetail }
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

