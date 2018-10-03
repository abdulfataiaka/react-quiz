/* eslint-disable no-undef */

import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../components/Header';

const wrapper = shallow(<Header />);

describe('Header Component UI', () => {
  it('should render a react component', () => {
    expect(wrapper.length).toBe(1);
  });
});
