import React from "react";
import { Link } from "react-router-dom";
import "./Css/Footer.css";

const Footer = () => {
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
            </div>


            <div className="col-lg-2 col-md-6 col-12">
              <h5>Quick Links</h5>

              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/services">Services</Link>
                </li>

                <li>
                  <Link to="/about">About Us</Link>
                </li>

                <li>
                  <Link to="/contact">Contact</Link>
                </li>
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

              <p>
                📍 Delhi, India
              </p>

              <p>
                📞 +91 9870482604
              </p>

              <p>
                ✉ glamaurastudio@gmail.com
              </p>

            </div>

          </div>


          <hr />


          <div className="footer-bottom text-center">
            <p>
              © 2026 GlamAura STUDIO. All Rights Reserved.
            </p>
          </div>


        </div>

      </footer>
    </>
  );
};

export default Footer;