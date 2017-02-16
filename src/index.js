import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import Homepage from './components/screens/Homepage';
import Results from './components/screens/Results';
import NoMatch from './components/screens/NoMatch';
import './index.css';


ReactDOM.render((
  <Router history={browserHistory}>

    <Route path="/" component={Homepage} />
    <Route path="results" component={Results} />

    <Route path="*" component={NoMatch}/>

  </Router>
), document.getElementById('root'));
