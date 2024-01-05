import "./modal.css";
import React from "react";
import NewEventForm from "../react10_Select/NewEventForm";

function Modal({ closeModal, isModeModal, newEvent }) {
    return (
        <div>
            <div className="modal-backdrop">
                <div
                    className="modal"
                    style={{
                        border: "3px solid",
                        borderColor: isModeModal ? "yellowgreen" : "red",
                        textAlign: "center",
                    }}
                >
                    <h1>Axihero</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Explicabo, doloribus! Doloremque, ex.
                    </p>
                    <button
                        className={isModeModal ? "modal-btn" : ""}
                        onClick={closeModal}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
