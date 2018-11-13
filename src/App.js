import React, { Component } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: [{
        id: 0,
        task: 'Learn React.js',
        completed: false
      }, {
        id: 1,
        task: 'Work on the app',
        completed: false
      }, {
        id: 2,
        task: 'Learn Redux.js',
        completed: true
      }, {
        id: 3,
        task: 'Workout',
        completed: false
      }]
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4">
            <AddTodo />
            <TodoList todos={this.state.todoList} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
