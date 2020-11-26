import React from 'react'
import './Header.css'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'

const Header = () => {
    return (
        <header className="header">
            {/* <a href="#" className="logo"><img src="img/wildbeast.svg" alt="Wildbeast"></a> */}

            <div>
                <div className="logo">Todo</div>
                <div className="menu-toggle">
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
                </div>
            </div>

            <nav>
                <ul>
                    <li>
                        <Link to="/" className="nav-link">
                            <PersonOutlineIcon fontSize="large"></PersonOutlineIcon>
                            <div>Home</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/count" className="nav-link">
                            Count
                        </Link>
                    </li>
                    <li>
                        <Link to="/todolist" className="nav-link">
                            TodoList
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
