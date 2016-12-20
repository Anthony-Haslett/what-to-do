import Radium from 'radium'
import React from 'react'
import color from 'color'
import $ from '../../bower_components/jquery/dist/jquery.min.js'
var styles = {}, images = {};

@Radium
class Slider extends React.Component {

	constructor(props) {
		
		super(props);

		this.state = {

			isMovable: false,
			
			cursorPosition: {
				x: 0,
				y: 0
			},

			sliderPosition: {
				x: parseInt(styles.slider.left),
				y: parseInt(styles.slider.top)
			}

		}

	}


	componentDidMount () {

		$(this.refs.sliderContainer).mousemove(this.onCursorMove.bind(this));
		$(this.refs.slider).mousedown(this.sliderDown.bind(this));
		$(this.refs.sliderContainer).mouseup(this.sliderUp.bind(this));

		$(this.refs.sliderContainer).touchmove(this.onCursorMove.bind(this));
		$(this.refs.slider).touchstart(this.sliderDown.bind(this));
		$(this.refs.sliderContainer).touchend(this.sliderUp.bind(this));
	
	}

	componentWillUnmount () {

		$(this.refs.sliderContainer).unbind(this.onCursorMove.bind(this));
		$(this.refs.slider).unbind(this.sliderDown.bind(this));
		$(this.refs.sliderContainer).unbind(this.sliderUp.bind(this));

		$(this.refs.sliderContainer).unbind(this.onCursorMove.bind(this));
		$(this.refs.slider).unbind(this.sliderDown.bind(this));
		$(this.refs.sliderContainer).unbind(this.sliderUp.bind(this));

	}




	sliderDown = (event) => {
		this.setState({isMovable: true});
	}

	sliderUp = (event) => {
		this.setState({isMovable: false});
	}



	onCursorMove = (event) => {

		var offsets = {
			left: this.refs.sliderContainer.offsetLeft + (this.refs.slider.clientWidth / 2)
		}

		var positionUpdate = {
			x: event.pageX - offsets.left,
			y: event.pageX
		}

		if(positionUpdate.x < this.refs.sliderContainer.offsetLeft) {
			positionUpdate.x = this.refs.sliderContainer.offsetLeft;
		}

		if(positionUpdate.x > this.refs.sliderContainer.offsetLeft + this.refs.hr.clientWidth) {
			positionUpdate.x = this.refs.sliderContainer.offsetLeft + this.refs.hr.clientWidth;
		}

		var isMovable = this.state.isMovable;

		if(! isMovable) {
			return
		}

		this.setState({cursorPosition: positionUpdate}, () => {

			this.updateSliderPosition(positionUpdate);	
		
		});

	}



	onTouchStart = (event) => {

		var touchEvent = event.touches[0];

		var positionUpdate = {
			x: touchEvent.screenX,
			y: touchEvent.screenY
		}

		console.debug(positionUpdate);
		
	}

	onTouchEnd = (event) => {
		console.debug('onTouchEnd', event);
	}



	updateSliderPosition = (position) => {
		
		console.debug(

			position

		);

		// position.x = position.x - 50;

		// if(position.x < 50) {
		// 	position.x = 50;
		// }

		// if(position.x > 480) {
		// 	position.x = 480;
		// }

		$(this.refs.slider).css('left', position.x + 'px');

	}

	render () {
		return (
			<div style={styles.container} ref="sliderContainer">
				

				<hr ref="hr" style={styles.hr} />


				<div ref="slider" style={styles.slider}></div>


			</div>
		)
	}


}


styles = {

	container: {
		position: 'relative',
		width: '80%',
		height: '40%',
		padding: '3%',
		margin: '7%',
		backgroundColor: '#eee'
	},

	hr: {
		position: 'absolute',
		width: '80%',
		top: '40%',
		left: '10%',
		border: '1px solid #ccc'
	},

	slider: {
		position: 'absolute',
		width: '3vw',
		height: '3vw',
		top: '35%',
		left: '10%',
		borderRadius: '100%',
		backgroundColor: 'green'
	}

}


export default Slider