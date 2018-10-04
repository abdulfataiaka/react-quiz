/* eslint-disable no-undef */

import React from 'react';
import { shallow } from 'enzyme';

import QuizEnd from '../../components/QuizEnd';
import { QUIZ_COMPLETE } from '../../helpers/constants';

const props = {
  score: 55,
  percent: 55,
  restartQuizBtnHandler: jest.fn(),
  quizEndReason: QUIZ_COMPLETE
};

const wrapper = shallow(<QuizEnd {...props} />);

describe('QuizEnd Component UI', () => {
  it('should render a react component for pass', () => {
    expect(wrapper.length).toBe(1);
  });

  it('should render a react component for fail', () => {
    wrapper.setProps({ score: 10, percent: 5 });
    expect(wrapper.length).toBe(1);
  });
});
