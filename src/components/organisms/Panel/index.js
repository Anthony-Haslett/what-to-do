import React, { Component } from 'react';
import './styles.css';

class Panel extends Component {
  render() {

  	var inlineStyles = (this.props.style || {});

    return (
      <div className="panel-container" style={inlineStyles}>
        {this.props.children}
      </div>
    )
  }
}

export default Panel;
