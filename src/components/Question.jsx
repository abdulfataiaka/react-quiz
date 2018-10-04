import React from 'react';
import PropTypes from 'prop-types';

const Question = ({ question, options, optionBtnClick }) => (
  <div id="question-section">
    <div id="question">
      { question }
    </div>

    <div id="options">
      {Object.keys(options).map(key => (
        <button
          type="button"
          key={key}
          name={key}
          onClick={optionBtnClick}
        >
          {options[key]}
        </button>
      ))}
    </div>
  </div>
);

Question.propTypes = {
  optionBtnClick: PropTypes.func.isRequired,
  question: PropTypes.string.isRequired,
  options: PropTypes.shape({}).isRequired
};

export default Question;
