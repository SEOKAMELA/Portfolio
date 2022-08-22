import React from 'react';
import NavBar from '../../components/navBar/NavBar';
import './Screen_one.css'


const ScreenOne = () => {
    return (
        <div>
            <NavBar />
            <div className="header-about">
                <p id='whoami'>
                    Hello world! <span className='wave'>👋🏾</span>
                </p>
                <h1 className="my-name">
                    I'm <span className='spane-name'>Seokamela</span>
                    <br/>
                    David Ntjobokoane
                </h1>
                <p>
                    software developer
                </p>
            </div>
        </div>

    );
}

export default ScreenOne;
