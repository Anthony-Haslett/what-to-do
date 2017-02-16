import React, { Component } from 'react';
import Dial from '../Dial';
import Searchbar from '../Searchbar';
import './styles.css';

class Panel extends Component {
  render() {
    return (
      <div className="panel-container">
        <h2>Where are you?</h2>
        <Searchbar />
        
        <h2>How far can you travel?</h2>
        <br/>
        <Dial />
        
        <h2>What's your budget?</h2>
        <br/>
        <Dial />
      </div>
    )
  }
}

export default Panel;