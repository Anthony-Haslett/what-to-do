import Radium from 'radium'
import React from 'react'
import {render} from 'react-dom'
import color from 'color'
import Router from './framework/Router'
import LocalStorage from './framework/LocalStorage'
import AspectRatio from './framework/AspectRatio'
import LoadingScreen from './components/screens/LoadingScreen'
import HomeScreen from './components/screens/HomeScreen'
import './styles/app.scss'

LocalStorage.test();

var routes = {
	default: <HomeScreen />,
	homescreen: <HomeScreen />
}

@Radium
class Application extends React.Component {

	render () {
		return (
			<AspectRatio>
	
				
				<Router routes={routes} />
				

			</AspectRatio>
		)
	}

}

render((<Application /> ), document.getElementById('app'));