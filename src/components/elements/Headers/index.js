import React, { Component } from 'react';
import './styles.css';

class Headers extends Component {

  render() {
    return (
      <div className="headers">

        <img src={require('./assets/logo.png')} className="logo" />

        {this.props.children}

      </div>
    )
  }
}

export default Headers;
