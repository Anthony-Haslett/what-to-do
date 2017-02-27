import React, { Component } from 'react';
import $ from 'jquery';
import './styles.css';


class Slider extends Component {

  constructor(props) {
      super(props);

      this.onCursorMove = this.onCursorMove.bind(this);
      this.sliderDown = this.sliderDown.bind(this);
      this.sliderUp = this.sliderUp.bind(this);

      this.state = {
          isMovable: false,

          cursorPosition: {
              x: 0,
              y: 0
          },

          sliderPosition: {
              x: 0, // parseInt($(this.refs.sliderCursor).left), dosnt have refs/state while constructing
              y: 0 // so we'll just use some defaults..
          }
      }
  }

  componentDidMount () {
    $(this.refs.sliderContainer).mousemove(this.onCursorMove);
    $(this.refs.slider).mousedown(this.sliderDown);
    $(this.refs.sliderContainer).mouseup(this.sliderUp);

    // $(this.refs.sliderContainer).bind('touchdown', this.onTouchMove.bind(this));
    // $(this.refs.sliderContainer).bind('touchstart', this.sliderDown.bind(this));
    // $(this.refs.sliderContainer).bind('touchend', this.sliderUp.bind(this));
  }

  componentWillUnmount () {
    $(this.refs.sliderContainer).unbind(this.onCursorMove);
    $(this.refs.slider).unbind(this.sliderDown);
    $(this.refs.sliderContainer).unbind(this.sliderUp);

    // $(this.refs.sliderContainer).unbind('touchdown', this.onTouchMove.bind(this));
    // $(this.refs.sliderContainer).unbind('touchstart', this.sliderDown.bind(this));
    // $(this.refs.sliderContainer).unbind('touchend', this.sliderUp.bind(this));
  }

  sliderDown = (event) => {
    this.setState({isMovable: true});
  }

  sliderUp = (event) => {
    this.setState({isMovable: false});
  }

  onCursorMove = (event) => {

    if (! this.state.isMovable) {
      return;
    }

    var offsets = {
      left: this.refs.sliderContainer.offsetLeft + (this.refs.slider.clientWidth / 2)
    }

    var positionUpdate = {
      x: event.pageX - offsets.left,
      y: event.pageY
    }

    if (positionUpdate.x < 0) {
      positionUpdate.x = 0
    }

    if(positionUpdate.x > (this.refs.sliderContainer.clientWidth - this.refs.slider.clientWidth)) {
      positionUpdate.x = (this.refs.sliderContainer.clientWidth - this.refs.slider.clientWidth);
    }

    this.setState({cursorPosition: positionUpdate}, () => {
      this.updateSliderPosition(positionUpdate);
    });

  }

  // onTouchMove = (event) => {
  //   var touchEvent = event.touches[0];

  //   var offsets = {
  //     left: this.refs.sliderContainer.offsetLeft + (this.refs.sliderCursor.clientWidth / 2)
  //   }

  //   var positionUpdate = {
  //     x: touchEvent.pageX - offsets.left,
  //     y: touchEvent.pageY
  //   }

  //   if (positionUpdate.x < this.refs.sliderContainer.offsetLeft) {
  //     positionUpdate.x = this.refs.sliderContainer.offsetLeft
  //   }

  //   if (positionUpdate.x > this.refs.sliderContainer.offsetLeft + this.refs.sliderHeader.clientWidth) {
  //     positionUpdate.x = this.refs.sliderContainer.offsetLeft + this.refs.sliderHeader.clientWidth;
  //   }

  //   var isMovable = this.state.isMovable;

  //   if (!isMovable) {
  //     return;
  //   }

  //   this.setState({cursorPosition: positionUpdate}, () => {
  //     this.updateSliderPosition(positionUpdate);
  //   });
  // }

  // onTouchStart = (event) => {
  //   this.setState({isMovable: true});
  // }

  // onTouchEnd = (event) => {
  //   this.setState({isMovable: false});
  // }

  updateSliderPosition = (position) => {
    $(this.refs.slider).css('left', position.x + 'px');
  }

  render() {
    return (
      <div className="slider-container" ref="sliderContainer">

        <div className="slider" ref="slider">
        </div>

      </div>
    )
  }
}

export default Slider;
