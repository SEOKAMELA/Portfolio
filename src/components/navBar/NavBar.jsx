import React from 'react';
import logo from '../../assets/logo3.png'
import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-ligh">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/#">
                        <img src={logo} alt="Seokamela" id='logo' />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
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
        </div>

    );
}

export default NavBar;



// import React from 'react';
// import logo from '../../assets/logo3.png'


// const NavBar = () => {
//     return (
//         <div className="container">
//             <nav>
//                 <img src={logo} alt="" className='logo' />
//                 <ul>
//                     <li>
//                         <a href='/home'>
//                             home
//                         </a>
//                     </li>
//                     <li>
//                         <a href='/home'>
//                             home
//                         </a>
//                     </li>
//                     <li>
//                         <a href='/home'>
//                             home
//                         </a>
//                     </li>
//                 </ul>
//             </nav>
//         </div>
//     );
// }

// export default NavBar;

