import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Homepage from './components/screens/Homepage';
import Results from './components/screens/Results';
import Testing from './components/screens/Testing';
import NoMatch from './components/screens/NoMatch';
import './index.css';


ReactDOM.render((
  <Router history={browserHistory}>

    <Route path="/" component={Homepage} />

    
    <Route path="/results" component={Results} />
    <Route path="/testing" component={Testing} />

    <Route path="*" component={NoMatch}/>

  </Router>
), document.getElementById('root'));
