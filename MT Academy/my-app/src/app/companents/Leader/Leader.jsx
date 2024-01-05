import React from "react";
import "./leader.css";
import bigImg from "../../Assests/img1.png";
import img1 from "../../Assests/img4.png";

function Leader() {
  return (
    <div>
      <div className="leader_back">
        <div className="leader_body">
          <div className="leader_right"></div>
        </div>
      </div>
      <div className="leader_container">
        <div className="leader_item">
          <div className="leader_big_img">
            <img src={bigImg} alt="" />
          </div>
          <div className="leader_grid">
            <div className="leader_text">
              <h1>Leader in Executive Education</h1>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <button>READ MORE</button>
            </div>
            <div className="leader_small_img">
              <img src={img1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leader;
