import React, { Component } from 'react';
import './styles.css';

class Scrollable extends Component {

  render() {
    return (
      <div className="scrollable-body">
        {this.props.children}
      </div>
    )
  }
}

export default Scrollable;
