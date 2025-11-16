import React from 'react'

const Privacy = () => {
    return (
        <div>
            <section className="privacy-hero">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h1 className="hero-title">Privacy Policy</h1>
                            <p className="hero-subtitle">
                                Your privacy matters to us. Here's how we collect, use, and protect your information.
                            </p>
                            <p className="last-updated">Last Updated: November 16, 2025</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="privacy-content">
                <div className="container">
                    <div className="row g-5">

                        <div className="col-lg-3">
                            <div className="privacy-sidebar">
                                <h3 className="sidebar-title">Quick Navigation</h3>
                                <ul className="sidebar-nav">
                                    <li><a href="#introduction" className="active">Introduction</a></li>
                                    <li><a href="#information-we-collect">Information We Collect</a></li>
                                    <li><a href="#how-we-use">How We Use Information</a></li>
                                    <li><a href="#data-sharing">Data Sharing</a></li>
                                    <li><a href="#cookies">Cookies & Tracking</a></li>
                                    <li><a href="#data-security">Data Security</a></li>
                                    <li><a href="#your-rights">Your Rights</a></li>
                                    <li><a href="#children">Children's Privacy</a></li>
                                    <li><a href="#changes">Policy Changes</a></li>
                                    <li><a href="#contact">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-9">

                            <div id="introduction" className="privacy-section">
                                <h2 className="section-title">1. Introduction</h2>
                                <p className="section-text">
                                    Welcome to Aurora Games! We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website, purchase our products, or interact with our services.
                                </p>
                                <p className="section-text">
                                    By using our website and services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
                                </p>
                            </div>

                            <div id="information-we-collect" className="privacy-section">
                                <h2 className="section-title">2. Information We Collect</h2>
                                <p className="section-text">
                                    We collect several types of information to provide and improve our services:
                                </p>

                                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#1a1a1a', marginTop: '1.5rem', marginBottom: '1rem' }}>Personal Information</h3>
                                <ul className="section-list">
                                    <li>Name and contact information (email address, phone number, shipping address)</li>
                                    <li>Payment information (processed securely through third-party payment processors)</li>
                                    <li>Account credentials (username, password)</li>
                                    <li>Purchase history and preferences</li>
                                </ul>

                                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#1a1a1a', marginTop: '1.5rem', marginBottom: '1rem' }}>Automatically Collected Information</h3>
                                <ul className="section-list">
                                    <li>IP address and device information</li>
                                    <li>Browser type and version</li>
                                    <li>Pages visited and time spent on our site</li>
                                    <li>Referring website addresses</li>
                                </ul>
                            </div>

                            <div id="how-we-use" className="privacy-section">
                                <h2 className="section-title">3. How We Use Your Information</h2>
                                <p className="section-text">
                                    We use the information we collect for various purposes:
                                </p>
                                <ul className="section-list">
                                    <li>To process and fulfill your orders</li>
                                    <li>To communicate with you about your purchases and account</li>
                                    <li>To send marketing communications (with your consent)</li>
                                    <li>To improve our website and customer experience</li>
                                    <li>To prevent fraud and enhance security</li>
                                    <li>To comply with legal obligations</li>
                                    <li>To analyze site usage and trends</li>
                                </ul>

                                <div className="highlight-box">
                                    <p>
                                        <strong>Your Choice:</strong> You can opt out of marketing communications at any time by clicking the unsubscribe link in our emails or contacting us directly.
                                    </p>
                                </div>
                            </div>

                            <div id="data-sharing" className="privacy-section">
                                <h2 className="section-title">4. Data Sharing and Disclosure</h2>
                                <p className="section-text">
                                    We do not sell your personal information. We may share your data with:
                                </p>
                                <ul className="section-list">
                                    <li><strong>Service Providers:</strong> Third-party companies that help us operate our business (payment processors, shipping companies, email service providers)</li>
                                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                                    <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition of our company</li>
                                    <li><strong>With Your Consent:</strong> When you explicitly agree to share information with third parties</li>
                                </ul>
                            </div>

                            <div id="cookies" className="privacy-section">
                                <h2 className="section-title">5. Cookies and Tracking Technologies</h2>
                                <p className="section-text">
                                    We use cookies and similar tracking technologies to enhance your browsing experience and analyze site traffic.
                                </p>

                                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#1a1a1a', marginTop: '1.5rem', marginBottom: '1rem' }}>Types of Cookies We Use:</h3>
                                <ul className="section-list">
                                    <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                                    <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                                    <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                                    <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                                </ul>

                                <p className="section-text">
                                    You can control cookies through your browser settings. Note that disabling certain cookies may affect website functionality.
                                </p>
                            </div>

                            <div id="data-security" className="privacy-section">
                                <h2 className="section-title">6. Data Security</h2>
                                <p className="section-text">
                                    We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These measures include:
                                </p>
                                <ul className="section-list">
                                    <li>SSL encryption for data transmission</li>
                                    <li>Secure payment processing through PCI-compliant providers</li>
                                    <li>Regular security assessments and updates</li>
                                    <li>Restricted access to personal data on a need-to-know basis</li>
                                    <li>Employee training on data protection practices</li>
                                </ul>

                                <div className="highlight-box">
                                    <p>
                                        While we strive to protect your data, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security but are committed to using industry-standard practices.
                                    </p>
                                </div>
                            </div>

                            <div id="your-rights" className="privacy-section">
                                <h2 className="section-title">7. Your Privacy Rights</h2>
                                <p className="section-text">
                                    Depending on your location, you may have the following rights regarding your personal data:
                                </p>
                                <ul className="section-list">
                                    <li><strong>Access:</strong> Request access to your personal data we hold</li>
                                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                                    <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                                    <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                                    <li><strong>Objection:</strong> Object to certain processing of your data</li>
                                    <li><strong>Restriction:</strong> Request restriction of data processing</li>
                                    <li><strong>Withdrawal:</strong> Withdraw consent for data processing at any time</li>
                                </ul>

                                <p className="section-text">
                                    To exercise any of these rights, please contact us using the information provided at the end of this policy.
                                </p>
                            </div>

                            <div id="children" className="privacy-section">
                                <h2 className="section-title">8. Children's Privacy</h2>
                                <p className="section-text">
                                    Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately so we can delete such information.
                                </p>
                            </div>

                            <div id="changes" className="privacy-section">
                                <h2 className="section-title">9. Changes to This Privacy Policy</h2>
                                <p className="section-text">
                                    We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by:
                                </p>
                                <ul className="section-list">
                                    <li>Posting the updated policy on this page</li>
                                    <li>Updating the "Last Updated" date at the top of this policy</li>
                                    <li>Sending you an email notification (for significant changes)</li>
                                </ul>
                                <p className="section-text">
                                    We encourage you to review this policy periodically to stay informed about how we protect your information.
                                </p>
                            </div>

                            <div id="contact" className="privacy-section">
                                <h2 className="section-title">10. Contact Us</h2>
                                <p className="section-text">
                                    If you have any questions, concerns, or requests regarding this privacy policy or our data practices, please contact us:
                                </p>
                                <ul className="section-list">
                                    <li><strong>Email:</strong> privacy@auroragames.com</li>
                                    <li><strong>Phone:</strong> (555) 123-GAME</li>
                                    <li><strong>Mail:</strong> Aurora Games, 123 Game Street, Board City, BC 12345</li>
                                </ul>
                                <p className="section-text">
                                    We will respond to your inquiry within 30 days.
                                </p>
                            </div>

                            <div className="contact-box">
                                <h3 className="contact-box-title">Still Have Questions?</h3>
                                <p className="contact-box-text">
                                    Our team is here to help. If you need clarification on any aspect of our privacy practices or want to exercise your privacy rights, don't hesitate to reach out.
                                </p>
                                <a href="/contact" className="btn-contact">
                                    <i className="fas fa-envelope me-2"></i>Contact Support
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Privacy