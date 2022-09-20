import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div id="conatact">
      <div className="conatact-container">
          <div className="contact-left">
            <h1 className="sub-title">Contact me</h1>
            <p> <i class="fa-regular fa-envelope"></i> ntjobokoane@gmail.com</p>
            <p> <i class="fa-solid fa-mobile-screen"></i> +27 78 618 9190</p>
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
            <a className='btn-cv' href='/#'>
              Get CV
            </a>
          </div>
          <div className="contact-right" >
            <form>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
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
                rows={6}
                placeholder="Leave a message"
              ></textarea>
              <button typeof="submit">Post</button>
            </form>
          </div>
        </div>
      </div>
  )
}

export default Contact
