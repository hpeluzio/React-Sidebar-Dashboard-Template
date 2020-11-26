import React from 'react'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import TodoProvider from './components/Todo/TodoContext'
import TodoList from './components/Todo/TodoList'
import AddTodo from './components/Todo/AddTodo'
import Count from './components/Count/Count'
import CountProvider from './components/Count/CountContext'
import Sessoes from './components/Sessoes/Sessoes'
import SessoesProvider from './components/Sessoes/SessoesContext'
import ApiProvider from './components/Sessoes/ApiContext'
import 'fontsource-roboto'
import './App.css'

const App = () => {
    return (
        <Router>
            <div className="main-grid">
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
                                    Home
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

                <nav className="sidenav">
                    <li>
                        <a href="#">Side1</a>
                    </li>
                    <li>
                        <a href="#">Side2</a>
                    </li>
                    <li>
                        <a href="#">Side3</a>
                    </li>
                </nav>

                <main className="content">
                    <Switch>
                        <Route path="/count">
                            <CountProvider>
                                <TodoProvider>
                                    <Count></Count>
                                </TodoProvider>
                            </CountProvider>
                        </Route>
                        <Route path="/TodoList">
                            <TodoProvider>
                                <TodoList></TodoList>
                                <AddTodo></AddTodo>
                            </TodoProvider>
                        </Route>
                        <Route path="/">
                            <ApiProvider>
                                <SessoesProvider>
                                    <Sessoes></Sessoes>
                                </SessoesProvider>
                            </ApiProvider>
                        </Route>
                    </Switch>
                </main>

                {/* <aside className="anuncios"></aside> */}

                <footer className="footer">
                    <p>Todo</p>
                </footer>
            </div>
        </Router>
    )
}

export default App
