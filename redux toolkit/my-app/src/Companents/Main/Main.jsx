import React from 'react'
import "./main.css"
import img from "../../Picture/mainimg.jpg"

function Main() {
  return (
    <div className='main'>
        <div className="text_box">
            <h1>Corporate & Business Site Template By Ayro UI.</h1>
            <p>We are a digital agency that helps brands to achieve their business outcomes. We see technology as a tool to create amazing things.</p>
            <div className="main_button">
                <button>GET STARTED</button>
                <div className="span"></div>
                <h3>Watch Intro</h3>
            </div>
        </div>
        <div className="img_box">
            <img src={img} alt="" />
        </div>
      
    </div>
  )
}
export default Main
