import React from "react";
import Image from "../assets/Images/Image-Card.jpg";
import { Link } from "react-router-dom";

const Imagecard = () => {
  return (
    <>
      <div className="container-fluid py-5 mb-4" style={{ backgroundColor: "#e91e63" }}>

        <div className="container">

          <h2 className="text-center fw-bold text-white mb-5">
            About Our Process
          </h2>

          <div className="row align-items-center shadow-lg p-4 rounded bg-white">

            <div className="col-lg-6 col-12">
              <img
                src={Image}
                className="img-fluid rounded shadow-lg w-100"
                alt="Makeup Process"
              />
            </div>

            <div className="col-lg-6 col-12 mt-4 mt-lg-0">

              <p className="text-muted mb-3">
                We are one of the top makeup artists in Delhi with our Makeup Studio and Academy.
                We provide high-quality education and professional skills in makeup.
              </p>

              <p className="text-muted mb-3">
                We specialize in <span className="fw-bold text-dark">
                  Bridal, Party, Engagement, HD & Airbrush Makeup
                </span> along with complete hairstyle services.
              </p>

              <p className="text-muted mb-3">
                We also offer <span className="fw-bold text-dark">
                  home services
                </span> for your comfort and use only <span className="fw-bold text-dark">
                original branded products</span> for a flawless look.
              </p>

              <p className="text-muted mb-4">
                Our team is friendly, experienced, and dedicated to making you feel confident
                and beautiful for every occasion.
              </p>

              <ul className="list-unstyled">
                <li>✔ Bridal & Party Makeup</li>
                <li>✔ HD & Airbrush Makeup</li>
                <li>✔ Hairstyle Services</li>
                <li>✔ Home Service Available</li>
                <li>✔ 100% Original Products</li>
              </ul>

              <Link 
                to="/services" 
                className="btn btn-info text-white mt-3 px-4"
              >
                Explore..
              </Link>

            </div>

          </div>

        </div>

      </div>
    </>
  );
};

export default Imagecard;