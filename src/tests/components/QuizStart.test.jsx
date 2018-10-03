/* eslint-disable no-undef */

import React from 'react';
import { shallow } from 'enzyme';

import QuizStart from '../../components/QuizStart';

const wrapper = shallow(<QuizStart />);

describe('QuizStart Component UI', () => {
  it('should render a react component', () => {
    expect(wrapper.length).toBe(1);
  });
});
