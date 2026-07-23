import React from 'react'
import "../Components/Css/Reviewsection.css"

const Reviewsection = () => {

  const reviews = [
    {
      name:"Priya Sharma",
      review:"Amazing bridal makeup experience. The artist understood my look perfectly and made my special day memorable.",
      rating:"★★★★★"
    },
    {
      name:"Neha Verma",
      review:"Very professional team and beautiful makeup finish. They use premium products and provide amazing service.",
      rating:"★★★★★"
    },
    {
      name:"Riya Gupta",
      review:"Loved the hairstyle and makeup. The team is very friendly and made me feel comfortable throughout.",
      rating:"★★★★☆"
    }
  ]

  return (
    <>
      <section className="review-section">

        <div className="container">

          <h2 className="text-center">
            Client <span>Reviews</span>
          </h2>

          <p className="text-center review-text">
            Our clients trust us to create beautiful looks and unforgettable moments.
          </p>


          <div className="row mt-5">

            {
              reviews.map((item,index)=>(

                <div className="col-lg-4 col-md-6 col-12 mb-4" key={index}>

                  <div className="review-card">

                    <div className="stars">
                      {item.rating}
                    </div>

                    <p>
                      "{item.review}"
                    </p>

                    <h5>
                      {item.name}
                    </h5>

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

export default Reviewsection