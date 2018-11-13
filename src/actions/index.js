export const addTodo = task => ({
  type: 'ADD_TODO',
  task
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
});

export const setListFilter = filter => ({
  type: 'SET_LIST_FILTER',
  filter
});