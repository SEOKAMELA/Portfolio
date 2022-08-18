import React from 'react';
import logo from '../../assets/logo3.png'

const NavBar = () => {
    return (<nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand" href="/#">
                <img src={logo}  alt="SSS" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>


            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/#">About Me</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#">Education</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#">Experince</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#">Projects</a>
                    </li>
                    <button class='hi-button'>
                        Send Hi
                    </button>
                </ul>
            </div>

        </div>
    </nav>
    );
}

export default NavBar;
