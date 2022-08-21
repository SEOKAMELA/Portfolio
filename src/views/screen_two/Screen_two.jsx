import React from 'react';
import image from '../../assets/me.png'

const ScreenTwo = () => {
    return (
        <div id="whoami">
            <div className="container">
                <div className="row">
                    <div className="my-pitcure">
                        <h1>
                            <img src={image} alt="" />
                        </h1>
                    </div>
                    <div className="about-me">

                        <h1 className='about'>the story</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScreenTwo;
