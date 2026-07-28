import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import "./Css/Footer.css";

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <footer className="footer-section">

        <div className="container">

          <div className="row gy-4">

            <div className="col-lg-4 col-md-6 col-12">
              <h3 className="footer-logo">
                GlamAura <span>STUDIO</span>
              </h3>

              <p>
                We provide premium makeup services with a perfect blend of
                beauty, creativity, and confidence. Our expert artists create
                stunning looks for every special occasion.
              </p>

              <a
                href="https://www.instagram.com/sparklewithkavi/"
                target="_blank"
                rel="noopener noreferrer"
                className="insta-btn"
              >
                <FaInstagram className="insta-icon" /> @sparklewithkavi
              </a>

            </div>


            <div className="col-lg-2 col-md-6 col-12">
              <h5>Quick Links</h5>

              <ul>
                <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
                <li><Link to="/services" onClick={scrollToTop}>Services</Link></li>
                <li><Link to="/about" onClick={scrollToTop}>About Us</Link></li>
                <li><Link to="/contact" onClick={scrollToTop}>Contact</Link></li>
              </ul>
            </div>


            <div className="col-lg-3 col-md-6 col-12">
              <h5>Our Services</h5>

              <ul>
                <li>Bridal Makeup</li>
                <li>Party Makeup</li>
                <li>HD Makeup</li>
                <li>Airbrush Makeup</li>
                <li>Hairstyle Services</li>
              </ul>
            </div>


            <div className="col-lg-3 col-md-6 col-12">
              <h5>Contact Us</h5>

              <p>📍 C-44, Govindpuram Ghaziabad, UP, India</p>
              <p>📞 +91 9870482604</p>
              <p>✉ kavitasingh987048@gmail.com</p>

            </div>

          </div>

          <hr />

          <div className="footer-bottom text-center">
            <p>© 2026 GlamAura STUDIO. All Rights Reserved.</p>
          </div>

        </div>

      </footer>
    </>
  );
};

export default Footer;