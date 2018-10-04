/* eslint-disable no-undef */

import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../components/Header';

const props = {
  wrongs: 5,
  score: 5
};

const wrapper = shallow(<Header {...props} />);

describe('Header Component UI', () => {
  it('should render a react component', () => {
    expect(wrapper.length).toBe(1);
  });
});
