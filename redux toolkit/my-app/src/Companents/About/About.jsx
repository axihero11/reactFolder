import React from 'react'
import "./about.css"

import img from "../../Picture/about-img1.jpg"


function About() {
  return (
    <div>
      <div className="about_container">
        <div className="about_item">
            <div className="about_img">
                <img src={img} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
