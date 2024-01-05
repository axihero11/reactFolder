import React, { useState } from "react";

function Input({label,state,setState,type='text'}) {
  return (
    <div>
      <div className="form-floating">
        <input value={state} onChange={(e) => setState(e.target.value)} type={type} className="form-control" id="floatingInput" placeholder={label} />
        <label htmlFor="floatingInput">{label}</label>
      </div>
    </div>
  );
}

export default Input;
