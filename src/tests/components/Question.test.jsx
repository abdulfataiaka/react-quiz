/* eslint-disable no-undef */

import React from 'react';
import { shallow } from 'enzyme';

import Question from '../../components/Question';

const props = {
  question: 'What is your name',
  answer: 'A',
  options: {
    A: 'Ade',
    B: 'Bolu',
    C: 'Cyntia',
    D: 'Deji',
  },
  optionBtnClick: jest.fn()
};

const wrapper = shallow(<Question {...props} />);

describe('Question Component UI', () => {
  it('should render a react component', () => {
    expect(wrapper.length).toBe(1);
  });
});
