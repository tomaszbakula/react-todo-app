import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './containers/TodoList';
import AppFooter from './components/AppFooter';

const App = () => (
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-6 col-lg-4">

        <AddTodo />
        <TodoList />
        <AppFooter />

      </div>
    </div>
  </div>
);

export default App;
