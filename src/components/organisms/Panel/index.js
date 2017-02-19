import React, { Component } from 'react';
import './styles.css';

class Panel extends Component {
  render() {
    return (
      <div className="panel-container">
        {this.props.children}
      </div>
    )
  }
}

export default Panel;
