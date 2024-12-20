import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CourseDetails from "./components/screen/courseDetails/CourseDetails";
import { getAllCourses } from "./firestore/fireStoreFunctions";
import './App.css'
import Navbar from './components/navbar/NavBar'
import ItemListContainer from './components/screen/itemlistcontainer/ItemListContainer';

const App = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null); 

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

  return (
    <Router>
       <Navbar onCategorySelect={setSelectedCategory} />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer selectedCategory={selectedCategory} courses={courses} />}
        />
        <Route
          path="/course/:id"
          element={<CourseDetails courses={courses} />}
        />
      </Routes>
    </Router>
  );
};

export default App;