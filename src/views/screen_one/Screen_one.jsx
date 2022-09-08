import React from "react";
import NavBar from "../../components/navBar/NavBar";
import "./Screen_one.css";

const ScreenOne = () => {
  return (
    <div>
      <NavBar />
      <div className="header-about">
        <p id="whoami">
          Hello world! <span className="wave">👋🏾</span>
        </p>
        <h1 className="my-name">
          I'm <span className="spane-name">Seokamela</span>
          <br />
          David Ntjobokoane
        </h1>
        <p>software developer</p>
        <a
          className="icons"
          href="https://www.instagram.com/seokamela/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-linkedin"></i>
        </a>

        <a
          className="icons"
          href="https://www.linkedin.com/in/seokamela-ntjobokoane"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-square-instagram"></i>
        </a>

        <a
          className="icons"
          href="https://www.facebook.com/seokamela.ntjobokoane"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-square-facebook"></i>
        </a>
        <a
          className="icons"
          href="https://github.com/SEOKAMELA"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-square-github"></i>
        </a>
        <a
          className="icons"
          href="https://twitter.com/seokamela"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-square-twitter"></i>
        </a>

        <a
          className="icons"
          href="https://stackoverflow.com/users/14793909/seokamela"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-stack-overflow"></i>
        </a>
      </div>
    </div>
  );
};

export default ScreenOne;
