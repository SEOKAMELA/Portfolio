import React from 'react';
import logo from '../../assets/logo3.png'
import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-ligh">
                <div class="container-fluid">
                    {/* <a class="navbar-brand" href="/#">
                        <img src={logo} alt="Seokamela" id='logo' />
                    </a> */}
                    <img src={logo} alt="Seokamela" id='logo' />

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a id='a'class="nav-link" href="/#">whoami</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/#">services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/#">uptime</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/#">projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/#">post</a>
                            </li>
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

