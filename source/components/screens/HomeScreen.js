import Radium from 'radium'
import React from 'react'
import color from 'color'
import Headers from '../elements/Headers'
import Body from '../elements/Body'
import Slider from '../elements/Slider'

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

				<Body>

<<<<<<< HEAD
					<h1>Home Screen</h1>

					<Slider />

				</Body>
=======

				<div className="test">Boo!</div>

>>>>>>> 3739a80f9b4809dc8d680c09bee52930f868a0ba
				
			</section>
		)
	}


}

export default HomeScreen
