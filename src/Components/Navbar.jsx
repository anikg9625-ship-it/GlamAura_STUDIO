import React from "react";
import "./Css/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {

  const closeMenu = () => {
    const menu = document.getElementById("navbarMenu");
    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar py-3 fixed-top">

      <div className="container">

        <Link className="navbar-brand fw-bold" to="/">
          GlamAura <span>Studio</span>
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">

          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-4 text-center">

            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeMenu}>Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/services" onClick={closeMenu}>Services</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={closeMenu}>About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={closeMenu}>Contact</Link>
            </li>

          </ul>

          <div className="ms-lg-4 text-center mt-3 mt-lg-0">
            <a href="tel:+919870482604" className="book-btn" onClick={closeMenu}>
              Call Now
            </a>
          </div>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;