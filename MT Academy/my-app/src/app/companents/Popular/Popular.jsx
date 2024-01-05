import React from "react";
import "./popular.css";
import img1 from "../../Assests/img1.png";
import {BsArrowRight} from "react-icons/bs"

function Popular() {
  return (
    <div className="popular_body">
      <div className="popular_container">
        <div className="popular_item">
          <div className="popular_box">
            <h1>Top ten most popular courses for international students</h1>
            <img src={img1} alt="" />
            <p>
              Sample text. Click to select the text box. Click again or double
              click to start editing the text.
            </p>
          </div>
          <div className="popular_text">
            <strong>
              Business Studies General Business Finance Management Studies <br /> Law <br />
              Computer Science Economics Marketing Accounting Design
            </strong>
            <BsArrowRight className="icons"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popular;
