import React from 'react'
// import { TodoContext } from '../contexts/TodoContext'
import TodoListItem from './TodoListItem'
import { useTodos } from './TodoContext'

const TodoList = () => {
    // const context = useContext(TodoContext)
    const { todos, removeTodo, doneTodo } = useTodos()
    // console.log('todos', todos)

    return (
        <div>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <TodoListItem todo={todo}></TodoListItem>
                    <button onClick={() => removeTodo(todo)}>Remove</button>
                    <button onClick={() => doneTodo(todo)}>Done</button>
                </div>
            ))}
        </div>
    )
}

export default TodoList
