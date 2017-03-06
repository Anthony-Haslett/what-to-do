import React, { Component } from 'react';
import Headers from '../../elements/Headers';
import Body from '../../elements/Body';
import Panel from '../../organisms/Panel';
import Slider from '../../organisms/Slider';
import Searchbar from '../../organisms/Searchbar';
import './styles.css';

class Homepage extends Component {

  render() {
    return (
      <div className="page-container">

        <Headers />

        <Body>

          <div className="sub-header">
            <h1>Bored? Find activities near you instantly...</h1>
          </div>


          <Panel>

            <h2>Where are you?</h2>
            <Searchbar />

            <h2>How far can you travel?</h2>
            <br/>

            <Slider />

            <h2>{"What's your budget?"}</h2>
            <br/>

            <Slider />

          </Panel>

        </Body>
      </div>
    )
  }
}

export default Homepage;
