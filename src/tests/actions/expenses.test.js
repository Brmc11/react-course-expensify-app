import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '12345ACB'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '12345ACB'
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('1234AGC', { createdAt: 11011, note: 'goodbye'});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '1234AGC',
    updates: {
      createdAt: 11011,
      note: 'goodbye'
    }
  });
});

test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 100000,
    note: 'this was last months rent'
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('should setup add expenea action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  });
});
