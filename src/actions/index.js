export const USER_LOGIN = 'USER_LOGIN';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';

export const userLogin = (email) => ({ type: USER_LOGIN, email });

export const addExpense = (payload) => ({ type: ADD_EXPENSE, payload });

export const removeExpense = (id) => ({ type: REMOVE_EXPENSE, id });

export const editExpense = (id, payload) => ({ type: EDIT_EXPENSE, id, payload });
