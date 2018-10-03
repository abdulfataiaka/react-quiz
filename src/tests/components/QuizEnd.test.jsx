/* eslint-disable no-undef */

import React from 'react';
import { shallow } from 'enzyme';

import QuizEnd from '../../components/QuizEnd';

const props = {
  pass: true,
};

const wrapper = shallow(<QuizEnd {...props} />);

describe('QuizEnd Component UI', () => {
  it('should render a react component for pass', () => {
    expect(wrapper.length).toBe(1);
  });

  it('should render a react component for fail', () => {
    wrapper.setProps({ pass: false });
    expect(wrapper.length).toBe(1);
  });
});
