import React, { useState } from 'react'
// import { TodoContext } from '../contexts/TodoContext'
import { useTodos } from './TodoContext'

const AddTodo = () => {
    const { addTodo } = useTodos()
    const [todoStr, setTodoStr] = useState('')
    const handleFormSubmit = (e) => {
        e.preventDefault()

        addTodo(todoStr)
        setTodoStr('')
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input
                value={todoStr}
                type="text"
                onChange={(e) => {
                    setTodoStr(e.target.value)
                }}
                placeholder="TODO"
            />
            <button>Adicionar</button>
        </form>
    )
}

export default AddTodo
