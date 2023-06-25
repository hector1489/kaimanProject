import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container navbar-container">
                <div className="navbar-icon">
                    <a className="social-icon pe-2" href="#" target="_blank">
                        <i className="fa-solid fa-user-astronaut fa-spin fa-2xl" />
                    </a>
                </div>
                <h1 className="navbar-title">REPTAR I.</h1>
                <label htmlFor="navbar-toggle" className="navbar-hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <input type="checkbox" id="navbar-toggle" className="navbar-toggle visually-hidden" />
                <div className="navbar-links">
                    <a href="#">Home</a>
                    <a href="https://github.com/hector1489" target="_blank">Github</a>
                    <a href="https://www.linkedin.com/in/hector-gonzalez-6ab633256/" target="_blank">Linkedin</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar
