import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT'});
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = { type: 'REMOVE_EXPENSE', id: expenses[1].id };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should note remove expense if id is not found', () => {
  const action = { type: 'REMOVE_EXPENSE', id: 44 };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add expense to expenses array', () => {
  const expense = {
    id: '44',
    description: 'bird feed',
    note: '',
    amount: 111222333444,
    createdAt: 111
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expensesReducer(expenses, action);
  expect(state[3]).toEqual(expense);
});


test('should edit and expense by id', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: 1,
    updates: { description: 'new car'}
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].description).toBe('new car');
});

test('should not edit expense if no id is found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: 69,
    updates: { description: 'new car'}
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].description).toBe(expenses[0].description);
});
