import React from 'react'
import dummyData from './dummyData'
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

class App extends React.Component {
  state = {
    // todos: dummyData,
    todos: JSON.parse(localStorage.getItem('todos')) || []
  }

  addTodo = todo => {
    this.setState(prevState => 
      ({ todos: prevState.todos.concat(todo) })
    )
  }

  clearCompletedTodos = () => {
    this.setState(prevState => 
      ({ todos: prevState.todos.filter(todo => !todo.completed) }) 
    )
  }

  toggleCompleted = index => {
    const temporaryTodos = [...this.state.todos]
    temporaryTodos[index].completed = !temporaryTodos[index].completed
    this.setState({ todos: temporaryTodos })
  }
  
  render() {
    return (
      <div>
        <TodoForm 
          todos={this.state.todos} 
          addTodo={this.addTodo} 
          clearCompletedTodos={this.clearCompletedTodos} 
        />
        <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted} />
      </div>
    )
  }
}

export default App
