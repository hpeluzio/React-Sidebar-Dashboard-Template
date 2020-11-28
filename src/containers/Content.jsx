import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Login from '../components/Login/Login'
import Register from '../components/Register/Register'
import Home from '../components/Home/Home'
import TodoProvider from '../components/Todo/TodoContext'
import TodoList from '../components/Todo/TodoList'
import AddTodo from '../components/Todo/AddTodo'
import Count from '../components/Count/Count'
import CountProvider from '../components/Count/CountContext'
import Sessoes from '../components/Sessoes/Sessoes'
import SessoesProvider from '../components/Sessoes/SessoesContext'
import ApiProvider from '../components/Sessoes/ApiContext'
import './Content.css'

const Content = () => {
    return (
        <main className="content">
            <div className="content_container">
                <Switch>
                    <Route path="/" exact>
                        <ApiProvider>
                            <Home></Home>
                        </ApiProvider>
                    </Route>
                    <Route path="/sessoes">
                        <ApiProvider>
                            <SessoesProvider>
                                <Sessoes></Sessoes>
                            </SessoesProvider>
                        </ApiProvider>
                    </Route>
                    <Route path="/login">
                        <ApiProvider>
                            <Login></Login>
                        </ApiProvider>
                    </Route>
                    <Route path="/register">
                        <ApiProvider>
                            <Register></Register>
                        </ApiProvider>
                    </Route>
                    <Route path="/count">
                        <CountProvider>
                            <TodoProvider>
                                <Count></Count>
                            </TodoProvider>
                        </CountProvider>
                    </Route>
                    <Route path="/todoList">
                        <TodoProvider>
                            <TodoList></TodoList>
                            <AddTodo></AddTodo>
                        </TodoProvider>
                    </Route>
                </Switch>
            </div>
        </main>
    )
}

export default Content
