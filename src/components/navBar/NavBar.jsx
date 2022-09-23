import React from "react";
import logo from "../../assets/logo3.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-ligh">
      <div className="container-fluid">
        <img src={logo} alt="Seokamela" id="logo" />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a id="a" className="nav-link" href="#about-me">
                whoami{" "}
              </a>
            </li>
            {/* <li className="nav-item">
                                <a className="nav-link" href="/#">services</a>
                            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#conatact">
                post
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
