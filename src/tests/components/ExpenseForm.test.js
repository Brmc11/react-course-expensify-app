import React from 'react';
import { shallow, mount } from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render expense form correctly', () => {
 const wrapper = shallow(<ExpenseForm />);
 expect(wrapper).toMatchSnapshot();
});
test('should render expense form with data', () => {
  const wrapper = shallow(<ExpenseForm expense={ expenses[0] } />);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', { preventDefault: () => {} });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
  const value = 'A very expensive expense';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('description')).toBe(value);
});

test('should set note on text area change', () => {
  const value = 'A very noteworthy note';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('textarea').simulate('change', {
    target: { value }
  });
  expect(wrapper.state('note')).toBe(value);
});

test('should set description on input change', () => {
  const value = '23.50';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('amount')).toBe(value);
});

test('should set description on input change', () => {
  const value = '12.122';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('amount')).toBe('');
});

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const exp = expenses[0];
  const wrapper = shallow(<ExpenseForm expense={exp} onSubmit={onSubmitSpy} />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  });

  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenCalledWith({
    description: exp.description,
    amount: exp.amount,
    note: exp.note,
    createdAt: exp.createdAt
  });
});

test('should set new date on date change', () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  // console.log('SDP: ', wrapper.find('SingleDatePicker').prop('onDateChange'));
  wrapper.find('SingleDatePicker');
  expect(wrapper.state('createdAt')).toEqual(now);
});

// test('should set calenderFocused on change', () => {
//   const focused = true; 
//   const exp = expenses[0];
//   const wrapper = shallow(<ExpenseForm expense={exp} />); 
//   // expect(wrapper.find('SingleDatePicker')).to.have.lengthOf(1);
//   wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
//   expect(wrapper.state('calendarFocused')).toBe(focused);
// }); 
