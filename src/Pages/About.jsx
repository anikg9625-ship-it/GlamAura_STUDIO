import React from 'react'
import Image from "../assets/Images/Image-Card.jpg"
import "../Components/Css/About.css"

const About = () => {
  return (
    <>
      <section className="about-section">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-6 col-12">
              <img 
                src={Image}
                className="img-fluid rounded-4 shadow-lg"
                alt="GlamAura Studio"
              />
            </div>


            <div className="col-lg-6 col-12 mt-4 mt-lg-0">

              <h1>
                About <span>GlamAura Studio</span>
              </h1>

              <p>
                Welcome to GlamAura Studio, where beauty meets perfection.
                We are a professional makeup studio dedicated to creating
                elegant and stunning looks for every special occasion.
              </p>

              <p>
                Our expert makeup artists specialize in Bridal Makeup,
                Party Makeup, HD Makeup, Airbrush Makeup and complete
                Hairstyle Services. We focus on enhancing your natural beauty
                with creativity and perfection.
              </p>

              <p>
                We use only high-quality original products to provide a
                flawless and long-lasting makeup experience. Our friendly
                team ensures that every client feels comfortable, confident,
                and beautiful.
              </p>


              <div className="row mt-4">

                <div className="col-6">
                  <div className="about-box">
                    <h3>5+</h3>
                    <p>Years Experience</p>
                  </div>
                </div>

                <div className="col-6">
                  <div className="about-box">
                    <h3>200+</h3>
                    <p>Happy Clients</p>
                  </div>
                </div>

              </div>


            </div>

          </div>

        </div>

      </section>
    </>
  )
}

export default About