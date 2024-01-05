import "./modal.css";
import React from "react";
import NewEventForm from "../react11_useRef/NewEventForm";

function Modal({ closeModal, isModeModal ,newEvent}) {
  return (
    <div>
      <div className="modal-backdrop">
        <div
          className="modal"
          style={{
            border: "3px solid",
            borderColor:isModeModal ? "yellowgreen" : "red",
            textAlign: "center",
          }}
        >
          <NewEventForm newEvent={newEvent}/>
          <button className={isModeModal ? "modal-btn" : ""} onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
