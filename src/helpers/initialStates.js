import { START } from './constants';

export const appState = {
  question: 0,
  questionNumbers: [],
  questionsAnswered: [],
  questionsCount: 0,
  quizView: START,
  quizEndReason: 'Completed all questions',
  wrongSelectionCount: 0,
  score: 0,

  timer: {
    handle: null,
    minutes: 4,
    seconds: 30
  }
};

export default {};
