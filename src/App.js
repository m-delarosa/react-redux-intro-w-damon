import React from 'react'
import './App.css'
import { connect } from 'react-redux'

function App(props) {

  const showTodos = props.todos.map(todo => <h2>{todo.title}</h2>)

  return (
    <div className="App">
      <h1>Redux Store</h1>
      <button onClick={() => props.addTodo({ title: "A Todo" })}>Create Todo</button>
      {showTodos}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (todo) => dispatch({ type: "ADD_TODO", payload: todo })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
