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
                <h3>
                    I am a software Developer
                    who is passionate about
                    learning new technologies. I
                    have excellent
                    communication skills and
                    love helping others.
                    I am looking for an
                    opportunity where I can
                    apply and grow my IT skills
                    while bringing results to the
                    place of employment
                </h3>
            </div>

        </div>
    );
}

export default ScreenTwo;
