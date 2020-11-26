import React from 'react'

// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import 'fontsource-roboto'
import './Main.css'

import Header from './Header'
import Content from './Content'
import Sidenav from './Sidenav'

const Main = () => {
    return (
        <Router>
            <div className="main-grid">
                <Header></Header>

                <Sidenav></Sidenav>

                <Content></Content>
            </div>
        </Router>
    )
}

export default Main
