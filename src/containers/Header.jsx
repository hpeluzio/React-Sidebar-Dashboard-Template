import React from 'react'
import './Header.css'

// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Link } from 'react-router-dom'
import AcUnitIcon from '@material-ui/icons/AcUnit'
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp'
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined'

const Header = () => {
    return (
        <header className="header">
            {/* <a href="#" className="logo"><img src="img/wildbeast.svg" alt="Wildbeast"></a> */}

            <div className="logo-header">
                <Link to="/home" id="logo-icon">
                    <AcUnitIcon fontSize="large"></AcUnitIcon>
                    <div>Logo</div>
                </Link>

                {/* <div className="menu-toggle">
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
                </div> */}
            </div>

            <nav>
                <ul>
                    <li>
                        <Link to="/register" className="header-link">
                            <PersonAddOutlinedIcon fontSize="large"></PersonAddOutlinedIcon>
                            <div>Register</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/login" className="header-link">
                            <ExitToAppSharpIcon fontSize="large"></ExitToAppSharpIcon>
                            <div>Login</div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
