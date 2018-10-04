import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ score, wrongs }) => (
  <header>
    <div id="page-header" className="clearfix">
      <div className="page-name">
        Final Quiz Component
      </div>

      <div className="point-count hspaced">
        <i className="fas fa-times-circle" />
        { wrongs }
      </div>

      <div className="point-count">
        <i className="fas fa-check-circle" />
        { score }
      </div>
    </div>
  </header>
);

Header.propTypes = {
  score: PropTypes.number.isRequired,
  wrongs: PropTypes.number.isRequired,
};

export default Header;
