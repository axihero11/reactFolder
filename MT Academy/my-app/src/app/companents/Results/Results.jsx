import React,{useState} from "react";
import "./results.css";

import img1 from "../../Assests/img2.png";
import ResultsTop from "./ResultsTop";

function Results() {
const [active,setActive] = useState(false)




  return (
    <>
      <div className="result_body">
        <div className="yellow_cont"></div>
        <div className="blue_cont"></div>
        <div className="result_container">
          <div className="result_item">
            <div className="result_box1 " >
              <img src={img1} alt="" />
            </div>
            <div className="result_box1 box ">
              <img src={img1} alt="" />
            </div>
            <div className="result_box1 top">
              <img src={img1} alt="" />
            </div>
            <div className="result_box1 box top">
              <img src={img1} alt="" />
            </div>
          </div>
          <div className="result_item result_add">
            <div className="result_box" onClick={() => setActive((prev) => !prev)}>
              <div className="icon_box"></div>
              <h3>HOW WE TEACH</h3>
              <i>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur
              </i>
              <ins>MORE</ins>
            </div>
            <div className="result_box">
              <div className="icon_box"></div>
              <h3>HOW WE TEACH</h3>
              <i>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur
              </i>
              <ins>MORE</ins>
            </div>
            <div className="result_box">
              <div className="icon_box"></div>
              <h3>HOW WE TEACH</h3>
              <i>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur
              </i>
              <ins>MORE</ins>
            </div>
            <div className="result_box">
              <div className="icon_box"></div>
              <h3>HOW WE TEACH</h3>
              <i>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur
              </i>
              <ins>MORE</ins>
            </div>
          </div>
        </div>
      <ResultsTop active={active} setActive={setActive}/>
      </div>
    </>
  );
}

export default Results;
