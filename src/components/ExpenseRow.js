import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
import './ExpenseRow.css';

class ExpenseRow extends Component {
  render() {
    const { expense, editMode, index } = this.props;
    return (
      <tr key={ expense.id } className={ index % 2 === 0 ? 'even' : 'odd' }>
        <td>
          {expense.description}
        </td>
        <td>
          {expense.tag}
        </td>
        <td>
          {expense.method}
        </td>
        <td>
          {`${expense.value}`}
        </td>
        <td>
          {expense.exchangeRates[expense.currency].name.split('/')[0]}
        </td>
        <td>
          {`${parseFloat(expense.exchangeRates[expense.currency].ask)
            .toFixed(2)}`}
        </td>
        <td>
          {`${(parseFloat(expense.value)
                  * parseFloat(expense.exchangeRates[expense.currency].ask)).toFixed(2)}`}
        </td>
        <td>
          Real
        </td>
        <td className="btns-cell">
          <EditButton className="edit-btn" onClick={ editMode } id={ expense.id } />
          <DeleteButton className="delete-btn" id={ expense.id } />
        </td>
      </tr>
    );
  }
}

export default ExpenseRow;

ExpenseRow.propTypes = {
  expense: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  editMode: PropTypes.func.isRequired,
};
