import React from 'react';
import './Projects_view.css'
import logo from '../../assets/images/splash.jpeg'
import logo2 from '../../assets/images/search.jpeg'



const ProjectsView = () => {
    return (
        <div id="projects">
            <div className="container">
                <h1 className='sub-title'>
                    Projects
                </h1>
                <div className="projects-list">
                    <div className="projects">
                        <img src={logo} alt="Seokamela" id='logo' />
                    </div>
                    <div className="projects">
                        <img src={logo2} alt="Seokamela" id='logo' />
                    </div>                    <div className="projects">
                        <img src={logo} alt="Seokamela" id='logo' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsView;
