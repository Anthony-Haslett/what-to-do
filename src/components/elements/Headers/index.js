import React, { Component } from 'react';
import { Link } from 'react-router'
import './styles.css';

class Headers extends Component {

  render() {
    return (
      <div className="headers">
        {this.props.children}
      </div>
    )
  }
}

export default Headers;
