import React from 'react'
import one from '../assets/images/UX Pilot - Superfast UX_UI Design with AI/one.png'

const Header = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-start g-5">
          <div className="col-lg-6">
            <h1 className="hero-title">Board Games That Don't Take Themselves Too Seriously</h1>
            <p className="hero-text">Welcome to Aurora, where we craft hilariously sarcastic board games that bring comfort and chaos to your game nights. Because life's too short for boring games.</p>
            <div className="hero-buttons">
              <button className="btn btn-explore">Explore Games</button>
              <button className="btn btn-info">Call for Info</button>
            </div>
          </div>
          <div className="col-lg-6">
            <img src={one} alt="Board Games" className="hero-image"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header