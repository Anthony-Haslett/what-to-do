import React, { Component } from 'react'
import Headers from '../../elements/Headers'
import Body from '../../elements/Body'
import Panel from '../../organisms/Panel'
import Button from '../../elements/Button'
import ListItems from '../../organisms/ListItems';
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

            <Button disabled={true}>Hello world!</Button>

              <ListItems
                items={[
                  {value: 'Test 1'},
                  {value: 'Test 2'},
                  {value: 'Test 3'}
                ]} />
          </Panel>

        </Body>
      </div>
    )
  }
}

export default Testing;
