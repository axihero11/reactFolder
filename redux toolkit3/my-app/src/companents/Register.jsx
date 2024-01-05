import React, { useState } from "react";
import { Input } from "../ui";
import { useDispatch, useSelector } from "react-redux";
import { registerUserStart } from "../slice/auth";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch()
    const {isLoading} = useSelector(state => state.auth)
    const registerHandle = (e) => {
        e.preventDefault()
        dispatch(registerUserStart())
    }
  return (
    <div className="text-center">
      <main className="form-signin w-25 m-auto">
        <form>
          <img
            className="mb-4"
            src="/docs/5.2/assets/brand/bootstrap-logo.svg"
            alt=""
            width="72"
            height="57"
          />
          <h1 className="h3 mb-3 fw-normal">Please register</h1>
          <Input label={"UserName"} state={name} setState={setName} />
          <Input label={"Email Address"} state={email} setState={setEmail} type={'email'}/>
          <Input label={"Password"} state={password}  setState={setPassword} type={'password'}/>

          <button onClick={registerHandle} disabled={isLoading} className="w-100 btn btn-lg btn-primary mt-2" type="submit">
            {isLoading ? 'loading...' : 'Register'}
          </button>
        </form>
      </main>
    </div>
  );
}

export default Register;
