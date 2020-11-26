import React from 'react'

import { Switch, Route } from 'react-router-dom'

import TodoProvider from '../components/Todo/TodoContext'
import TodoList from '../components/Todo/TodoList'
import AddTodo from '../components/Todo/AddTodo'
import Count from '../components/Count/Count'
import CountProvider from '../components/Count/CountContext'
import Sessoes from '../components/Sessoes/Sessoes'
import SessoesProvider from '../components/Sessoes/SessoesContext'
import ApiProvider from '../components/Sessoes/ApiContext'
import 'fontsource-roboto'
import './Content.css'

const Content = () => {
    return (
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
    )
}

export default Content
