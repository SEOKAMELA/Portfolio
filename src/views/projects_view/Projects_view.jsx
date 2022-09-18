import React from "react";
import "./Projects_view.css";
import logo from "../../assets/images/splash.jpeg";
import logo2 from "../../assets/images/1.png";

const ProjectsView = () => {
  return (
    <div id="projects">
        <h1 className="sub-title">Projects</h1>
        <div className="projects-list">
          <div className="project">
            <img src={logo} alt="Seokamela" id="logo" />
            <div className="layer">
              <h4>Ballot</h4>
              <p>
                A smart contract mobile app using Flutter and Rust.
              </p>
              <a href="/#">
                <i class="fa-solid fa-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <div className="project">
            <img src={logo2} alt="Seokamela" id="logo" />
            <div className="layer">
              <h4>SnackTime Web app</h4>
              <p>
                A full stack mobile app. for food delivery, 
                Using React and PHP
              </p>
              <a href="/#">
                <i class="fa-solid fa-up-right-from-square"></i>
              </a>
            </div>
          </div>
          {/* <div className="project">
            <img src={logo} alt="Seokamela" id="logo" />
            <div className="layer">
              <h4>Mobile app</h4>
              <p>
                This a a smart contract voting system, using flutter in the
                front end
              </p>
              <a href="/#">
                <i class="fa-solid fa-up-right-from-square"></i>
              </a>
            </div> 
          </div> */}
          
        </div>
        {/* <a  className="btn-seemore" href="/#"> more </a>  */}
      </div>
  );
};

export default ProjectsView;
