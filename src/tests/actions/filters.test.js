import moment from 'moment';
import {
  setStartDate,
  setEndDate,
  sortByDate,
  sortByAmount,
  setTextFilter
} from '../../actions/filters';


test('should generate setStartDate action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
      type: 'SET_START_DATE',
      date: moment(0)
  });
});

test('should generate setEndDate action object', () => {
  const action = setEndDate(moment(11));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    date: moment(11)
  })
});

test('should generate sortByDate action obect', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('should generate sortByAmount action object', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  })
});

test('should generate setTextFilter action object with text', () => {
  const text = 'shennanigans';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});

test('should generate setTextFilter action objet with default text', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
});