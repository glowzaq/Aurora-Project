import React from 'react'
import seven from '../assets/images/UX Pilot - Superfast UX_UI Design with AI/seven.png'

const Whyus = () => {
    return (
        <section className="why-section">
            <div className="container">
                <div className="row align-items-center g-5">
                    <div className="col-lg-6">
                        <h2 className="section-title">Why Aurora Games?</h2>

                        <div className="feature-item d-flex gap-3">
                            <div className="feature-icon">
                                <i className="fas fa-smile"></i>
                            </div>
                            <div>
                                <h3 className="feature-title">Hilariously Honest</h3>
                                <p className="feature-description">Our games say what everyone's thinking but nobody wants to admit</p>
                            </div>
                        </div>

                        <div className="feature-item d-flex gap-3">
                            <div className="feature-icon">
                                <i className="fas fa-couch"></i>
                            </div>
                            <div>
                                <h3 className="feature-title">Comfortable Chaos</h3>
                                <p className="feature-description">Perfect for those cozy nights when you want entertainment without the drama</p>
                            </div>
                        </div>

                        <div className="feature-item d-flex gap-3">
                            <div className="feature-icon">
                                <i className="fas fa-truck"></i>
                            </div>
                            <div>
                                <h3 className="feature-title">Available Everywhere</h3>
                                <p className="feature-description">Find us in your favorite online stores, because we're everywhere you don't expect us</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 px-2">
                        <img src={seven} alt="Friends playing board games" className="why-image mx-auto d-block" />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Whyus