import React from "react";
import "./speech.css";

import img1 from "../../Assests/img1.png";
import img2 from "../../Assests/img4.png";

function Speech() {
  return (
    <div>
      <div className="speech_blue"></div>
      <div className="speech_white"></div>
      <div className="speech_container">
        <div className="speech_item">
          <img className="big_img" src={img1} alt="" />
          <div className="speech_box">
            <div className="img_box">
              <img src={img2} alt="" />
              <h3>COMPUTING & IT </h3>
            </div>
            <div className="img_box">
              <img src={img2} alt="" />
              <h3>COMPUTING & IT </h3>
            </div>
            <div className="img_box">
              <img src={img2} alt="" />
              <h3>COMPUTING & IT </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="beech_text">
        <h1>Flexible Distance Learning</h1>
        <p>
          Flexible Distance Learning We provide flexible and 24/7 online
          learning that fits around You. Become an industry leader with
          accredited undergraduate and postgraduate courses online. Fully
          Online.
        </p>
      </div>
    </div>
  );
}

export default Speech;
