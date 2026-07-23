import React from "react";
import "./Css/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg custom-navbar py-3 fixed-top shadow">

        <div className="container">

          <Link className="navbar-brand" to="/">
            GlamAura <span>STUDIO</span>
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

            <ul className="navbar-nav ms-auto gap-lg-4 text-center">

              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>

            </ul>

            <div className="ms-lg-4 text-center mt-3 mt-lg-0">
              <button className="book-btn">Book Now</button>
            </div>

          </div>

        </div>

      </nav>
    </>
  );
};

export default Navbar;