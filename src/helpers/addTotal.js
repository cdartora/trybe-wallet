const addTotal = (expenses) => {
  let total = 0;
  expenses.forEach(
    (expense) => {
      total += parseFloat(
        expense.value * parseFloat(
          expense.exchangeRates[expense.currency].ask,
        ),
      );
    },
  );

  return total;
};

export default addTotal;
