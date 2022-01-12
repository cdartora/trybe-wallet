import React, { Component } from 'react';
import './ExpenseHeader.css';

class ExpenseHeader extends Component {
  render() {
    return (
      <div className="expense-header-container">
        <p>Descrição</p>
        <p>|</p>
        <p>Tag</p>
        <p>|</p>
        <p>Método de Pagamento</p>
        <p>|</p>
        <p>Valor</p>
        <p>|</p>
        <p>Moeda</p>
        <p>|</p>
        <p>Câmbio Utilizado</p>
        <p>|</p>
        <p>Valor Convertido</p>
        <p>|</p>
        <p>Moeda de Conversão</p>
      </div>
    );
  }
}

export default ExpenseHeader;
