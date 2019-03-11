import { createStore, combineReducers } from 'redux';
import { v4 } from 'uuid';


/******************************
*                             *
*    DEFAULT STATE VALUES     *
*                             *
******************************/

const defaultArray = [];
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

/******************************
*                             *
*       ACTION CREATORS       *
*                             *
******************************/

// ADD_EXPENSE
const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0 } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: v4(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SET_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
const setStartDate = (date = undefined) => ({
  type: 'SET_START_DATE',
  date
});

// SET_END_DATE
const setEndDate = (date = undefined) => ({
  type: 'SET_END_DATE',
  date
});


/******************************
*                             *
*          REDUCERS           *
*                             *
******************************/

// Expenses Reducer
const expensesReducer = (state = defaultArray, action) => {
  switch(action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(exp => exp.id !== action.id);

    case 'EDIT_EXPENSE':
      return state.map(expense => {
        if (expense.id == action.id ) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense;
        };
      });
    default:
      return state;
  }
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.date
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.date
      }
    default:
      return state;
  }
}

/******************************
*                             *
*    STORE*ACTIONS*PRINT      *
*                             *
******************************/

// timestamps (milliseconds)
// January 1st 1970 @ 12:00AM (unix epoch)
// 33400, 10, -203

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt >= endDate;
    const textMatch = expense.description && expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

//Store Creation

const store = createStore(combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer
}));

store.subscribe(() => {
  const state = store.getState()
  const visibileExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log('Visible Expenes: ', visibileExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'rent', amount: 9000, createdAt: -1111000 }));
const expenseOnePointFive = store.dispatch(addExpense({ description: 'resubscribe to udemy', amount: 1000, createdAt: 99999}));
const expenseTwo = store.dispatch(addExpense({ description: 'coffee', amount: 12, createdAt: -31000 }));
const expenseThree = store.dispatch(addExpense({ description: 'video game', amount: 2342430}));

store.dispatch(sortByAmount()); //amount
// store.dispatch(sortByDate());   // date

//store.dispatch(setTextFilter('re'));


// store.dispatch(removeExpense({id: expenseOne.expense.id}));
//
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 6000 }))
//
// store.dispatch(setTextFilter('rent'));
//
// store.dispatch(setTextFilter(''));
//

// store.dispatch(setStartDate(0));
// store.dispatch(setEndDate(-999));

// const demoState = {
//   expenses: [{
//     id: 'shitfucker',
//     description: 'January Rent',
//     note: 'This is the first payment of the new year',
//     amount: 46000,
//     createDate: 0
//   }],
//   filters: {
//     text: 'rent',
//     sortBy: 'amount', // date or amount
//     stateDate: undefined,
//     endDate: undefined
//   }
// };
//
// const user = {
//   name: 'Ben',
//   age: 33
// };
//
// console.log({...user, location: 'Milford', age: 99});
