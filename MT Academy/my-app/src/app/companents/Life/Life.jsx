import React from "react";
import "./life.css";
import img2 from "../../Assests/img2.png";
import { AiOutlineCheck } from "react-icons/ai";

function Life() {
  return (
    <div>
      <div className="back_life"></div>
      <div className="life_container">
        <h1>What Is a Life Coach?</h1>
        <div className="life_item">
          <div className="life_img">
            <img src={img2} alt="" />
          </div>
          <div className="life_text">
            <div className="life_box">
              <AiOutlineCheck className="icons" />
              <i>
                Most vegetables are naturally low in fat and calories. Click
                again or double click to start editing the text. Duis aute irure
                dolor in reprehenderit in voluptate velit.
              </i>
            </div>
            <div className="life_box">
              <AiOutlineCheck className="icons" />
              <i>
                Most vegetables are naturally low in fat and calories. Click
                again or double click to start editing the text. Duis aute irure
                dolor in reprehenderit in voluptate velit.
              </i>
            </div>
            <div className="life_box">
              <AiOutlineCheck className="icons" />
              <i>
                Most vegetables are naturally low in fat and calories. Click
                again or double click to start editing the text. Duis aute irure
                dolor in reprehenderit in voluptate velit.
              </i>
            </div>
            <div className="life_box">
              <AiOutlineCheck className="icons" />
              <i>
                Most vegetables are naturally low in fat and calories. Click
                again or double click to start editing the text. Duis aute irure
                dolor in reprehenderit in voluptate velit.
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Life;
