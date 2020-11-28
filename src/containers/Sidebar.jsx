import React from 'react'

import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div class="sidebar">
            {/* <center>
                <img src="1.png" class="profile_image" alt="">
            <h4>Jessica</h4>
            </center> */}
            <Link to="/todolist">
                <i class="fas fa-list-ol"></i>
                <span>Todo List</span>
            </Link>
            <Link to="/count">
                <i class="fas fa-plus"></i>
                <span>Count</span>
            </Link>
            <Link to="/sessoes">
                <i class="fas fa-border-style"></i>
                <span>Sessões</span>
            </Link>
            <a href="#">
                <i class="fas fa-desktop"></i>
                <span>Dashboard</span>
            </a>
            <a href="#">
                <i class="fas fa-cogs"></i>
                <span>Components</span>
            </a>
            <a href="#">
                <i class="fas fa-table"></i>
                <span>Tables</span>
            </a>
            <a href="#">
                <i class="fas fa-th"></i>
                <span>Forms</span>
            </a>
            <a href="#">
                <i class="fas fa-info-circle"></i>
                <span>About</span>
            </a>
            <a href="#">
                <i class="fas fa-sliders-h"></i>
                <span>Settings</span>
            </a>
        </div>

        // <nav className="sidebar">
        //     {/* <div className="sidebar-header">TODO ALL FEATURES</div> */}
        //     <li>
        //         <Link to="/todolist" className="sidebar-link">
        //             <div>TodoList</div>
        //         </Link>
        //     </li>
        //     <li>
        //         <Link to="/count" className="sidebar-link">
        //             <div>Count</div>
        //         </Link>
        //     </li>
        //     <li>
        //         <Link to="/" className="sidebar-link">
        //             <div>Sessões</div>
        //         </Link>
        //     </li>
        // </nav>
    )
}

export default Sidebar
