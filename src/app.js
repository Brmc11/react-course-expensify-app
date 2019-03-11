import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import moment from 'moment';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({ description: 'a day at the ballpark', amount: 10000 }));
store.dispatch(addExpense({ description: 'water bill', amount: 6676 }));
store.dispatch(addExpense({ description: 'video game', note: 'NHL 19', amount: 60000 }));
store.dispatch(addExpense({ description: 'cell phone bill' }));
store.dispatch(addExpense({ description: 'Bars with Bill', note: 'stayed too late! ', amount: 45456969, createdAt: -625000 }));


const state = store.getState();
const visibileExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibileExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
