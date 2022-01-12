import fetchHelper from './fetchCurrencies';

export const USER_LOGIN = 'USER_LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const CURRENCY_SUCCESS = 'CURRENCY_SUCCESS';
export const ERROR_FETCHING = 'ERROR_FETCHING';

export const userLogin = (email) => ({ type: USER_LOGIN, email });
export const addExpense = (payload) => ({ type: ADD_EXPENSE, payload });
export const removeExpense = (id) => ({ type: REMOVE_EXPENSE, id });
export const editExpense = (id, payload) => ({ type: EDIT_EXPENSE, id, payload });

// api actions
export const errorFetching = (error) => ({ type: ERROR_FETCHING, error });
export const currencySucess = (currencies) => ({ type: CURRENCY_SUCCESS, currencies });

export const fetchAPI = (payload) => (dispatch) => {
  fetchHelper()
    .then(
      (currencies) => {
        payload.exchangeRates = currencies;
        return dispatch(addExpense(payload));
      },
      (error) => dispatch(error),
    );
};

// function to fetch currencies names
export const fetchCurrencies = () => (dispatch) => {
  fetchHelper()
    .then(
      (json) => Object.keys(json).filter((c) => c !== 'USDT'),
    )
    .then((coins) => dispatch(currencySucess(coins)));
};
