import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import ReactCountryFlag from "react-country-flag";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className="navbar">
            <div className="nav-container">
                {/* Logo */}

                <Link to="/" className="nav-logo" onClick={closeMenu}>

                        <img
                            src="/logo.png"     // <-- your logo path
                            alt="US Open Logo"
                            className="nav-logo-img"
                        />



                    <span className="nav-logo-text">
        US Open
        <ReactCountryFlag
            countryCode="us"
            svg
            style={{
                width: "20px",
                height: "14px",
                marginLeft: "6px",
                verticalAlign: "middle",
            }}
        />
    </span>
                </Link>

                    {/* Links */}
                {/* Links */}
                <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
                    <Link to="/usopen" className="nav-item" onClick={closeMenu}>
                        Home
                    </Link>
                    <Link to="/tournament-details" className="nav-item" onClick={closeMenu}>
                        US Open Details
                    </Link>
                    <Link to="/proam" className="nav-item" onClick={closeMenu}>
                        ProAm Details
                    </Link>
                    <Link to="/players" className="nav-item" onClick={closeMenu}>
                        Players
                    </Link>
                    <Link to="/blocks" className="nav-item" onClick={closeMenu}>
                        Blocks
                    </Link>
                    <Link to="/matches" className="nav-item" onClick={closeMenu}>
                        Matches
                    </Link>
                    <Link to="/help" className="nav-item" onClick={closeMenu}>
                        Need Help?
                    </Link>
                </div>




                {/* Hamburger */}
                <div
                    className={`nav-toggle ${isMenuOpen ? "open" : ""}`}
                    onClick={toggleMenu}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
