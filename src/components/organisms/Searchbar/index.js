import React, { Component } from 'react';
import './styles.css';

class Searchbar extends Component {
  render() {
    return (
      <div className="searchbar">
        <input type="text" placeholder="Enter postcode or town" />
      </div>
    )
  }
}

export default Searchbar;