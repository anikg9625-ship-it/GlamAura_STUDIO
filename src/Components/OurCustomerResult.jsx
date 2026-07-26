import React from 'react'
import './Css/OurCustomerResult.css'
import Client1 from '../assets/Images/Client-img1.png'
import Client2 from '../assets/Images/Client-img2.png'
import Client3 from '../assets/Images/Client-img3.png'

const OurCustomerResult = () => {
  return (
    <section className="result-section">
      <div className="container">

        <div className="text-center result-intro">
          <h2>Our Happy Clients</h2>
          <p>Real Transformations • Real Beauty</p>
        </div>

        <div className="row result-row">

          <div className="col-lg-4 col-md-6 col-12">
            <div className="result-card">
              <img src={Client1} alt="client" />
              <div className="overlay">
                <h4>Bridal Glow</h4>
                <p>Flawless HD Finish</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="result-card">
              <img src={Client2} alt="client" />
              <div className="overlay">
                <h4>Party Look</h4>
                <p>Soft Glam Makeup</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="result-card">
              <img src={Client3} alt="client" />
              <div className="overlay">
                <h4>Airbrush Makeup</h4>
                <p>Luxury Finish</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default OurCustomerResult