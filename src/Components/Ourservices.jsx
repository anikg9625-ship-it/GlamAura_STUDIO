import React from 'react'
import "./Css/Ourservices.css";
import bridal from '../assets/Images/bridal_makeup.jpg'
import airbrush from '../assets/Images/Airbrush_makeup.jpeg'
import recepation from '../assets/Images/Recepation_makeup.jpg'
import threeD from '../assets/Images/Threed_makeup.jpg'
const Ourservices = () => {
    const card=[
        {
            id:1,
            title:"Bridal Makeup",
            img: bridal
        },
        {
            id:2,
            title:"Airbrush Makeup",
            img: airbrush
        },
        {
            id:3,
            title:"Recepation Makeup",
            img: recepation
        },
        {
            id:4,
            title:"3D Makeup",
            img: threeD
        }
    ]
  return (
    <>
      <section className="services-section">
        <div className="container">

          <h2 className="services-title">Our Services</h2>

          <div className="row justify-content-center g-4">
            {
            card.map((item)=>(
            <div className="col-lg-3 col-md-6 col-12" key={item.id}>
              <div className="service-card text-center">

                <div className="image-wrapper">
                  <img 
                    src={item.img}
                    alt={item.title}
                  />
                </div>

                <h5 className="service-name">{item.title}</h5>

              </div>
            </div>
            ))
}
          </div>

        </div>
      </section>
    </>
  )
}

export default Ourservices;