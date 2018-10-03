import React from 'react';
import '../stylesheets/main.scss';

import Header from './Header';
import Numbers from './Numbers';
import Question from './Question';
import QuizStart from './QuizStart';
import QuizEnd from './QuizEnd';

const App = () => (
  <div>
    <Header />

    <div id="page-view" className="clearfix">
      <Numbers />
      <Question />
      <QuizStart />
      <QuizEnd />
    </div>
  </div>
);

export default App;
