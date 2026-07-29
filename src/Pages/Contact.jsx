import React from 'react'
import "../Components/Css/Contact.css"
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
return ( <section className="contact-section"> <div className="container">

```
    <h1 className="contact-title">
      Contact <span>Us</span>
    </h1>

    <p className="contact-text">
      Get in touch with GlamAura Studio and book your perfect beauty session.
      We are always ready to make your special moments more beautiful.
    </p>

    <div className="row mt-5 align-items-center">

      <div className="col-lg-7 col-12 mb-4">
        <div className="contact-card">
          <h3>GlamAura Studio</h3>
          <p>📍 C-44, Govindpuram Ghaziabad, UP, India</p>
          <p>📞 +91 9870482604</p>
          <p>✉ kavitasingh987048@gmail.com</p>
          <p>
             <a
                            href="https://www.instagram.com/sparklewithkavi/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="insta-btn"
                          >
                            <FaInstagram className="insta-icon" /> @sparklewithkavi
                          </a>
            
          </p>
        </div>
      </div>

      <div className="col-lg-5 col-12">
        <div className="contact-form">

          <input type="text" className="form-control" placeholder="Enter Your Name" />

          <input type="email" className="form-control" placeholder="Enter Your Email" />

          <input type="tel" className="form-control" placeholder="Enter Your Phone Number" />

          <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>

          <button className="contact-btn">
            Send Message
          </button>

        </div>
      </div>

    </div>
  </div>
</section>

)
}

export default Contact
