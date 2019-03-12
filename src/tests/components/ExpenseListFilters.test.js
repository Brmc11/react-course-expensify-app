import React from 'react'; 
import { shallow } from 'enzyme';
import moment from 'moment'; 
import { ExpenseListFilters } from '../../components/ExpenseListFilters'; 
import { filters, altFilters } from '../fixtures/filters';
import { DateRangePicker } from 'react-dates';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper; 

beforeEach(() => {
  setTextFilter = jest.fn(); 
  sortByDate = jest.fn(); 
  sortByAmount = jest.fn(); 
  setStartDate = jest.fn(); 
  setEndDate = jest.fn(); 
  wrapper = shallow(
  <ExpenseListFilters 
    filters={filters}
    setTextFilter={setTextFilter}
    sortByDate={sortByDate}
    sortByAmount={sortByAmount}
    setStartDate={setStartDate}
    setEndDate={setEndDate}
  />); 
}); 

test('should render expense list filters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render expense list filters with alt data correctly', () => {
  wrapper.setProps({
    filters: altFilters
  }); 
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  const value = 'video game'
  wrapper.find('input').simulate('change', {
    target: { value } 
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value); 
});

test('should sort by date', () => {
  wrapper.setProps({
    filters: altFilters
  })
  wrapper.find('select').simulate('change', {
    target: { value: 'date'}
  });
  expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
  wrapper.find('select').simulate('change', {
    target: { value: 'amount'}
  }); 
  expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
  const startDate = moment(0).add(4, 'years'); 
  const endDate = moment(0).add(8, 'years'); 
  wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({startDate, endDate});
  expect(setStartDate).toHaveBeenLastCalledWith(startDate); 
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

// should handle date focus changes 
test('should handle date focus change', () => {
  const calendarFocused = 'endDate'; 
  expect(wrapper.state('calendarFocused')).toBe(null);
  wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
}); 
