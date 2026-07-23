import React from 'react'
import Slider1 from '../assets/Images/Slider1.jpg'
import Slider2 from '../assets/Images/Slider2.avif'
import Slider3 from '../assets/Images/Solider3.avif'

const Sliderimage = () => {
  return (
    <>
      <div className="container p-2 p-md-3 mt-4 mt-md-5 mb-4">

        <h3 
          className="text-center fw-bold mb-3 mb-md-4"
          style={{color:"#c2185b"}}
        >
          Our Beauty Products
        </h3>

        <div 
          id="carouselExampleAutoplaying" 
          className="carousel slide carousel-fade shadow-lg rounded-4 overflow-hidden"
          data-bs-ride="carousel"
        >

          <div className="carousel-inner">

            <div className="carousel-item active">
              <img 
                src={Slider1} 
                className="d-block w-100"
                style={{
                  height: "60vh",
                  minHeight: "300px",
                  maxHeight: "500px",
                  objectFit: "cover"
                }}
                alt="Slide 1" 
              />
            </div>

            <div className="carousel-item">
              <img 
                src={Slider2} 
                className="d-block w-100"
                style={{
                  height: "60vh",
                  minHeight: "300px",
                  maxHeight: "500px",
                  objectFit: "cover"
                }}
                alt="Slide 2" 
              />
            </div>

            <div className="carousel-item">
              <img 
                src={Slider3} 
                className="d-block w-100"
                style={{
                  height: "60vh",
                  minHeight: "300px",
                  maxHeight: "500px",
                  objectFit: "cover"
                }}
                alt="Slide 3" 
              />
            </div>

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
    </>
  )
}

export default Sliderimage