import React from 'react';
import PropTypes from 'prop-types';

const QuizStart = ({ startQuiz, questionsCount }) => (
  <section id="quiz-start">
    <div id="about">
      <p>
        The quiz is currently not official, its just a nice way
        to see how this quiz application works
      </p>

      <p>
        The quiz contains
        &nbsp;
        <span>{questionsCount} questions</span>
        &nbsp;
        and there is a time limit of
        &nbsp;
        <span>4 minute 30 seconds</span>
      </p>

      <p>
        You will get &nbsp;
        <span>1 point</span>
        &nbsp;
        for each correct answer, your accumulated
        score can be seen on the header as progress and at the end of the
        quiz, your total score will be displayed
      </p>
    </div>

    <div id="control">
      <div>
        <i className="fas fa-flag-checkered" />
        So, what are you waiting for? Good Luck!
      </div>

      <button
        type="button"
        onClick={startQuiz}
        id="start-quiz-btn"
      >
        Start Quiz
      </button>
    </div>
  </section>
);

QuizStart.propTypes = {
  startQuiz: PropTypes.func.isRequired,
  questionsCount: PropTypes.number.isRequired,
};

export default QuizStart;
