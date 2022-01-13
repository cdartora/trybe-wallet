import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './ExpenseList.css';
import ExpenseRow from './ExpenseRow';
import { activateEditMode } from '../actions';

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
  constructor() {
    super();

    this.changeEditMode = this.changeEditMode.bind(this);
  }

  changeEditMode(id) {
    const { changeEditMode } = this.props;

    changeEditMode(id);
  }

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
                <ExpenseRow
                  expense={ expense }
                  editMode={ this.changeEditMode }
                  index={ index }
                  key={ index }
                />
              )) }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeEditMode: (id) => dispatch(activateEditMode(id)),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseList);

ExpenseList.propTypes = {
  expenses: PropTypes.arrayOf(Object).isRequired,
  changeEditMode: PropTypes.func.isRequired,
};
