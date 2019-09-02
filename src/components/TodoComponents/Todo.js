import React from 'react'

export default function Todo(props) {
    return (
        <li className="todo-item">
            <span>{props.task}</span>
            <input type="checkbox" />
        </li>
    )
}