import React from 'react'
import dummyData from './dummyData'
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

class App extends React.Component {
  state = {
    todos: dummyData,
  }

  addTodo = todo => {
    this.setState(prevState => 
      ({ todos: prevState.todos.concat(todo) })
    )
  }
  
  render() {
    return (
      <div>
        <TodoForm addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}

export default App
