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
                            <Link className='nav-link' onClick={() => {
                                document.querySelector(".navbar-collapse")?.classList.remove("show");
                            }} to={'/'}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' onClick={() => {
                                document.querySelector(".navbar-collapse")?.classList.remove("show");
                            }} to={'/products'}>Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' onClick={() => {
                                document.querySelector(".navbar-collapse")?.classList.remove("show");
                            }} to={'/about'}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to='/privacy' onClick={() => {
                                document.querySelector(".navbar-collapse")?.classList.remove("show");
                            }}>Privacy</Link>
                        </li>
                        <li className="nav-item">
                            <a onClick={() => {
                                document.querySelector(".navbar-collapse")?.classList.remove("show")
                            }}  className="nav-link" href="#contact">Contact</a>
                            {/* <Link onClick={() => {
                                document.querySelector(".navbar-collapse")?.classList.remove("show")
                            }} className="nav-link" to="/#contact">Contact</Link> */}
                        </li>
                    </ul>

                    <button className="btn btn-shop"><Link onClick={() => {
                        document.querySelector(".navbar-collapse")?.classList.remove("show");
                    }} style={{ color: 'white', textDecoration: 'none' }} to={'/products'}>Shop Now</Link></button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar