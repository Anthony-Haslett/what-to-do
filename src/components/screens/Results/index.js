import React, { Component } from 'react';
import { Link } from 'react-router'
import './styles.css';

class Results extends Component {

  render() {
    return (
      <div className="page-container">

        Results

        <br />

        <Link to="/">Home</Link>

      </div>
    )
  }
}

export default Results;