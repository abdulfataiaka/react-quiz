import React from 'react';

const Header = () => (
  <header>
    <div id="page-header" className="clearfix">
      <div className="page-name">
        Final Quiz Component
      </div>

      <div className="timer">
        <i className="fas fa-clock" />
        00 : 00
      </div>
    </div>
  </header>
);

export default Header;
