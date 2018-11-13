import React from 'react';
import FilterLink from './FilterLink';

const TodoList = ({ filter, onFilterChange }) => (
  <div className="mt-2">

    <strong>Show: </strong>

    <FilterLink filter="ALL">All</FilterLink>
    {' '}
    <FilterLink filter="ACTIVE">Active</FilterLink>
    {' '}
    <FilterLink filter="COMPLETED">Completed</FilterLink>

  </div>
);

export default TodoList;