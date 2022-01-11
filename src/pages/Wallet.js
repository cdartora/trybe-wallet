import React, { Component } from 'react';
import Header from '../components/Header';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import './Wallet.css';

class Wallet extends Component {
  render() {
    return (
      <div className="container-background">
        <div className="wallet-container">
          <Header />
          <ExpenseForm />
          <ExpenseList />
        </div>
      </div>
    );
  }
}

export default Wallet;
