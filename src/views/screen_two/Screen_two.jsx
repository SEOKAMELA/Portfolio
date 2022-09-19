import React from "react";
import image from "../../assets/me.png";
import "./Screen_two.css";

const ScreenTwo = () => {
  function openTab(tabname) {
    var tablinks = document.getElementsByClassName("tab-links");
    var tancontents = document.getElementsByClassName("tab-contents");
    for (var tablink of tablinks) {
      tablink.classList.remove("active-link");
    }
    for (var tabcontant of tancontents) {
      tabcontant.classList.remove("active-tab");
    }

    document.addEventListener("click", function handleClick(event) {
      event.target.classList.add("active-link");
    });

    document.getElementById(tabname).classList.add("active-tab");
  }

  return (
    <div id="about-me">
      <div className="container">

      <div className="about-row">
        <div className="pic-col">
          <img src={image} alt="" />
        </div>
        <div className="about-col">
          <h1 className="sub-titlle">whoami</h1>

          <p className="title">
            <i class="fa-duotone fa-rectangle-terminal"></i>I am a software
            Developer who is passionate about learning new technologies. I have
            excellent communication skills and love helping others. I am looking
            for an opportunity where I can apply and grow my IT skills while
            bringing results to the place of employment{" "}
          </p>
          <div className="tab-titles">
            <p
              className="tab-links active-link"
              onClick={() => openTab("skills")}
            >
              Skills
            </p>
            <p className="tab-links " onClick={() => openTab("experince")}>
              Experience
            </p>
            <p className="tab-links" onClick={() => openTab("education")}>
              Education
            </p>
          </div>
          <div className="tab-contents active-tab" id="skills">
            <ul>
              <li>
                <span>Frontend</span>
                <br />
                Javascript, CSS, HTML DART
              </li>
              <li>
                <span>Backend</span>
                <br />
                Pyhton 3.9, Java 11, PHP 8
              </li>
              <li>
                <span>Tools</span>
                <br />
                React, Maven, Docker, Flutter, Git , Linux
              </li>
            </ul>
          </div>
          <div className="tab-contents" id="experince">
            <ul>
              <li>
                <span>Web Developer</span>
                <br />
                Intern at Lepsta inc Backend
              </li>
            </ul>
          </div>
          <div className="tab-contents" id="education">
            <ul>
              <li>
                <span>Wethinkcode_</span>
                <br />
                2020 cohort Software Developer (NQF level 5)
              </li>
              <li>
                <span>High school</span>
                <br />
                Mmathabo senior secondary Matric (Grade 12)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
      </div>

  );
};

export default ScreenTwo;
