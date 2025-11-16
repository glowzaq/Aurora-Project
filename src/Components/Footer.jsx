import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6">
                        <h3 className="footer-brand">Aurora</h3>
                        <p className="footer-description">Making board games that don't take themselves too seriously since... well, recently.</p>
                        <div className="social-icons">
                            <a href="#" className="social-icon">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="footer-column">
                            <h4>Products</h4>
                            <ul className="footer-links">
                                <li><a href="#">All Games</a></li>
                                <li><a href="#">New Releases</a></li>
                                <li><a href="#">Best Sellers</a></li>
                                <li><a href="#">Coming Soon</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="footer-column">
                            <h4>Company</h4>
                            <ul className="footer-links">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="footer-column">
                            <h4>Support</h4>
                            <ul className="footer-links">
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Shipping Info</a></li>
                                <li><a href="#">Returns</a></li>
                                <li><a href="#">Game Rules</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2024 Aurora Games. All rights reserved. Sarcasm included at no extra charge.</p>
                </div>
            </div>
        </footer>

    )
}

export default Footer