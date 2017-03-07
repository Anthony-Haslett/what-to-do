import React, { Component } from 'react';
import Scrollable from '../Scrollable';
import './styles.css';


class Body extends Component {

  render() {
    return (
      <div className="body">

      	<Scrollable>
        	{this.props.children}
        </Scrollable>
        
      </div>
    )
  }
}

export default Body;
