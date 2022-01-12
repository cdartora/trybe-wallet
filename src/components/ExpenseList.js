import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './ExpenseList.css';
import DeleteButton from './DeleteButton';

const headerValues = [
  'Descrição',
  'Tag',
  'Método de pagamento',
  'Valor',
  'Moeda',
  'Câmbio utilizado',
  'Valor convertido',
  'Moeda de conversão',
  'Editar/Excluir',
];

class ExpenseList extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <div>
        <div className="expenses-list-container">
          <table width="100%">
            <thead>
              <tr>
                {
                  headerValues.map((h) => <th key={ h }>{h}</th>)
                }
              </tr>
            </thead>
            <tbody>
              { expenses.map((expense, index) => (
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
                  <td>
                    <DeleteButton id={ expense.id } />
                  </td>
                </tr>
              )) }
            </tbody>
          </table>
        </div>
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
