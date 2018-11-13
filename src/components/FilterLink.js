import React from 'react';
import { connect } from 'react-redux';
import { setListFilter } from '../actions';

const FilterLink = ({ children, onClick, active }) => (
  <button
    className={'btn btn-sm btn-outline-primary ' + (active ? 'active' : '')}
    onClick={onClick}
  >{children}</button>
);

const mapStateToProps = (state, ownProps) => ({
  active: state.listFilter === ownProps.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setListFilter(ownProps.filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterLink);