import React, { Component } from 'react';
import { Link } from 'react-router'
import Body from '../../elements/Body';
import Headers from '../../elements/Headers';
import Panel from '../../organisms/Panel';
// import SideBar from '../../organisms/SideBar';
import './styles.css';

class Results extends Component {

  render() {
    return (
      <div className="page-container">
        <Headers />
        Results
        <Body>
          <div>
            <Link to="/">Home</Link>
            <br/>
            <Link to="/Testing">Testing</Link>
          </div>

          <Panel style={{marginLeft:'21%'}}>
          </Panel>

        </Body>
      </div>
    )
  }
}

export default Results;
