import Radium from 'radium'
import React from 'react'
import color from 'color'
import Headers from '../elements/Headers'
import Slider from '../elements/Slider'
var styles = {}, images = {};

@Radium
class HomeScreen extends React.Component {

	constructor(props) {
		
		super(props);

		this.state = {
		}

	}

	render () {
		return (
			<section className="page-home">

				<Headers>
					<p>Headers..</p>
				</Headers>

				

				<h1>Home Screen</h1>

				<Slider />

				
			</section>
		)
	}


}


styles = {
	container: {
	}
}


export default HomeScreen