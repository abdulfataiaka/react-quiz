import { START, QUIZ_COMPLETE } from './constants';

export const appState = {
  question: 0,
  questionNumbers: [],
  questionsAnswered: [],
  questionsCount: 0,
  quizView: START,
  quizEndReason: QUIZ_COMPLETE,
  wrongSelectionCount: 0,
  score: 0
};

export default {};
