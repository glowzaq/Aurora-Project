import React from 'react'

const Contact = () => {
    return (
        <section id='contact' className="contact-section">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6">
                        <h2 className="section-title">Get in Touch</h2>
                        <p className="section-subtitle">Have questions? Want to complain? We're here for all of it.</p>

                        <div className="contact-info-item">
                            <div className="contact-icon">
                                <i className="fas fa-phone"></i>
                            </div>
                            <div className="contact-details">
                                <h4>Call Us</h4>
                                <p>(555) 123-GAME</p>
                            </div>
                        </div>

                        <div className="contact-info-item">
                            <div className="contact-icon">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="contact-details">
                                <h4>Email</h4>
                                <p>hello@auroragames.com</p>
                            </div>
                        </div>

                        <div className="contact-info-item">
                            <div className="contact-icon">
                                <i className="fas fa-clock"></i>
                            </div>
                            <div className="contact-details">
                                <h4>Hours</h4>
                                <p>Mon-Fri 9AM-5PM EST</p>
                            </div>
                        </div>

                        <div className="info-box">
                            <h3>Need More Info?</h3>
                            <p>Call us for detailed product information, bulk orders, or just to chat about board games.</p>
                            <button className="btn btn-call">
                                <i className="fas fa-phone me-2"></i>Call Now
                            </button>
                        </div>
                    </div>

                    <div className="col-lg-6 px-5">
                        <div className="form-section">
                            <h2>Send us a Message</h2>

                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" placeholder=""/>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder=""/>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="subject" className="form-label">Subject</label>
                                    <select className="form-select" id="subject" defaultValue="general">
                                        <option value="general">General Inquiry</option>
                                        <option value="product">Product Info</option>
                                        <option value="bulk">Bulk Orders</option>
                                        <option value="feedback">Complaints (We Love These)</option>
                                    </select>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea className="form-control" id="message" rows="5" placeholder=""></textarea>
                                </div>

                                <button type="submit" className="btn btn-submit">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Contact