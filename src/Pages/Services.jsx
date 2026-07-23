import React from 'react'
import Ourservices from '../Components/Ourservices'
import "../Components/Css/Services.css"

const Services = () => {

  const services = [
    {
      title:"Bridal Makeup",
      desc:"Look stunning on your special day with our premium bridal makeup services designed according to your personality and style."
    },
    {
      title:"Party Makeup",
      desc:"Get a glamorous and elegant look for parties, events, and special occasions with our expert makeup artists."
    },
    {
      title:"HD Makeup",
      desc:"Experience flawless HD makeup with a natural finish using high-quality professional products."
    },
    {
      title:"Airbrush Makeup",
      desc:"Lightweight and long-lasting airbrush makeup for a smooth and perfect look."
    },
    {
      title:"Hairstyle Services",
      desc:"Complete your look with beautiful hairstyles customized for every occasion."
    },
    {
      title:"Home Makeup Service",
      desc:"Enjoy professional makeup services at your home with comfort and convenience."
    }
  ]

  return (
    <>
      <section className="services-page">

        <div className="container">
           <Ourservices />

          <h1 className="text-center">
            Our Beauty Services
          </h1>

          <p className="text-center service-text">
            We provide premium makeup and beauty services to make you look
            confident, beautiful, and special for every occasion.
          </p>

          <div className="row mt-5">

            {
              services.map((item,index)=>(

                <div className="col-lg-4 col-md-6 col-12 mb-4" key={index}>

                  <div className="service-card">

                    <h4>
                      {item.title}
                    </h4>

                    <p>
                      {item.desc}
                    </p>

                    <button className="btn btn-light px-4 rounded-pill fw-bold">
                      Book Now
                    </button>

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

export default Services