/* eslint-disable no-undef */

import React from 'react';
import { shallow } from 'enzyme';

import Numbers from '../../components/Numbers';

const wrapper = shallow(<Numbers />);

describe('Numbers Component UI', () => {
  it('should render a react component', () => {
    expect(wrapper.length).toBe(1);
  });
});
