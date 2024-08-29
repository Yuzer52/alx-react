import { shallow } from 'enzyme';
import React from 'react';
import Footer from './Footer';

const wrapper = shallow(<Footer />);

it('renders without crashing', () => {
  shallow(<Footer />);
});
it('renders footer', () => {
  expect(wrapper.find('footer.footer').exists()).toEqual(true);
});