import React from 'react';
import FilterLink from './FilterLink';

const TodoList = () => (
  <div className="mt-2">

    <strong>Show: </strong>

    <FilterLink filter="ALL">All</FilterLink>
    {' '}
    <FilterLink filter="ACTIVE" color="success">Active</FilterLink>
    {' '}
    <FilterLink filter="COMPLETED" color="danger">Completed</FilterLink>

  </div>
);

export default TodoList;