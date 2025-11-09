import React from "react";
import "../App.css";


const Navbar = () => {
  return (
    <div className="container blur mb-3">
      <div className="navbar ">
      <div className="navbar-left">
        <img
          className="nav-img"
          src="https://res.cloudinary.com/dbtkdz3qg/image/upload/v1731494018/xko1h9ekgakfhfvoadbq.png"
          alt="Logo"
        />
      </div>
      <div className="navbar-right">
        <a className="a-element" href="#home">Home</a>
        <a className="a-element" href="#about-me">About</a>
        <a className="a-element" href="#services">Services</a>
        <a className="a-element" href="#contact">Contact</a>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
