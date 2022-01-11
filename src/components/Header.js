import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import user from './user.png';
import './Header.css';

class Header extends Component {
  render() {
    const { email } = this.props;
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
              data-testid="total-field"
            >
              BRL
            </p>
            <p
              className="total"
              data-testid="header-currency-field"
            >
              0.0

            </p>
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
};
