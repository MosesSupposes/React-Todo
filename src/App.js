import React from 'react'
import dummyData from './dummyData'
import TodoList from './components/TodoComponents/TodoList'

class App extends React.Component {
  state = {
    todos: dummyData
  }
  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}

export default App
