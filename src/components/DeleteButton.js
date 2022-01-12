import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeExpense } from '../actions';

class DeleteButton extends Component {
  render() {
    const { onClickHandler, id } = this.props;
    return (
      <button type="button" onClick={ () => onClickHandler(id) } data-testid="delete-btn">
        X
      </button>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onClickHandler: (id) => dispatch(removeExpense(id)),
});

export default connect(null, mapDispatchToProps)(DeleteButton);

DeleteButton.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
