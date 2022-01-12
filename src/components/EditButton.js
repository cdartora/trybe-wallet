import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editExpense } from '../actions';

class EditButton extends Component {
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
  onClickHandler: (id) => dispatch(editExpense(id)),
});

export default connect(null, mapDispatchToProps)(EditButton);

EditButton.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
