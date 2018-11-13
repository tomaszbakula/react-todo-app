import React from 'react';

const TodoList = ({ todos, onClick }) => (
  <ul className="list-group">
    {todos.map(({ id, task, completed }) => (

      <li className="list-group-item list-group-item-action" key={id}>
        <div className="form-check">
          <label
            className="form-check-label"
            style={{ textDecoration: !completed || 'line-through' }}
          >
            <input
              className="form-check-input"
              type="checkbox"
              defaultChecked={completed}
              onClick={() => onClick(id)}
            />
            {task}
          </label>
        </div>
      </li>

    ))}
  </ul>
);

export default TodoList;