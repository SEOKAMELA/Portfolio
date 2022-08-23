import React from 'react';
import image from '../../assets/me.png'
import './Screen_two.css'

const ScreenTwo = () => {


    // var tablinks = document.getElementsByClassName("tab-links")
    // var tancontents = document.getElementsByClassName("tab-contents")

    // function openTab(tabname) {

    //     for (var tablink of tablinks) {
    //         tablink.classList.remove("active-link")
    //     }
    //     for (var tancontent of tancontents) {
    //         tancontent.classList.remove("active-tab")
    //     }
    // }

    return (
        <div id="about-me">
            <div class="about-row">
                <div class="pic-col">
                    <img src={image} alt="" />
                </div>
                <div class="about-col">
                    <h1 class='sub-titlle'>whoami</h1>
                    <p class='title'>
                        ~ I am a software Developer who is passionate about
                        learning new technologies. I
                        have excellent
                        communication skills and
                        love helping others.
                        I am looking for an
                        opportunity where I can
                        apply and grow my IT skills
                        while bringing results to the
                        place of employment </p>
                    <div class="tab">
                        <p className="tab-links active-link">
                            Skils
                        </p>
                        <p className="tab-links" >
                            Experince
                        </p>
                        <p className="tab-links" >
                            Education
                        </p>
                    </div>
                    <div className="tab-contents active-tab">
                        <ul>
                            <li>
                                <span>Frontend</span>
                                <br />
                                Javascript, CSS, HTML
                                DART
                            </li>
                            <li>
                                <span>Backend</span>
                                <br />
                                Pyhton 3.9, Java 11, PHP 8
                            </li>
                            <li>
                                <span>Tools</span>
                                <br />
                                React, Maven, Docker, Flutter, Git , Linux
                            </li>
                        </ul>
                    </div>
                    <div className="tab-contents">
                        <ul>
                            <li>
                                <span>Web Developer</span>
                                <br />
                                Intern at Lepsta inc
                                Backend
                            </li>
                        </ul>
                    </div><div className="tab-contents">
                        <ul>
                            <li>
                                <span>Wethinkcode_</span>
                                <br />
                                2020 cohort
                                Software Developer (NQF level 5)
                            </li>
                            <li>
                                <span>High school</span>
                                <br />
                                Mmathabo senior secondary
                                Matric (Grade 12)
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScreenTwo;
