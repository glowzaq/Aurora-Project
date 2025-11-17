import React from 'react'
import { Link } from 'react-router-dom'
import story from '../assets/images/UX Pilot - Superfast UX_UI Design with AI/story.webp'

const About = () => {
    return (
        <div>
            <section className="about-hero">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h1 className="hero-title">We Make Games That Don't Take Life Too Seriously</h1>
                            <p className="hero-subtitle">
                                Aurora Games was born from a simple idea: board games should be fun, irreverent, and occasionally make you question your life choices. We're here to prove that the best memories come from games that embrace the chaos of human interaction.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="story-section">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <h2 className="section-title">Our Story</h2>
                            <p className="story-text">
                                It all started with a game night gone hilariously wrong. Five friends, too much pizza, and a realization that most board games were either too serious or not sarcastic enough for our taste.
                            </p>
                            <p className="story-text">
                                Fast forward two years, countless prototypes, and more awkward play-test sessions than we'd like to admit, Aurora Games was born. We set out to create games that celebrate the weird, wonderful, and sometimes uncomfortable moments that make life interesting.
                            </p>
                            <p className="story-text">
                                Today, we're proud to bring laughter, chaos, and the occasional existential crisis to game nights everywhere. Because life's too short for boring games.
                            </p>
                        </div>
                        <div className="col-lg-6 px-4">
                            <img src={story}alt="Our Story" className="story-image" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="mission-section">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-8 text-center">
                            <h2 className="section-title">What Drives Us</h2>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6">
                            <div className="mission-card">
                                <div className="mission-icon">
                                    <i className="fas fa-lightbulb"></i>
                                </div>
                                <h3 className="mission-title">Innovation</h3>
                                <p className="mission-text">
                                    We're constantly pushing boundaries and creating games that challenge conventions. Because who said board games have to be traditional?
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="mission-card">
                                <div className="mission-icon">
                                    <i className="fas fa-laugh"></i>
                                </div>
                                <h3 className="mission-title">Humor</h3>
                                <p className="mission-text">
                                    Laughter is our secret ingredient. Every game is designed to bring joy, sarcasm, and the kind of humor that makes game nights unforgettable.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="mission-card">
                                <div className="mission-icon">
                                    <i className="fas fa-users"></i>
                                </div>
                                <h3 className="mission-title">Community</h3>
                                <p className="mission-text">
                                    Our players are our inspiration. We create games for real people who appreciate wit, sarcasm, and games that bring friends closer (or hilariously tear them apart).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="values-section">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-8 text-center">
                            <h2 className="section-title">By The Numbers</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="value-item">
                                <div className="value-number">50K+</div>
                                <div className="value-label">Games Sold</div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="value-item">
                                <div className="value-number">15</div>
                                <div className="value-label">Unique Games</div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="value-item">
                                <div className="value-number">10K+</div>
                                <div className="value-label">Happy Gamers</div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="value-item">
                                <div className="value-number">4.8</div>
                                <div className="value-label">Average Rating</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="team-section">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-8 text-center">
                            <h2 className="section-title">Meet The Team</h2>
                            <p className="hero-subtitle">The masterminds behind the chaos</p>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6">
                            <div className="team-card">
                                <img src="team1.jpg" alt="Sarah Chen" className="team-image" />
                                <div className="team-content">
                                    <h3 className="team-name">Sarah Chen</h3>
                                    <p className="team-role">Founder & Chief Sarcasm Officer</p>
                                    <p className="team-bio">
                                        The mastermind who turned awkward conversations into award-winning games. Still can't believe this is a real job.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="team-card">
                                <img src="team2.jpg" alt="Marcus Rodriguez" className="team-image" />
                                <div className="team-content">
                                    <h3 className="team-name">Marcus Rodriguez</h3>
                                    <p className="team-role">Creative Director</p>
                                    <p className="team-bio">
                                        Transforms weird ideas into playable reality. His motto: "If it makes you uncomfortable, it's probably genius."
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="team-card">
                                <img src="team3.jpg" alt="Alex Taylor" className="team-image" />
                                <div className="team-content">
                                    <h3 className="team-name">Alex Taylor</h3>
                                    <p className="team-role">Game Designer</p>
                                    <p className="team-bio">
                                        Professional game breaker and fixer. Spends days finding loopholes that make games more chaotic and fun.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
 */}
            <section className="timeline-section">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-8 text-center">
                            <h2 className="section-title">Our Journey</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="timeline-item">
                                <div className="timeline-year">2022</div>
                                <div className="timeline-content">
                                    <h3 className="timeline-title">The Beginning</h3>
                                    <p className="timeline-text">
                                        Started in a garage with five friends and one terrible idea that somehow worked. Launched our first game "Sarcasm: The Game" at a local game convention.
                                    </p>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-year">2023</div>
                                <div className="timeline-content">
                                    <h3 className="timeline-title">Going Viral</h3>
                                    <p className="timeline-text">
                                        Our games went viral on social media. Expanded to 5 unique titles and shipped to customers in 15 countries. Still working out of that garage though.
                                    </p>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-year">2024</div>
                                <div className="timeline-content">
                                    <h3 className="timeline-title">Growing Up</h3>
                                    <p className="timeline-text">
                                        Finally got a real office (goodbye, garage!). Launched 10 more games, won "Best Party Game" at BoardGameCon, and celebrated selling our 50,000th game.
                                    </p>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-year">2025</div>
                                <div className="timeline-content">
                                    <h3 className="timeline-title">The Future</h3>
                                    <p className="timeline-text">
                                        Expanding our team, developing new game mechanics, and planning international distribution. The chaos is just getting started.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <h2 className="cta-title">Ready to Join the Fun?</h2>
                            <p className="cta-text">
                                Discover games that will change your game nights forever. Warning: may cause uncontrollable laughter and questionable life decisions.
                            </p>
                            <button className="btn btn-cta">
                                <Link style={{textDecoration: 'none', color: 'black'}} to={'/products'}><i style={{fontSize: '20px'}} className="fas fa-gamepad me-2"></i>Shop Our Games</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About