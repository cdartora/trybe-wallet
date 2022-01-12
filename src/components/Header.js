import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import user from './user.png';
import addTotal from '../helpers/addTotal';
import './Header.css';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;

    return (
      <div className="container-header">

        <div className="title-container">
          <h1 className="title">
            Trybe
            <span className="wallet">Wallet</span>
          </h1>
        </div>
        <div className="content-container">
          <div className="user-container">
            <img src={ user } alt="user-icon" />
            <p className="user-email" data-testid="email-field">{email}</p>
          </div>

          <div className="currency-container">
            <p
              className="currency"
              data-testid="header-currency-field"
            >
              BRL
            </p>
            <p
              className="total"
              data-testid="total-field"
            >
              {addTotal(expenses)}
            </p>
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(Object).isRequired,
};
