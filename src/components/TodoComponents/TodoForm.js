import React, { Component } from 'react'
import uuid from 'uuid'

export default class TodoForm extends Component {
    state = {
        currentTodo: ''
    }
    
    handleChange = event => {
        this.setState({ currentTodo: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.addTodo({
            id: uuid(),
            task: this.state.currentTodo,
            completed: false
        })
        this.setState({currentTodo: ''})
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.currentTodo}
                    placeholder="enter a task"
                />
                <button type="submit">+</button>
                <button onClick={this.props.clearCompletedTodos}>Clear completed</button>
            </form>
    )
    }
}