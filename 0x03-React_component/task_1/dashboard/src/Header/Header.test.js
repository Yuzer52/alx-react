import { shallow } from 'enzyme';
import React from 'react';
import Header from './Header';

const wrapper = shallow(<Header />);

it('renders without crashing', () => {
  shallow(<Header />);
});

it('renders header', () => {
  expect(wrapper.find('header.header').exists()).toEqual(true);
});