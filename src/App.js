import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [],
    }
  }

  addTodo = (todoText) => {
    const newTodo = {
      task: todoText,
      id: new Date(),
      completed: false
    }

    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  complete = (completedId) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        return todo.id === completedId ? {...todo, completed: !todo.completed} : todo;
      })
    })
  }

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.completed === false)
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          todos={this.state.todos}
          complete={this.complete}
        />
        <TodoForm 
          addTodo={this.addTodo}
          clearCompleted={this.clearCompleted}
        />
      </div>

    );
  }
}

export default App;
