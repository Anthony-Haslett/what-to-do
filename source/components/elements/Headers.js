import Radium from 'radium'
import React from 'react'

@Radium
class Headers extends React.Component {

	render () {
		return (
			<div className="headers">
				{this.props.children}
			</div>
		)
	}

}

export default Headers
