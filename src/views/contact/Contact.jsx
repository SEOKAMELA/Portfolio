// import React from "react";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";
import cv from "../../assets/documents/Seokamela David Ntjobokoane.pdf";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_portfolio', 'portfolio_website', form.current, 'E4c4zoPCSTdfNVfv8')
      .then((result) => {
          console.log(result.text);
          alert("message sent")
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <div id="conatact">
      <div className="conatact-container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact me</h1>
            <p>
              {" "}
              <i class="fa-regular fa-envelope"></i> ntjobokoane@gmail.com
            </p>
            <p>
              {" "}
              <i class="fa-solid fa-mobile-screen"></i> +27 78 618 9190
            </p>
            <div className="socila-icons">
              <a
                className="icons"
                href="https://www.linkedin.com/in/seokamela-ntjobokoane"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>

              <a
                className="icons"
                href="https://www.instagram.com/seokamela/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-square-instagram"></i>
              </a>

              <a
                className="icons"
                href="https://www.facebook.com/seokamela.ntjobokoane"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-square-facebook"></i>
              </a>
              <a
                className="icons"
                href="https://twitter.com/seokamela"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-square-twitter"></i>
              </a>
            </div>
            <a className="btn-cv btn-cv2" href={cv} download>
              Get CV
            </a>
          </div>
          <div className="contact-right">
            <form name="submit-to-google-sheet"  ref={form} onSubmit={sendEmail}>
            <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
              ></input>
              <input
                type="text"
                name="subject"
                placeholder="subject"
                required
              ></input>
              <input
                typeof="email"
                name="email"
                placeholder="Your email"
                required
              ></input>
              <textarea
                name="message"
                rows={3}
                placeholder="Leave a message"
              ></textarea>
              <button className="btn-post btn-post" typeof="submit" value="Send" >
                Post
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
