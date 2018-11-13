import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import './index.css';
import App from './App';

const initialState = {
  todos: [{
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

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
