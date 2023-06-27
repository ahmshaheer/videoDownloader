// import React from 'react';
import { Link } from "react-router-dom";
import './navbar.css'
const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-logo">
                <Link to='/' className="navbar-logo-item styling"> Video Downloader And Converter </Link>
            </div>
            <div className="navbar-components-links">
                <Link to='/tiktok' className="styling"> TikTok </Link>
                <Link to='/facebook' className="styling"> Facebook </Link>
                <Link to='/instagram' className="styling"> Instagram </Link>
            </div>
        </div >
    );
}

export default Navbar;
