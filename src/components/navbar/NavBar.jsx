
import React from "react";
import { useNavigate } from "react-router-dom";
import viteLogo from '/vite.svg'
import './Navbar.css'; 
import CartWidget from "../cartwidget/CartWidget";

const Navbar = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`); 
  };

  const handleHomeClick = () => {
    navigate(`/`); 
  };

  return (

    <nav className="navbar">
      <div className="navbar-left">
        <img
          src={viteLogo}
          alt="Logo"
          className="navbar-logo"
        />
        <h1 className="navbar-title">Ecommerce</h1>
      </div>
      <div className="navbar-center">
        <button onClick={() => handleHomeClick()} className="navbar-button">
          Home
        </button>
        <button onClick={() => handleCategoryClick("Programacion")} className="navbar-button">
          Programación
        </button>
        <button onClick={() => handleCategoryClick("Marketing")} className="navbar-button">
          Marketing
        </button>
        <button onClick={() => handleCategoryClick("Idiomas")} className="navbar-button">
          Idiomas
        </button>
      </div>
      <div className="navbar-right">
        <CartWidget /> {/* Carrito de compras */}
      </div>
    </nav>  
  );
};

export default Navbar;


    
// <nav className="navbar">
// <div className="navbar-left">
//   <img
//     src={viteLogo}
//     alt="Logo"
//     className="navbar-logo"
//   />
//   <h1 className="navbar-title">Ecommerce</h1>
// </div>
// <div className="navbar-center">
// <button onClick={() => handleHomeClick()} className="navbar-button">
//     Home
//   </button>
//   <button onClick={() => handleCategoryClick("Programacion")} className="navbar-button">
//     Programación
//   </button>
//   <button onClick={() => handleCategoryClick("Marketing")} className="navbar-button">
//     Marketing
//   </button>
//   <button onClick={() => handleCategoryClick("Idiomas")} className="navbar-button">
//     Idiomas
//   </button>
// </div>
// <div className="navbar-right">
//   <CartWidget /> 
// </div>
// </nav>

