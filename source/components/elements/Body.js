import Radium from 'radium'
import React from 'react'

@Radium
class Body extends React.Component {

	render () {
		return (
			<div className="body">
				{this.props.children}
			</div>
		)
	}

}

export default Body
