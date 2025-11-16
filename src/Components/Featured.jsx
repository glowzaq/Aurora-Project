import React from 'react'
import five from '../assets/images/UX Pilot - Superfast UX_UI Design with AI/five.png'
import six from '../assets/images/UX Pilot - Superfast UX_UI Design with AI/six.png'
import eight from '../assets/images/UX Pilot - Superfast UX_UI Design with AI/eight.png'

const Featured = () => {
    return (
        <section className="featured-section">
            <div className="container">
                <h2 className="section-title">Featured Games</h2>
                <p className="section-subtitle">Our most popular games that guarantee laughs and good times</p>

                <div className="row g-4">
                    <div className="col-lg-4 col-md-6">
                        <div className="game-card">
                            <img src={five}alt="Sarcasm: The Game" className="game-image"/>
                                <div className="game-content">
                                    <h3 className="game-title">Sarcasm: The Game</h3>
                                    <p className="game-description">Because regular conversation wasn't painful enough</p>
                                    <div className="game-footer">
                                        <span className="game-price">$29.99</span>
                                        <button className="btn btn-add-cart">Add to Cart</button>
                                    </div>
                                </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="game-card">
                            <img src={six} alt="Adulting is Hard" className="game-image"/>
                                <div className="game-content">
                                    <h3 className="game-title">Adulting is Hard</h3>
                                    <p className="game-description">A game about pretending you know what you're doing</p>
                                    <div className="game-footer">
                                        <span className="game-price">$34.99</span>
                                        <button className="btn btn-add-cart">Add to Cart</button>
                                    </div>
                                </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="game-card">
                            <img src={eight}alt="Small Talk Survival" className="game-image"/>
                                <div className="game-content">
                                    <h3 className="game-title">Small Talk Survival</h3>
                                    <p className="game-description">Navigate awkward conversations like a pro</p>
                                    <div className="game-footer">
                                        <span className="game-price">$24.99</span>
                                        <button className="btn btn-add-cart">Add to Cart</button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Featured