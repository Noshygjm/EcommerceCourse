import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CourseDetails from "./components/screen/courseDetails/CourseDetails";
import { getAllCourses } from "./firestore/fireStoreFunctions";
import './App.css'
import Navbar from './components/navbar/NavBar'
import ItemListContainer from './components/screen/itemlistcontainer/ItemListContainer';
import { CartProvider } from "./context/CartContext";
import Cart from "./components/screen/cart/Cart";
import Checkout from "./components/screen/checkout/Checkout";


const App = () => {
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

  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer courses={courses} />}
          />
          <Route
            path="/category/:category"
            element={<ItemListContainer courses={courses} />}
          />
          <Route
            path="/course/:id"
            element={<CourseDetails courses={courses} />}
          />
          <Route 
            path="/cart" 
            element={<Cart />} 
          />
          <Route 
            path="/checkout" 
            element={<Checkout />} 
          /> 
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;

