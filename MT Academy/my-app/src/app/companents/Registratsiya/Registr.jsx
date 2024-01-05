import React from "react";
import "./registr.css";

function Registr({ active, setActive }) {
  const removeItem = () => {
    setActive(false);
  };
  return (
    <div>
      <div
        className="registr_container"
        style={{ display: active ? "block" : "none" }}
      >
        <div className="registr_item">
          <div className="registr_box">
            <div className="registr_input">
              <label htmlFor="ism">Ismingiz</label>
              <br />
              <input type="text" id="ism" placeholder="Ismingiz" />
             
              <label htmlFor="num"> No'mer</label>
              <br />
              <input type="text" placeholder="Telefon Raqamingiz" />
            </div>
            <div className="registr_input">
            <label htmlFor="fam">Familiyangiz</label><br />
              <input type="text" id="fam" placeholder="Familiyangiz" />
              <label htmlFor="kurs"> Kurs</label>
              <input type="text" id="kurs" placeholder="Qaysi Kursaga" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registr;
