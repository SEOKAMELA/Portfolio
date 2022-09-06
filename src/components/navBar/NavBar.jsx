import React from 'react';
import logo from '../../assets/logo3.png'
import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-ligh">
                <div className="container-fluid">
                    <img src={logo} alt="Seokamela" id='logo' />

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a id='a'className="nav-link" href="/#" >whoami </a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="/#">services</a>
                            </li> */}
                            <li className="nav-item">
                                <a className="nav-link" href="/#">projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">post</a>
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

