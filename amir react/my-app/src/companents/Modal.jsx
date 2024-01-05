import React from "react";

function Modal({setModal,isModeModal}) {
    return (
        <div>
            <div
                className="modal_container"
                style={{
                    width: "550px",
                    height: "500px",
                    border: "2px solid",
                    borderColor: isModeModal ? "yellowgreen" : "red",
                    margin: "auto",
                    position: "absolute",
                    top:"200px",
                    left:"500px",
                    background:"blue"
                }}
            >
                <h1>Modal Title</h1>
                <p>This is the modal content.</p>
                <button onClick={()=> setModal(false)}>{isModeModal ? "modal-btn" : "close Modal"}</button>
            </div>
        </div>
    );
}

export default Modal;
