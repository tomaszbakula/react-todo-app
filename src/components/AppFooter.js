import React from 'react';

const TodoList = ({ filter, onFilterChange }) => (
  <div className="mt-2">

    <strong>Show: </strong>

    <button
      className={'btn btn-sm btn-outline-primary mr-1 ' + (filter === 'ALL' ? 'active' : '')}
      onClick={() => onFilterChange('ALL')}
    >All</button>

    <button
      className={'btn btn-sm btn-outline-success mr-1 ' + (filter === 'ACTIVE' ? 'active' : '')}
      onClick={() => onFilterChange('ACTIVE')}
    >Active</button>

    <button
      className={'btn btn-sm btn-outline-danger ' + (filter === 'COMPLETED' ? 'active' : '')}
      onClick={() => onFilterChange('COMPLETED')}
    >Completed</button>

  </div>
);

export default TodoList;