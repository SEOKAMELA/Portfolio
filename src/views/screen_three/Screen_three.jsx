import React from 'react'
import './Screen_three.css'

const ScreenThree = () => {
  return (
    <div id="services">
      <div className="container">
        <h1 className="sub-titlle">My services</h1>
        <div className="services-list">
          <div>
            <h2>Web Development</h2>
            <p>Javascript HTML CSS</p>
            <a href="/#">learn more</a>
          </div>
          <div>
            <h2>mobile development</h2>
            <p>Flutter Dart</p>
            <a href="/#">learn more</a>
          </div>
          <div>
            <h2>Backend development</h2>
            <p>Java, Pyhton</p>
            <a href="/#">learn more</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScreenThree
