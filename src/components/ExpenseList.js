import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ExpenseList extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <div>
        <ul>
          { expenses.map((expense) => (
            <li key={ expense.id }>{expense.descrição}</li>
          )) }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(ExpenseList);

ExpenseList.propTypes = {
  expenses: PropTypes.arrayOf(Object).isRequired,
};
