import React from 'react';
import image from '../../assets/me.png'
import './Screen_two.css'





const ScreenTwo = () => {

    function openTab() {

    

        // console.log("HEllo world")
    
        // var i = 0
        // if(i === 3) {
        //     tablinks.classList.remove("active-link")
    
        // }
    
    }
    


    // var tablinks = document.getElementsByClassName("tab-links")
    // var tancontents = document.getElementsByClassName("tab-contents")

    // function openTab(tabname) {

    //     for (var tablinks of tablinks) {
    //         tablinks.classList.remove("active-link")
    //     }
    //     for (var tancontent of tancontents) {
    //         tancontent.classList.remove("active-tab")
    //     }

    // }


    // function openTab() {
    //     // const sign_in_btn = document.querySelector("#sign-in-btn");
    //     // const sign_up_btn = document.querySelector("#sign-up-btn");
    //     // const container = document.querySelector(".container");
    //     // sign_up_btn.addEventListener("click", () => {
    //     //   container.classList.add("sign-up-mode");
    //     // });

    //     // sign_in_btn.addEventListener("click", () => {
    //     //   container.classList.remove("sign-up-mode");
    //     // });
    //   }

 


    return (
        
        <div id="about-me">
            <div className="about-row">
                <div className="pic-col">
                    <img src={image} alt="" />
                </div>
                <div className="about-col">
                    <h1 className='sub-titlle'>whoami</h1>
                    <p className='title'>
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
                    <div className="tab-titles">
                        <p className="tab-links active-link" onClick={ () => alert()}>
                            Skils
                        </p>
                        <p className="tab-links " onClick={() => openTab()}>
                            Experience
                        </p>
                        <p className="tab-links" onClick={() =>  openTab()}>
                            Education
                        </p>
                    </div>
                    <div className="tab-contents active-tab" id='skills'>
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
                    <div className="tab-contents" id='experience'>
                        <ul>
                            <li>
                                <span>Web Developer</span>
                                <br />
                                Intern at Lepsta inc
                                Backend
                            </li>
                        </ul>
                    </div><div className="tab-contents" id='education'>
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
