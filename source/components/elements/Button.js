import Radium from 'radium'
import React from 'react'
import color from 'color'
var styles = {};


@Radium
class Button extends React.Component {

	static propTypes = {
		type: React.PropTypes.string,
		styles: React.PropTypes.object,
		label: React.PropTypes.string,
		onClick: React.PropTypes.func
	}

	static defaultProps = {
		type: '',
		styles: {
			container: {},
			button: {},
			label: {}
		}
	}

	getButtonClass = () => {
		switch (this.props.type) {
			case 'green': 		return 'button-green'; break;
			case 'blue': 		return 'button-blue'; break;
			default: 
				return 'button-green'
		}
	}

	renderLabel = () => {
		return (
			<h4 style={[styles.label, this.props.styles.label]} className="button-label">
				{this.props.label}
			</h4>
		)
	}

	render () {
		return (
			<div style={[styles.container, this.props.styles.container]} className="button-container" onClick={this.props.onClick}>

				<button style={[styles.button, this.props.styles.button]} className={this.getButtonClass()}>
					{this.props.children}
				</button>

				{
					this.props.label ? this.renderLabel() : null
				}
				
			</div>
		)
	}

}


styles = {

	container: {
		position: 'relative',
		float: 'left',
		cursor: 'pointer'
	},

	button: {
	    width: '100%',
    	height: '100%',
	    outline: 0,
	    cursor: 'pointer'
	},

	label: {
		width: '100%',
		textAlign: 'center',
		color: '#fff',
	    fontSize: '1.3vw',
    	marginTop: '0.5vw'
	}

}


export default Button