import React from "react";
import "./Projects_view.css";
import logo from "../../assets/images/splash.jpeg";
import logo2 from "../../assets/images/1.png";
import logo3 from "../../assets/images/Portfo.png";

const ProjectsView = () => {
  return (
  
    <div id="services-contants">
      <div className="projects">
        <div className="card">
          <div className="card__thumb">
            <img
              src={logo}
              alt="pic by Kyle Cottrell"
              className="card__image"
            />
            <figcaption className="card__caption">
              <h2 className="card__title">BALLOT</h2>
              <p className="card__snippet">
                A smart contract mobile app using Flutter and Rust.
              </p>
              <a href="/#" className="card__button">
                Read more
              </a>
            </figcaption>
          </div>
        </div>

        <div className="card">
          <div className="card__thumb">
            <img
              src={logo2}
              alt="pic by Kyle Cottrell"
              className="card__image"
            />
            <figcaption className="card__caption">
              <h2 className="card__title">SNACK TIME WEB APP</h2>
              <p className="card__snippet">
                A full stack mobile app. for food delivery, 
                Using React and PHP
              </p>
              <a href="/#" className="card__button">
                Read more
              </a>
            </figcaption>
          </div>
        </div>

        <div className="card">
          <div className="card__thumb">
            <img
              src={logo3}
              alt="pic by Kyle Cottrell"
              className="card__image"
            />
            <figcaption className="card__caption">
              <h2 className="card__title">DAY CARE WEBSITE</h2>
              <p className="card__snippet">
                A day care website using ReactJS.
              </p>
              <a href="/#" className="card__button">
                Read more
              </a>
            </figcaption>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsView;
