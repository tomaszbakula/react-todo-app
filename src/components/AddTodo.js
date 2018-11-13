import React, { Component } from 'react';

class AddTodo extends Component {
  render() {
    return (
      <input
          className="my-4 form-control form-control-lg"
          placeholder="What needs to be done?"
      />
    );
  }
}

export default AddTodo;