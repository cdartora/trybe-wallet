import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPI, fetchCurrencies } from '../actions';
import './ExpenseForm.css';

const alimentação = 'Alimentação';

class ExpenseForm extends Component {
  constructor() {
    super();

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);

    this.state = {
      id: '',
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: alimentação,
      description: '',
    };
  }

  componentDidMount() {
    const { fetchCurrency } = this.props;
    fetchCurrency();
  }

  onClickHandler() {
    const { id, onButtonClick } = this.props;

    onButtonClick({ ...this.state, id });

    this.setState({
      id: '',
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    });
  }

  onChangeHandler({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      value,
      description,
      currency,
      method,
      tag,
    } = this.state;

    const {
      currencies,
    } = this.props;

    return (
      <div className="expense-form-container">
        <input
          name="value"
          value={ value }
          onChange={ this.onChangeHandler }
          type="number"
          placeholder="valor"
          data-testid="value-input"
        />

        <input
          name="description"
          value={ description }
          onChange={ this.onChangeHandler }
          type="text"
          placeholder="descrição"
          data-testid="description-input"
        />

        <select
          name="currency"
          value={ currency }
          onChange={ this.onChangeHandler }
          id="moeda"
          data-testid="currency-input"
          aria-label="moeda"
        >
          {
            currencies.map((key) => (
              <option
                key={ key }
                data-testid={ key }
                name={ key }
              >
                {key}
              </option>
            ))
          }
        </select>

        <select
          name="method"
          value={ method }
          onChange={ this.onChangeHandler }
          id="method"
          data-testid="method-input"
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>

        <select
          name="tag"
          value={ tag }
          onChange={ this.onChangeHandler }
          id="tag"
          data-testid="tag-input"
        >
          <option value={ alimentação }>{alimentação}</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>

        <button
          type="button"
          onClick={ this.onClickHandler }
        >
          Adicionar despesa
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onButtonClick: (expense) => dispatch(fetchAPI(expense)),
  fetchCurrency: () => dispatch(fetchCurrencies()),
});

const mapStateToProps = (state) => ({
  id: state.wallet.expenses.length,
  currencies: state.wallet.currencies || ['BRL'],
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);

ExpenseForm.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  currencies: PropTypes.node.isRequired,
  fetchCurrency: PropTypes.func.isRequired,
};
