import React from 'react'
import five from '../assets/images/UX Pilot - Superfast UX_UI Design with AI/five.png'
import thumb1 from '../assets/images/UX Pilot - Superfast UX_UI Design with AI/thumb1.avif'
import thumb2 from '../assets/images/UX Pilot - Superfast UX_UI Design with AI/thumb2.jpeg'
import thumb3 from '../assets/images/UX Pilot - Superfast UX_UI Design with AI/thumb3.webp'
import six from '../assets/images/UX Pilot - Superfast UX_UI Design with AI/six.png'
import eight from '../assets/images/UX Pilot - Superfast UX_UI Design with AI/eight.png'
import existence from '../assets/images/UX Pilot - Superfast UX_UI Design with AI/existence.webp'


const Product = () => {
    return (
        <div>
            <section className="product-section">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <div className="product-gallery">
                                <img src={five} alt="Sarcasm: The Game" className="main-image" id="mainImage"/>
                                    <div className="thumbnail-container">
                                        <img src={thumb1} alt="Thumbnail 1" className="thumbnail" onClick={changeImage} />
                                        <img src={thumb2} alt="Thumbnail 2" className="thumbnail" onClick={changeImage} />
                                        <img src={thumb3} alt="Thumbnail 3" className="thumbnail" onClick={changeImage} />
                                    </div>
                            </div>
                        </div>

                        <div className="col-lg-6 px-4">
                            <h1 className="product-title">Sarcasm: The Game</h1>

                            <div className="product-rating">
                                <div className="stars">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <span className="rating-text">4.9 (284 reviews)</span>
                            </div>

                            <div className="product-price">$29.99</div>

                            <p className="product-description">
                                Because regular conversation wasn't painful enough. This hilariously sarcastic card game is perfect for people who've mastered the art of passive aggression and want to share that gift with their friends.
                            </p>

                            <div className="mb-3">
                                <span className="feature-badge"><i className="fas fa-users me-2"></i>3-8 Players</span>
                                <span className="feature-badge"><i className="fas fa-clock me-2"></i>30-45 Minutes</span>
                                <span className="feature-badge"><i className="fas fa-child me-2"></i>Ages 17+</span>
                            </div>

                            <div className="quantity-selector">
                                <span className="quantity-label">Quantity:</span>
                                <div className="quantity-controls">
                                    <button className="quantity-btn" onClick={decreaseQuantity}>-</button>
                                    <span className="quantity-value" id="quantity">1</span>
                                    <button className="quantity-btn" onClick={increaseQuantity}>+</button>
                                </div>
                            </div>

                            <button className="btn btn-add-to-cart">
                                <i className="fas fa-shopping-cart me-2"></i>Add to Cart
                            </button>
                            <button className="btn btn-wishlist">
                                <i className="far fa-heart me-2"></i>Add to Wishlist
                            </button>

                            <div className="mt-4">
                                <p style={{color: '#6a6a6a', fontSize: "0.95rem"}}>
                                    <i className="fas fa-truck me-2"></i>Free shipping on orders over $50<br />
                                    <i className="fas fa-undo me-2"></i>30-day return policy<br />
                                    <i className="fas fa-shield-alt me-2"></i>Secure checkout
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="product-info-section">
                <div className="container">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#description">Description</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#specifications">Specifications</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#reviews">Reviews</button>
                        </li>
                    </ul>

                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="description">
                            <h3 className="info-title">About This Game</h3>
                            <p className="info-text">
                                Welcome to Sarcasm: The Game, where passive-aggressive communication becomes an Olympic sport. This isn't your grandmother's board game (unless your grandmother is hilariously sarcastic, in which case, we'd like to meet her).
                            </p>
                            <p className="info-text">
                                Players take turns reading prompts and responding with the most perfectly timed sarcastic remarks. Points are awarded for wit, delivery, and making your friends question why they invited you to game night in the first place.
                            </p>
                            <h3 className="info-title mt-4">What's in the Box?</h3>
                            <ul className="info-text">
                                <li>300 sarcasm prompt cards</li>
                                <li>100 response cards</li>
                                <li>1 rule book (that we're sure you'll read)</li>
                                <li>Score tracker</li>
                                <li>A guarantee that your friendships will never be the same</li>
                            </ul>
                        </div>

                        <div className="tab-pane fade" id="specifications">
                            <ul className="specs-list">
                                <li>
                                    <span className="specs-label">Players</span>
                                    <span className="specs-value">3-8 Players</span>
                                </li>
                                <li>
                                    <span className="specs-label">Playing Time</span>
                                    <span className="specs-value">30-45 Minutes</span>
                                </li>
                                <li>
                                    <span className="specs-label">Age Range</span>
                                    <span className="specs-value">17+ (Mature humor)</span>
                                </li>
                                <li>
                                    <span className="specs-label">Game Type</span>
                                    <span className="specs-value">Party Game, Card Game</span>
                                </li>
                                <li>
                                    <span className="specs-label">Box Dimensions</span>
                                    <span className="specs-value">8" x 6" x 2"</span>
                                </li>
                                <li>
                                    <span className="specs-label">Weight</span>
                                    <span className="specs-value">1.2 lbs</span>
                                </li>
                                <li>
                                    <span className="specs-label">Language</span>
                                    <span className="specs-value">English</span>
                                </li>
                            </ul>
                        </div>

                        <div className="tab-pane fade" id="reviews">
                            <div className="review-card">
                                <div className="review-header">
                                    <div>
                                        <div className="reviewer-name">Mike Johnson</div>
                                        <div className="stars">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                                    <div className="review-date">2 weeks ago</div>
                                </div>
                                <p className="review-text">
                                    "Finally, a game that matches my sense of humor. My friends hate me even more now, which I consider a win. 10/10 would sarcastically recommend."
                                </p>
                            </div>

                            <div className="review-card">
                                <div className="review-header">
                                    <div>
                                        <div className="reviewer-name">Sarah Martinez</div>
                                        <div className="stars">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                                    <div className="review-date">1 month ago</div>
                                </div>
                                <p className="review-text">
                                    "Bought this for game night and it was an instant hit. Warning: not suitable for people who can't handle some sass. Perfect for everyone else."
                                </p>
                            </div>

                            <div className="review-card">
                                <div className="review-header">
                                    <div>
                                        <div className="reviewer-name">Dave Miller</div>
                                        <div className="stars">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                                    <div className="review-date">1 month ago</div>
                                </div>
                                <p className="review-text">
                                    "Perfect for when you want to insult your friends but in a socially acceptable way. Aurora Games really understands their audience."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="related-section">
                <div className="container">
                    <h2 className="section-title">You Might Also Like</h2>

                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6">
                            <div className="game-card">
                                <img src={six} alt="Adulting is Hard" className="game-image" />
                                <div className="game-content">
                                    <h3 className="game-title">Adulting is Hard</h3>
                                    <div className="game-price">$34.99</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="game-card">
                                <img src={eight} alt="Small Talk Survival" className="game-image" />
                                <div className="game-content">
                                    <h3 className="game-title">Small Talk Survival</h3>
                                    <div className="game-price">$24.99</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="game-card">
                                <img src={existence} alt="Existential Dread" className="game-image" />
                                <div className="game-content">
                                    <h3 className="game-title">Existential Dread</h3>
                                    <div className="game-price">$29.99</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Product