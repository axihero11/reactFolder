import React from "react";
import "./footer.css";

import { BsInstagram } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="yellow_fooback">
        <div className="blue_fooback"></div>
        <div className="black_fooback"></div>
      </div>
      <div className="footer_container">
        <div className="footer_item">
          <div className="footer_box">
            <h1>01</h1>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
          <div className="footer_box">
            <h1>01</h1>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
          <div className="footer_box">
            <h1>01</h1>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </div>
        <div className="footer_regis">
          <div className="regis_footer">
            <div className="regis_box">
              <h1>Need Help?</h1>
              <p>
                Our specialists will contact you for details and clarification.
                We’ll be glad to help you find the course.
              </p>
              <div className="regis_icons">
              <a href="https://www.instagram.com/mt_academy_uz/">
                  <BsInstagram className="icon" />
                </a>
                <a href="https://xn--80affa3aj0al.xn--80asehdb/#@mt_academy_uz">
                  <FaTelegramPlane className="icon" />
                </a>
                <a href="https://xn--80affa3aj0al.xn--80asehdb/#@mt_academy_uz">
                  <BsTwitter className="icon" />
                </a>
                <a href="https://xn--80affa3aj0al.xn--80asehdb/#@mt_academy_uz">
                  <FaFacebookF className="icon" />
                </a>
              </div>
            </div>
            <div className="regis_input">
              <div className="input_box">
                <span>
                  <label htmlFor="ism">Ism</label>
                  <input type="text" placeholder="Ismingiz" />
                </span>
                <span>
                  <label htmlFor="fam">Familiya</label>
                  <input type="text" placeholder="Familiyangiz" />
                </span>
              </div>
              <div className="input_box">
                <span>
                  <label htmlFor="numer">Numer</label>
                  {/* <InputMask
                    className="nomer"
                    mask="+999 (99) 999 99 99"
                    pattern="^\d{4} \d{4} \d{4} \d{4}$"
                    placeholder="+999 (99) 999 99 99"
                  /> */}
                </span>
                <span>
                  <label htmlFor="kurs">Kurs</label>
                  <input type="text" placeholder="Qaysi kursga" />
                </span>
              </div>
              <button>Ruyxatdan utish</button>
            </div>
          </div>
        </div>
        <div className="after_container">
          <div className="after_item">

            <a href="https://xn--80affa3aj0al.xn--80asehdb/#@axihero1">
            <FaTelegramPlane className="icon" />
              After <ins>axihero1</ins>
            </a> 

            <a href="https://www.instagram.com/axihero1/">
            <BsInstagram className="icon" />
              After <ins>axihero1</ins>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
