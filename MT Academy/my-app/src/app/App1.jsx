import React,{useState} from "react";
import "./app.css";
import bg from "./Assests/back2.jpg";
import Head from "./companents/Head/Head";
import Life from "./companents/Life/Life";
import Popular from "./companents/Popular/Popular";
import Results from "./companents/Results/Results";
import Leader from './companents/Leader/Leader';
import Speech from './companents/Speech/Speech';
import Footer from "./companents/Footer/Footer";
import Registr from "./companents/Registratsiya/Registr";

function App1() {

  const [active,setActive] = useState(false)

  return (
    <>
      <div className="back_img"></div>
      <img className="relative_bg" src={bg} />
      <div className="container-body">
        <div className="header-container padding">
          <div className="header-item">
            <h1>logo</h1>
            <div className="header-box">
              <button className="btn" onClick={() => setActive ((prev) => !prev)}>Qabulga yozilish</button>
            </div>
          </div>
          <Head />
          <Popular />
          <Results />
          <Life />
          <Leader />
          <Speech/>
          <Footer/>
          <Registr setActive={setActive} active={active} />
        </div>
      </div>
    </>
  );
}

export default App1;
