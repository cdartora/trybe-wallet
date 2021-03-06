import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userLogin } from '../actions';
import './login.css';

class Login extends React.Component {
  constructor() {
    super();

    this.changeInput = this.changeInput.bind(this);
    this.handleError = this.handleError.bind(this);

    this.state = {
      email: '',
      senha: '',
      buttonIsEnabled: false,
    };
  }

  handleError() {
    const { email, senha } = this.state;

    const minCharacters = 6;

    const errorCases = [
      !email.includes('@'),
      !email.includes('.com'),
      senha.length < minCharacters,
    ];

    const isFormValid = errorCases.every((error) => error !== true);

    this.setState({ buttonIsEnabled: isFormValid });
  }

  changeInput({ target }) {
    const { value, name } = target;

    this.setState({
      [name]: value,
    }, () => this.handleError());
  }

  render() {
    const { email, senha, buttonIsEnabled } = this.state;
    const { userLogged, history } = this.props;
    return (
      <div className="container-login">
        <div className="login-box">

          <h1>
            Trybe
            <span className="wallet">Wallet</span>
          </h1>

          <label htmlFor="e-mail">
            email:
            <input
              type="text"
              value={ email }
              onChange={ this.changeInput }
              className="e-mail"
              id="e-mail"
              data-testid="email-input"
              name="email"
            />
          </label>

          <label htmlFor="password">
            senha:
            <input
              type="password"
              value={ senha }
              onChange={ this.changeInput }
              name="senha"
              id="password"
              data-testid="password-input"
            />
          </label>

          <button
            type="button"
            disabled={ !buttonIsEnabled }
            onClick={ () => {
              userLogged(email);
              history.push('/carteira');
            } }
          >
            Entrar
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userLogged: (email) => dispatch(userLogin(email)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  userLogged: PropTypes.func.isRequired,
  history: PropTypes.objectOf(Object).isRequired,
};
