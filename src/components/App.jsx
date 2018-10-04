import React, { Component } from 'react';

import '../stylesheets/main.scss';

import Header from './Header';
import Numbers from './Numbers';
import Question from './Question';
import QuizStart from './QuizStart';
import QuizEnd from './QuizEnd';

import { random } from '../helpers';
import { START, QUESTION } from '../helpers/constants';
import { appState } from '../helpers/initialStates';
import { questions as loadedQuestions } from '../assets/questions.json';

/**
 *
 *
 * @description App Component
 *
 * @name App
 */
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...appState
    };
  }

  /**
   *
   *
   * @description Set initial App state before mount
   *
   * @memberof App
   */
  componentWillMount() {
    this.initializeAppState();
  }

  /**
   *
   *
   * @description Set initial App state
   *
   * @memberof App
   */
  initializeAppState = () => {
    const questionNumbers = [];
    loadedQuestions.map(
      (item, index) => questionNumbers.push(index + 1),
    );

    this.setState({
      ...appState,
      questionNumbers,
      questionsCount: questionNumbers.length,
    });
  }

  /**
   *
   *
   * @description Option buttons handler
   *
   * @memberof App
   */
  optionBtnClickHandler = ({ target }) => {
    const {
      score, questionNumbers,
      questionsAnswered,
      question,
      wrongSelectionCount
    } = this.state;

    const { name: option } = target;
    const { answer } = loadedQuestions[question - 1];

    const filteredQuestionNumbers = questionNumbers.filter(
      item => question !== item
    );

    const state = {
      questionNumbers: filteredQuestionNumbers,
      questionsAnswered: [
        ...questionsAnswered,
        question
      ],
      question: this.getQuestionNumber(
        filteredQuestionNumbers
      )
    };

    if (answer === option) {
      state.score = score + 1;
    }

    else {
      state.wrongSelectionCount = wrongSelectionCount + 1;
    }

    this.setState(state);
  }

  /**
   *
   *
   * @description select nect question index
   *
   * @memberof App
   *
   * @returns { Integer }
   */
  getQuestionNumber = questionNumbers => (
    questionNumbers[random(questionNumbers.length - 1)]
  );

  /**
   *
   *
   * @description Start quiz
   *
   * @memberof App
   */
  startQuizBtnHandler = () => {
    this.setState(({ questionNumbers }) => ({
      quizView: QUESTION,
      question: this.getQuestionNumber(questionNumbers)
    }));
  }

  restartQuizBtnHandler = () => {
    this.initializeAppState();
  }

  /**
   *
   *
   * @description Render quiz start component
   *
   * @returns { JSX }
   *
   * @memberof App
   */
  renderQuizStart = () => {
    const { quizView, questionsCount } = this.state;

    return (
      quizView === START
        ? (
          <QuizStart
            startQuiz={this.startQuizBtnHandler}
            questionsCount={questionsCount}
          />
        ) : null
    );
  }

  /**
   *
   *
   * @description Render quiz end component
   *
   * @returns { JSX }
   *
   * @memberof App
   */
  renderQuizEnd = () => {
    const {
      score,
      questionsCount,
      questionNumbers,
      quizEndReason
    } = this.state;

    return (
      questionNumbers.length === 0
        ? (
          <QuizEnd
            score={score}
            percent={Math.floor((score / questionsCount) * 100)}
            restartQuizBtnHandler={this.restartQuizBtnHandler}
            quizEndReason={quizEndReason}
          />
        ) : null
    );
  }

  /**
   *
   *
   * @description Render quiz question component
   *
   * @returns { JSX }
   *
   * @memberof App
   */
  renderQuestion = () => {
    const { quizView, question } = this.state;

    return (
      quizView === QUESTION && question > 0
        ? (
          <Question
            {...loadedQuestions[question - 1]}
            optionBtnClick={this.optionBtnClickHandler}
          />
        ) : null
    );
  }

  /**
   *
   *
   * @description Render application UI
   *
   * @memberof App
   *
   * @returns { JSX }
   */
  render() {
    const {
      questionsCount,
      questionsAnswered,
      score,
      quizView,
      wrongSelectionCount
    } = this.state;

    return (
      <div>
        <Header
          wrongs={wrongSelectionCount}
          score={score}
        />

        <div id="page-view" className="clearfix">
          <Numbers
            questionsCount={questionsCount}
            questionsAnsweredCount={questionsAnswered.length}
            wrongSelectionCount={wrongSelectionCount}
            showWrong={quizView === QUESTION}
          />

          { this.renderQuizStart() }
          { this.renderQuestion() }
          { this.renderQuizEnd() }
        </div>
      </div>
    );
  }
}

export default App;
