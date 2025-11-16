import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container">
                <a className="navbar-brand" href="#">Aurora</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className='nav-link' to={'/'}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to={'/products'}>Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to={'/about'}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to={'/privacy'}>Privacy</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>

                    <button className="btn btn-shop"><Link style={{color: 'white', textDecoration: 'none'}} to={'/products'}>Shop Now</Link></button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar