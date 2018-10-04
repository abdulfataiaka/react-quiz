/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App';
import { QUESTION } from '../../helpers/constants';

const wrapper = shallow(<App />);

describe('App Component UI', () => {
  it('should render a react component', () => {
    expect(wrapper.length).toBe(1);
  });
});

describe('App Component Methods', () => {
  const instance = wrapper.instance();

  describe('startQuizBtnHandler Method', () => {
    it('should set quizView to QUESTION', () => {
      instance.startQuizBtnHandler();
      expect(instance.state.quizView).toBe(QUESTION);
    });
  });

  describe('optionBtnClickHandler Method', () => {
    it('should not increment score', () => {
      wrapper.setState({ question: 1 });
      instance.optionBtnClickHandler({ target: { name: 'C' } });
      expect(instance.state.score).toBe(0);
    });

    it('should have questionNumbers to be of length 1', () => {
      expect(instance.state.questionNumbers.length).toBe(1);
    });

    it('should have question 1 in questionsAnswered', () => {
      expect(instance.state.questionsAnswered.includes(1)).toBe(true);
    });

    it('should not increment score', () => {
      instance.optionBtnClickHandler({ target: { name: 'C' } });
      expect(instance.state.score).toBe(1);
    });
  });

  describe('restartQuizBtnHandler method', () => {
    it('should set question state to 0', () => {
      instance.restartQuizBtnHandler();
      expect(instance.state.question).toBe(0);
      expect(instance.state.score).toBe(0);
      expect(instance.state.wrongSelectionCount).toBe(0);
    });
  });
});
