import React, { Component } from 'react';
import Headers from '../../elements/Headers';
import Body from '../../elements/Body';
import Panel from '../../elements/Landing/Panel';
import './styles.css';

class Homepage extends Component {

  render() {
    return (
      <div className="page-container">

        <Headers />

        <Body>
          <Panel />
        </Body>

      </div>
    )
  }
}

export default Homepage;
