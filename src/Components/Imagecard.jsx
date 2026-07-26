import React from "react";
import Image from "../assets/Images/Kavita-img1.png";
import { Link } from "react-router-dom";
import './Css/Imagecard.css'

const Imagecard = () => {
  return (
    <section className="lux-section">

      <div className="container">

        <div className="text-center lux-intro">
          <h1 className="main-title">Kavita Mishra</h1>
          <p className="sub-title">
            Luxury Makeup Artist ✨ Bridal • HD • Airbrush
          </p>
        </div>

        <div className="row lux-card align-items-center">

          <div className="col-lg-6 col-12 lux-image">
            <div className="img-wrapper">
              <img src={Image} alt="makeup" />
              <div className="img-badge">Premium Artist</div>
            </div>
          </div>

          <div className="col-lg-6 col-12 lux-content">

            <h2>Our Beauty Process</h2>

            <p>
              Certified makeup artist delivering elegant and long-lasting beauty using luxury techniques and premium products.
            </p>

            <p>
              Specialized in <span>Bridal, Engagement, Party, HD & Airbrush Makeup</span>
            </p>

            <div className="features">
              <div>✨ Flawless Bridal Looks</div>
              <div>✨ HD & Airbrush Finish</div>
              <div>✨ Hairstyling & Draping</div>
              <div>✨ Home Service Available</div>
            </div>

            <Link to="/services" className="lux-btn">
              Explore More →
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Imagecard;