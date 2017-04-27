import React, { Component } from 'react';

import Slider from '../../organisms/Slider';
import Searchbar from '../../organisms/Searchbar';
import Headers from '../../elements/Headers';
import Body from '../../elements/Body';
import Panel from '../../organisms/Panel';
import Button from '../../elements/Button'
import './styles.css';


class Homepage extends Component {

  onPressExample () {
    
    window.location = "/results"

  }

  render() {
    return (
      <div className="page-container">

        <Headers />

        <Body>

          <div className="sub-header">
            <h1>Bored? Find activities near you instantly...</h1>
          </div>


          <Panel style={{marginLeft:'21%'}}>


            <Button onPress={() => this.onPressExample()}>
              Results Screen
            </Button>



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
