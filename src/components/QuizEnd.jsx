import React from 'react';
import PropTypes from 'prop-types';

const QuizEnd = ({
  score,
  percent,
  restartQuizBtnHandler,
  quizEndReason
}) => (
  <section id="quiz-end">
    <div id="about">
      {percent}% - {score} Points
      <div>{quizEndReason}</div>
    </div>

    <div id="control">
      {
        percent >= 50
          ? (
            <div className="success">
              <i className="fas fa-thumbs-up" />
              You did great, want to take quiz again ?
            </div>
          )
          : (
            <div className="danger">
              <i className="fas fa-exclamation-circle" />
              Not too good, but You can still do better
            </div>
          )
      }

      <button
        type="button"
        onClick={restartQuizBtnHandler}
      >
        Restart Quiz
      </button>
    </div>
  </section>
);

QuizEnd.propTypes = {
  score: PropTypes.number.isRequired,
  quizEndReason: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
  restartQuizBtnHandler: PropTypes.func.isRequired
};

export default QuizEnd;
