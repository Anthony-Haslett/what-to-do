import React, { Component } from 'react';
import { Link } from 'react-router'
import './styles.css';

class Body extends Component {

  render() {
    return (
      <div className="body">
        {this.props.children}
      </div>
    )
  }
}

export default Body;
