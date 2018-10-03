import React from 'react';

const Numbers = () => (
  <div id="numbers">
    <div>40 Questions</div>
    <div>
      {/* just to render some numbers */}
      { Array(20).fill(1).map((item, index) => <span key={index} className="answered">{ index + 1 }</span>)}
      { Array(20).fill(1).map((item, index) => <span key={index}>{ index + 21 }</span>)}
    </div>
  </div>
);

export default Numbers;
