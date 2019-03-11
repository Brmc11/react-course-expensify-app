import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT_COUNT',
  incrementBy
});

const decrementCount = ({decrementBy = 1 } = {}) => ({
  type: 'DECREMENT_COUNT',
  decrementBy
});

const setCount = ({ count = 1 }) => ({
  type: 'SET_COUNT',
  count
});

const resetCount = () => ({
  type: 'RESET_COUNT'
});

// Reducer
// 1. Reducer is a pure function
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT_COUNT':
      return {
        count: state.count - action.decrementBy
      };

    case 'SET_COUNT':
      return {
        count: action.count
      };
    case 'RESET_COUNT':
      return {
        count: 0
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState().count);
});


store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(setCount({ count: 77 }));

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(resetCount());
