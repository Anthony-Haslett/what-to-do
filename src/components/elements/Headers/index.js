import React, { Component } from 'react';
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
