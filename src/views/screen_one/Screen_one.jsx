import React from 'react';
import NavBar from '../../components/navBar/NavBar';
import './Screen_one.css'


const ScreenOne = () => {
    return (
        <div>
            <NavBar />
            <div className="header-about">
                <p id='whoami'>
                    Software Developer
                </p>
                <h1 className="my-name">
                    Hi, I'm <span className='spane-name'>Seokamela</span>
                    <br>
                    </br>
                    David Ntjobokoane
                </h1>
            </div>
        </div>

    );
}

export default ScreenOne;
