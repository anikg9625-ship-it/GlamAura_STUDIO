import React from 'react'
import Slider1 from '../assets/Images/Slider1.jpg'
import Slider2 from '../assets/Images/Slider2.avif'
import Slider3 from '../assets/Images/Solider3.avif'

const Sliderimage = () => {
  return (
    <div className="container mt-5 mb-4">

      <h3 
        className="text-center fw-bold mb-4"
        style={{
          color:"#c2185b",
          letterSpacing:"1px"
        }}
      >
        Our Beauty Products
      </h3>

      <div 
        id="carouselExampleAutoplaying" 
        className="carousel slide carousel-fade shadow-lg rounded-4 overflow-hidden"
        data-bs-ride="carousel"
        data-bs-interval="2500"
      >

        <div className="carousel-inner">

          {[Slider1, Slider2, Slider3].map((img, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
              <div className="position-relative">

                <img 
                  src={img} 
                  className="d-block w-100"
                  style={{
                    height: "65vh",
                    minHeight: "320px",
                    maxHeight: "520px",
                    objectFit: "cover",
                    objectPosition: "center"
                  }}
                  alt="slide"
                />

                <div 
                  className="position-absolute w-100 h-100"
                  style={{
                    top:0,
                    left:0,
                    background:"linear-gradient(to top, rgba(0,0,0,0.4), transparent)"
                  }}
                ></div>

              </div>
            </div>
          ))}

        </div>

        <button 
          className="carousel-control-prev" 
          type="button" 
          data-bs-target="#carouselExampleAutoplaying" 
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button 
          className="carousel-control-next" 
          type="button" 
          data-bs-target="#carouselExampleAutoplaying" 
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>

      </div>

    </div>
  )
}

export default Sliderimage