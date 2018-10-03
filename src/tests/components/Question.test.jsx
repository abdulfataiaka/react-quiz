/* eslint-disable no-undef */

import React from 'react';
import { shallow } from 'enzyme';

import Question from '../../components/Question';

const wrapper = shallow(<Question />);

describe('Question Component UI', () => {
  it('should render a react component', () => {
    expect(wrapper.length).toBe(1);
  });
});
