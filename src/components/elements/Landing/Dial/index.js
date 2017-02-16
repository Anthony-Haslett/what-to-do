import React, { Component } from 'react';
import './styles.css';
import Cursor from './Cursor';

class Dial extends Component {
  render() {
    return (
      <div className="dial-wrapper">
        <Cursor />
      </div>
    )
  }
}

export default Dial;