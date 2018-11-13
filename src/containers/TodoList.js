import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';

const filteredTodos = ({ todos, listFilter }) => {
  switch (listFilter) {
    case 'ALL':
      return todos;
    case 'ACTIVE':
      return todos.filter(t => !t.completed)
    case 'COMPLETED':
      return todos.filter(t => t.completed)
    default:
      throw new Error('Unexpected filter' + this.state.filter);
  }
};

const mapStateToProps = state => ({
  todos: filteredTodos(state)
});

const mapDispatchToProps = dispatch => {
  return {
    onClick: id => dispatch(toggleTodo(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);