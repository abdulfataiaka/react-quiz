/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import Numbers from '../../components/Numbers';

const props = {
  questionsCount: 20,
  questionsAnsweredCount: 0,
  wrongSelectionCount: 0,
};

const wrapper = shallow(<Numbers {...props} />);

describe('Numbers Component UI', () => {
  it('should render a react component for unanswered', () => {
    expect(wrapper.length).toBe(1);
  });

  it('should render a react component for answered', () => {
    wrapper.setProps({ questionsAnsweredCount: 20 });
    expect(wrapper.length).toBe(1);
  });
});
