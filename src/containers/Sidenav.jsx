import React from 'react'

import { Link } from 'react-router-dom'
import './Sidenav.css'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'
import PlusOneIcon from '@material-ui/icons/PlusOne'
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered'

const Sidenav = () => {
    return (
        <nav className="sidenav">
            {/* <div className="sidenav-header">TODO ALL FEATURES</div> */}
            <li>
                <Link to="/todolist" className="sidenav-link">
                    <FormatListNumberedIcon fontSize="large"></FormatListNumberedIcon>
                    <div>TodoList</div>
                </Link>
            </li>
            <li>
                <Link to="/count" className="sidenav-link">
                    <PlusOneIcon fontSize="large"></PlusOneIcon>
                    <div>Count</div>
                </Link>
            </li>
            <li>
                <Link to="/" className="sidenav-link">
                    <PersonOutlineIcon fontSize="large"></PersonOutlineIcon>
                    <div>Sessões</div>
                </Link>
            </li>
        </nav>
    )
}

export default Sidenav
