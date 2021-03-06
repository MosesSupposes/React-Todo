import React from 'react'
import Todo from './Todo'

export default function TodoList(props) {
    return (
        <ul>
            {props.todos.map(function renderTodos(todo, i) {
                return <Todo 
                            key={todo.id} 
                            task={todo.task} 
                            completed={todo.completed} 
                            index={i}
                            toggleCompleted={props.toggleCompleted}
                        />
            })}
        </ul>
    )
}