/* eslint-disable no-undef */

import React from 'react';
import { shallow } from 'enzyme';

import QuizStart from '../../components/QuizStart';

const props = {
  startQuiz: jest.fn(),
  questionsCount: 20
};

const wrapper = shallow(<QuizStart {...props} />);

describe('QuizStart Component UI', () => {
  it('should render a react component', () => {
    expect(wrapper.length).toBe(1);
  });
});
