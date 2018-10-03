import React from 'react';

const QuizEnd = () => (
  <section id="quiz-end" style={{ display: 'none' }}>
    <div id="about">
      500 Points
      <div>Time Elapsed</div>
    </div>

    <div id="control">
      {
        true
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

      <button type="button">Restart Quiz</button>
    </div>
  </section>
);

export default QuizEnd;
