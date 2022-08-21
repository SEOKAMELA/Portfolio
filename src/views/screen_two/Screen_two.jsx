import React from 'react';
import image from '../../assets/me.png'
import './Screen_two.css'

const ScreenTwo = () => {
    return (
        <div id="about-me">

            <div class="pic-col">
                <img src={image} alt="" />
            </div>

            <div class="about-col">
                <h1>
                    about me
                </h1>
            </div>

        </div>
    );
}

export default ScreenTwo;
