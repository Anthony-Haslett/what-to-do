import React from 'react'


class Router extends React.Component {

	static propTypes = {
		routes: React.PropTypes.object
	}

	constructor(props) {
		
		super(props);
		
		this.state = {
			route: 'default',
			forcePushState: false
		}

	}

	componentDidMount = () => {
		
		window.addEventListener('hashchange', this.onRouteUpdate.bind(this), false);

		setTimeout(() => {
			this.onRouteUpdate();
		}, 500);
		
	}

	componentWillUnmount = () => {
		window.removeEventListener('hashchange', this.onRouteUpdate.bind(this), false);
	}

	getLocation () {
		 return this.state.forcePushState 
		 			? this.getPushStateLocation() 
		 			: this.getHashLocation();
	}

	getPushStateLocation () {
		console.error('todo getPushStateLocation');
		return '';
	}

	getHashLocation () {
		return window.location.hash.replace(/^#\/?|\/$/g, ''); //.split('/');
	}

	onRouteUpdate () {
		
		var location = this.getLocation();

		if(! location) {
			this.setState({route: 'default'});
		}

		for(var componentKey in this.props.routes) {
			if(componentKey == location) {
				this.setState({route: componentKey});
			}
		}
		
	}

	render () {
		return this.props.routes[ this.state.route ];
	}

}


export default Router