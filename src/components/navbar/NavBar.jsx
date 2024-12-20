import React from 'react';
import './Navbar.css'; 
import viteLogo from '/vite.svg'

const Navbar = ({ onCategorySelect }) => {
  const handleCategoryClick = (category) => {
    onCategorySelect(category);
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
        
        <button onClick={() => handleCategoryClick(null)} className="navbar-button">
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
    </nav>
  );
};

export default Navbar;
