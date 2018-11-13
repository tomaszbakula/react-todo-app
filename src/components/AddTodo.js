import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { task: '' }
  }

  onTaskChange(e) {
    this.setState({ task: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.addTodo(this.state.task);
    this.setState({ task: '' });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <input
          className="my-4 form-control form-control-lg"
          placeholder="What needs to be done?"
          value={this.state.task}
          onChange={this.onTaskChange.bind(this)}
        />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo: task => dispatch(addTodo(task))
});

export default connect(null, mapDispatchToProps)(AddTodo);