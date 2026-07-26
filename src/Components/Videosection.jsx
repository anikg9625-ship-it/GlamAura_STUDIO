import React from 'react'
import Video from '../assets/Home_Page2.mp4'
import "./Css/Videosection.css"
import { Link } from 'react-router-dom'

const Videosection = () => {
  return (
    <section className="video-section">

      <div className="video-box">

        <video
          src={Video}
          className="home-video"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="video-overlay"></div>

        <div className="video-text">

          <span className="small-text">
            GlamAura Studio
          </span>

          <h1>
            Where Beauty Meets Perfection
          </h1>

          <p>
            Luxury makeup that enhances your natural glow and makes every moment unforgettable.
          </p>

          <Link to="/services">
            <button className="explore-btn">
              Explore Services
            </button>
          </Link>

        </div>

      </div>

    </section>
  )
}

export default Videosection