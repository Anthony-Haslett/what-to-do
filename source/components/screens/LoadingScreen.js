import Radium from 'radium'
import React from 'react'
import color from 'color'
import Slider from '../elements/Slider'
var styles = {}, images = {};

@Radium
class LoadingScreen extends React.Component {

	constructor(props) {
		
		super(props);

		this.state = {
		}

	}

	componentDidMount () {
		setTimeout(() => {
			window.location.hash = 'homescreen';
		}, 3000);
	}

	render () {
		return (
			<section className="page-landing">

				<h1>Splash Screen</h1>
				

				
			</section>
		)
	}


}


styles = {
	container: {
	}
}


export default LoadingScreen