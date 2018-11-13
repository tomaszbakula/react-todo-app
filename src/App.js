import React, { Component } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import AppFooter from './components/AppFooter';

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
      }],
      filter: 'ALL'
    };

    this.filteredTodos = this.filteredTodos.bind(this);
  }

  onAddTask(task) {
    let newTask = {
      id: this.state.todoList.length,
      task: task,
      completed: false
    }
    this.setState(state => ({
      todoList: [newTask, ...state.todoList]
    }));
  }

  onTodoToggleClick(id) {
    let todoList = this.state.todoList.map(task => {
      if (task.id === id) {
        task.completed = !task.completed
      }
      return task;
    });
    this.setState({ todoList: todoList });
  }

  onFilterChange(filter) {
    this.setState({ filter });
  }

  filteredTodos() {
    const todos = this.state.todoList;

    switch (this.state.filter) {
      case 'ALL':
        return todos;
      case 'ACTIVE':
        return todos.filter(t => !t.completed)
      case 'COMPLETED':
        return todos.filter(t => t.completed)
      default:
        throw new Error('Unexpected filter' + this.state.filter);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4">
            <AddTodo addTask={this.onAddTask.bind(this)} />
            <TodoList
              todos={this.filteredTodos()}
              onClick={this.onTodoToggleClick.bind(this)}
            />
            <AppFooter
              filter={this.state.filter}
              onFilterChange={this.onFilterChange.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
