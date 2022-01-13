import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditButton extends Component {
  render() {
    const { onClick, id } = this.props;
    return (
      <button
        type="button"
        onClick={ () => onClick(id) }
        data-testid="edit-btn"
      >
        Edit
      </button>
    );
  }
}

export default (EditButton);

EditButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
