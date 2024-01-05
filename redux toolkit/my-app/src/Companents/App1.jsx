import React, { useState } from "react";
import "../App.css";
import Main from "./Main/Main";
import { GrClose } from "react-icons/gr";
import { SlMenu } from "react-icons/sl";
import About from './About/About';

function App1() {
    const [isnavbar, setIsNavbar] = useState(false);

    const openNavbar = () => {
        setIsNavbar(true);
    };
    const closeNavbar = () => {
        setIsNavbar(false);
    };

    return (
        <div className="big_container">
            <div className={isnavbar ? "open" : "close"}>
                <div className="navbar_right">
                    <div style={isnavbar ? {marginRight:"0"} : {marginRight:"25vw"}} className="active">
                        <div className="nav_right">
                            <GrClose onClick={closeNavbar} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="small_container">
                <div className="navbar">
                    <div className="nav">
                        <h1>Business</h1>
                        <div className="span">
                            <a href="#">Home</a>
                            <a href="#">Services</a>
                            <a href="#">Portfolio</a>
                            <a href="#">Pricing</a>
                            <a href="#">Team</a>
                            <a href="#">Contact</a>
                        </div>
                    </div>
                    <div className="nav_button" onClick={openNavbar}>
                        <SlMenu />
                    </div>
                </div>
                <div className="container">
                    <Main />
                    <About/>
                </div>
            </div>
        </div>
    );
}

export default App1;
