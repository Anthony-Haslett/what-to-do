import Radium from 'radium'
import React from 'react'
import color from 'color'
var styles = {};


@Radium
class Layout extends React.Component {

	static propTypes = {
		style: React.PropTypes.object,
		width: React.PropTypes.string,
		height: React.PropTypes.string
	}

	convertUnit = (unitValue) => {

		unitValue = unitValue || '';

		if(! (unitValue.substr(1,1) == '/')) {
			return unitValue;
		}

		var parts = unitValue.split('/');
		return (100 / parts[1] * parts[0]).toFixed(2) + '%';

	}

	render () {

		var parsedStyles = {
			width: this.convertUnit( this.props.width ) || styles.container.width,
			height: this.convertUnit( this.props.height ) || styles.container.height
		}

		return (
			<div style={[styles.container, parsedStyles, this.props.style]}>
				{this.props.children}
			</div>
		)

	}

}


styles = {

	container: {
		position: 'relative',
		float: 'left',
		width: '100%',
		height: '100%',
		minHeight: '1vw'
	}

}


export default Layout