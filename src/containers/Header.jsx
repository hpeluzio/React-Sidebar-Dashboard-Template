import React from 'react'
import './Header.css'

// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div className="left_area">
                <Link to="/home" className="logo_home">
                    <h3>
                        Template <span>Logo</span>
                    </h3>
                </Link>
                <label for="check">
                    <i className="fas fa-bars" id="checked_sidebar"></i>
                </label>
            </div>

            <div className="right_area">
                <Link to="/register" className="header-link">
                    <div>Register</div>
                </Link>
                <Link to="/login" className="header-link">
                    <div>Login</div>
                </Link>
            </div>
        </header>
    )
}

export default Header
