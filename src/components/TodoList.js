import React from 'react';

const TodoList = ({ todos }) => (
  <ul className="list-group">
    {todos.map(({ id, task, completed }) => (

      <li className="list-group-item" key={id}>
        <div className="form-check">
          <label
            className="form-check-label"
            style={{textDecoration: !completed || 'line-through'}}
          >
            <input
              className="form-check-input"
              type="checkbox"
              checked={completed}
            />
            {task}
          </label>
        </div>
      </li>

    ))}
  </ul>
);

export default TodoList;