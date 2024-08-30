import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

const wrapper = shallow(<App />);

it('renders without crashing', () => {
  shallow(<App />);
});