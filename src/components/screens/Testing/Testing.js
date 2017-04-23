import React, { Component } from 'react'
import Headers from '../../elements/Headers'
import Body from '../../elements/Body'
import Panel from '../../organisms/Panel'
import Button from '../../elements/Button'
import './styles.css'

class Testing extends Component {

  render() {
    return (
      <div className="page-container">

        <Headers />

        <Body>

          <div className="sub-header">
            <h1>Test Screen</h1>
          </div>


          <Panel style={{marginLeft:'21%'}}>

            <Button disabled={true}>Boo!</Button>


          </Panel>

        </Body>
      </div>
    )
  }
}

export default Testing;
