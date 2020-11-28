import React from 'react'

// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import 'fontsource-roboto'
import './Main.css'

import Header from './Header'
import Content from './Content'
import Sidebar from './Sidebar'

const Main = () => {
    return (
        <Router>
            <div className="main-grid">
                <input type="checkbox" id="check"></input>
                <Header></Header>

                <Sidebar></Sidebar>

                <Content></Content>
            </div>
        </Router>
    )
}

export default Main
