import React from 'react'
import four from '../assets/images/UX Pilot - Superfast UX_UI Design with AI/four.jpg'
import three from '../assets/images/UX Pilot - Superfast UX_UI Design with AI/three.jpg'
import two from '../assets/images/UX Pilot - Superfast UX_UI Design with AI/two.jpg'

const Testimonial = () => {
    return (
        <section className="testimonials-section">
            <div className="container">
                <h2 className="section-title">What Players Say</h2>
                <p className="section-subtitle">Real reviews from real people who survived our games</p>

                <div className="row g-4">
                    <div className="col-lg-4 col-md-6">
                        <div className="testimonial-card">
                            <div className="testimonial-header">
                                <img src={four} alt="Mike Johnson" className="testimonial-avatar"/>
                                    <div className="testimonial-info">
                                        <div className="testimonial-name">Mike Johnson</div>
                                        <div className="testimonial-stars">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                            </div>
                            <p className="testimonial-text">"Finally, a game that matches my sense of humor. My friends hate me even more now."</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="testimonial-card">
                            <div className="testimonial-header">
                                <img src={three} alt="Dave Miller" className="testimonial-avatar"/>
                                    <div className="testimonial-info">
                                        <div className="testimonial-name">Dave Miller</div>
                                        <div className="testimonial-stars">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                            </div>
                            <p className="testimonial-text">"Perfect for when you want to insult your friends but in a socially acceptable way."</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="testimonial-card">
                            <div className="testimonial-header">
                                <img src={two} alt="Tom Wilson" className="testimonial-avatar"/>
                                    <div className="testimonial-info">
                                        <div className="testimonial-name">Tom Wilson</div>
                                        <div className="testimonial-stars">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                            </div>
                            <p className="testimonial-text">"Aurora games: because therapy is expensive and this is way more fun."</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial