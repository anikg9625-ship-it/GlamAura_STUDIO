import React from 'react'
import Navbar from './Navbar'
import Videosection from './Videosection'
import Ourservices from './Ourservices'
import Sliderimage from './Sliderimage'
import Imagecard from './Imagecard'
import Reviewsection from './Reviewsection'

import { Route,Routes } from 'react-router-dom'
const Layout = () => {
  return (
    <div>
      <Videosection></Videosection>
      <Ourservices></Ourservices>
      <Sliderimage></Sliderimage>
      <Imagecard></Imagecard>
      <Reviewsection></Reviewsection>
    </div>
  )
}

export default Layout
