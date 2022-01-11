import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../actions';
import './ExpenseForm.css';

class ExpenseForm extends Component {
  constructor() {
    super();

    this.onChangeHandler = this.onChangeHandler.bind(this);

    this.state = {
      valor: '',
      descrição: '',
      moeda: '',
      método: '',
      tag: '',
    };
  }

  onChangeHandler({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      valor,
      descrição,
      moeda,
      método,
      tag,
    } = this.state;

    const {
      addExpense,
    } = this.props;

    return (
      <div className="expense-form-container">
        <input
          name="valor"
          value={ valor }
          onChange={ this.onChangeHandler }
          type="number"
          placeholder="valor"
          data-testid="value-input"
        />

        <input
          name="descrição"
          value={ descrição }
          onChange={ this.onChangeHandler }
          type="text"
          placeholder="descrição"
          data-testid="description-input"
        />

        <select
          name="moeda"
          value={ moeda }
          onChange={ this.onChangeHandler }
          id="moeda"
          data-testid="currency-input"
        >
          <option value="USD">USD</option>
          <option value="CAD">CAD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="ARS">ARS</option>
          <option value="BTC">BTC</option>
          <option value="LTC">LTC</option>
          <option value="JPY">JPY</option>
          <option value="CHF">CHF</option>
          <option value="AUD">AUD</option>
          <option value="CNY">CNY</option>
          <option value="ILS">ILS</option>
          <option value="ETH">ETH</option>
          <option value="XRP">XRP</option>
        </select>

        <select
          name="método"
          value={ método }
          onChange={ this.onChangeHandler }
          id="metodo"
          data-testid="method-input"
        >
          <option value="dinheiro">dinheiro</option>
          <option value="crédito">crédito</option>
          <option value="débito">débito</option>
        </select>

        <select
          name="tag"
          value={ tag }
          onChange={ this.onChangeHandler }
          id="tag"
        >
          <option value="alimentacao">alimentação</option>
          <option value="lazer">lazer</option>
          <option value="trabalho">trabalho</option>
          <option value="transporte">transporte</option>
          <option value="saude">saúde</option>
        </select>

        <button
          type="button"
          onClick={ () => addExpense(this.state) }
        >
          adicionar despesa
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpense(expense)),
});

export default connect(null, mapDispatchToProps)(ExpenseForm);
