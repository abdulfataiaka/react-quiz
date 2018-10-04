import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Numbers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderNumbers = () => {
    const { questionsCount, questionsAnsweredCount } = this.props;

    let number;
    const numbers = [];
    for (number = 1; number <= questionsCount; number += 1) {
      numbers.push(
        <span
          key={number}
          className={
            number <= questionsAnsweredCount
              ? 'answered'
              : ''
          }
        >
          {number}
        </span>
      );
    }

    return numbers;
  }

  render() {
    const { questionsCount } = this.props;

    return (
      <div id="numbers">
        <div className="clearfix">
          { questionsCount }
          &nbsp;Questions
        </div>

        <div>
          { this.renderNumbers() }
        </div>
      </div>
    );
  }
}

Numbers.propTypes = {
  questionsCount: PropTypes.number.isRequired,
  questionsAnsweredCount: PropTypes.number.isRequired
};

export default Numbers;
