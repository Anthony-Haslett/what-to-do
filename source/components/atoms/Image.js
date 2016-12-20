import Radium from 'radium'
import React from 'react'
import color from 'color'
var styles = {};


@Radium
class Image extends React.Component {

	static propTypes = {
		src: React.PropTypes.any,
		style: React.PropTypes.object,
		imgStyle: React.PropTypes.object,
		onClick: React.PropTypes.func

	}

	static defaultProps = {
	}

	render () {
		return (
			<div style={[styles.imageContainer, this.props.style]} onClick={this.props.onClick}>

				<img src={this.props.src} width="100%" style={[styles.imageStyles, this.props.imgStyle]} />

				{this.props.children}

			</div>
		)
	}

}


styles = {

	imageContainer: {
		
	},

	imageStyles: {
	}

}


export default Image
