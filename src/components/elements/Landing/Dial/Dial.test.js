import React from 'react';
import ReactDOM from 'react-dom';
import Dial from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dial />, div);
});
