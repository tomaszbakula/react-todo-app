import { combineReducers } from 'redux';

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      let newTask = {
        id: state.length,
        task: action.task,
        completed: false
      };
      return [newTask, ...state];

    case 'TOGGLE_TODO':
      return state.map(todo => todo.id === action.id ? {...todo, completed: !todo.completed} : todo )

    default:
      return state;
  }
};

const listFilter = (state = 'ALL', action) => {
  switch (action.type) {
    case 'SET_LIST_FILTER':
      return action.filter;

    default:
      return state;
  }
}

export default combineReducers({
  todos,
  listFilter
});