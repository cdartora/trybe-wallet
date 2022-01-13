import {
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  CURRENCY_SUCCESS,
  ACTIVATE_EDIT_MODE,
  EDIT_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  expenses: [],
  editModeId: -1,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSE:
    return {
      ...state,

      expenses: [...state.expenses, action.payload],
    };
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((e) => (
        e.id !== action.id
      )),
    };
  case CURRENCY_SUCCESS:
    return {
      ...state,
      currencies: action.currencies,
    };
  case ACTIVATE_EDIT_MODE:
    return {
      ...state,
      editModeId: action.id,
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      editModeId: -1,
      expenses: state.expenses.map((e) => {
        if (e.id === action.id) {
          action.payload.exchangeRates = e.exchangeRates;
          action.payload.id = action.id;
          return action.payload;
        }
        return e;
      }),
    };
  default:
    return state;
  }
};

export default wallet;
