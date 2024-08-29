import { shallow } from 'enzyme';
import React from 'react';
import Login from './Login';

const wrapper = shallow(<Login />);

it('renders without crashing', () => {
  shallow(<Login />);
});
it('renders login', () => {
  expect(wrapper.find('main.login').exists()).toEqual(true);
});