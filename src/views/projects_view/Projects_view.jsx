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
                    <div className="project">
                        <img src={logo} alt="Seokamela" id='logo' />
                        <div className="layer">
                            <h3>
                                Mobile app
                            </h3>
                            <p>
                                This a a smart contract voting system, using flutter in the front end
                            </p>
                            <a href='#'><i class="fa-solid fa-up-right-from-square"></i></a>
                        </div>
                    </div>
                    <div className="project">
                        <img src={logo2} alt="Seokamela" id='logo' />
                        <div className="layer">
                            <h3>
                                Mobile app
                            </h3>
                            <p>
                                This a a smart contract voting system, using flutter in the front end
                            </p>
                            <a href='#'><i class="fa-solid fa-up-right-from-square"></i></a>
                        </div>
                    </div>
                    <div className="project">
                        <img src={logo} alt="Seokamela" id='logo' />
                        <div className="layer">
                            <h3>
                                Mobile app
                            </h3>
                            <p>
                                This a a smart contract voting system, using flutter in the front end
                            </p>
                            <a href='#'><i class="fa-solid fa-up-right-from-square"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsView;
