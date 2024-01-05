import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../constants";

function Navbar() {
  return (
    <div>
      <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-3">
        <Link style={{ textDecoration: "none", color: "black" }} to={"/"}>
          <h2>Axi.hero</h2>
        </Link>

        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">

          <Link className="me-3 py-2 text-dark text-decoration-none" href="#" to={'/login'}>
            Login
          </Link>
          <Link className="me-3 py-2 text-dark text-decoration-none" href="#" to={'/register'}>
            Register
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
