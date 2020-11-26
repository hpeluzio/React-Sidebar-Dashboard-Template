import React, { createContext, useState, useContext } from 'react'

// Criando HOOK nao preciso exportar mais o context
// export const TodoContext = createContext()
const TodoContext = createContext()

const TodoProvider = ({ children }) => {
    const [id, setId] = useState(3)

    const [todos, setTodos] = useState([
        { id: 1, title: 'Ir ao supermercado', done: false },
        { id: 2, title: 'Fazer todo', done: false },
        { id: 3, title: 'Fazer django', done: false },
    ])

    const addTodo = (todoStr) => {
        const newTodo = {
            id: id + 1,
            title: todoStr,
            done: false,
        }
        setTodos([...todos, newTodo])
        console.log('todos after', typeof todos)
        setId(id + 1)
    }

    const removeTodo = (todoToRemove) => {
        const array = [...todos]
        var newArray = array.filter((todo) => {
            if (todo.id != todoToRemove.id) return todo
        })
        setTodos(newArray)
    }

    const doneTodo = (todoToDone) => {
        todos.map((todo) => {
            if (todo.id == todoToDone.id) todo.done = true
        })

        setTodos([...todos])
    }

    return (
        <TodoContext.Provider value={{ todos, addTodo, removeTodo, doneTodo }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider

export function useTodos() {
    const { todos, addTodo, removeTodo, doneTodo } = useContext(TodoContext)
    return { todos, addTodo, removeTodo, doneTodo }
}
