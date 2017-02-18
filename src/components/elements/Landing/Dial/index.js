import React, { Component } from 'react';
import './styles.css';
import Cursor from './Cursor';
import $ from 'jquery';

class Dial extends Component {
  constructor(props) {
      super(props);
      
      this.state = {
          isMovable: false,
          
          cursorPosition: {
              x: 0,
              y: 0
          },
          
          sliderPosition: {
              x: parseInt($(this.refs.sliderCursor).left),
              y: parseInt($(this.refs.sliderCursor).top)
          }
      }
  }
  
  componentDidMount () {
    $(this.refs.sliderContainer).mousemove(this.onCursorMove.bind(this));
    $(this.refs.sliderCursor).mousedown(this.sliderDown.bind(this));
    $(this.refs.sliderContainer).mouseup(this.sliderUp.bind(this));
    
    // $(this.refs.sliderContainer).bind('touchdown', this.onTouchMove.bind(this));
    // $(this.refs.sliderContainer).bind('touchstart', this.sliderDown.bind(this));
    // $(this.refs.sliderContainer).bind('touchend', this.sliderUp.bind(this));
  }
  
  componentWillUnmount () {
    $(this.refs.sliderContainer).unbind(this.onCursorMove.bind(this));
    $(this.refs.sliderCursor).unbind(this.sliderDown.bind(this));
    $(this.refs.sliderContainer).unbind(this.sliderUp.bind(this));
    
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
    var offsets = {
      left: this.refs.sliderContainer.offsetLeft + (this.refs.sliderCursor.clientWidth / 2)  
    }
    
    var positionUpdate = {
      x: event.pageX - offsets.left,
      y: event.pageY
    }
    
    if (positionUpdate.x < this.refs.sliderContainer.offsetLeft) {
      positionUpdate.x = this.refs.sliderContainer.offsetLeft  
    }
    
    // if (positionUpdate.x > this.refs.sliderContainer.offsetLeft + this.refs.sliderHeader.clientWidth) {
    //   positionUpdate.x = this.refs.sliderContainer.offsetLeft + this.refs.sliderHeader.clientWidth;  
    // }
    
    var isMovable = this.state.isMovable;
    
    if (!isMovable) {
      return;
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
    
    console.debug(position);
    $(this.refs.sliderCursor).css('left', position.x + 'px');  
  }
  
  render() {
    return (
      <div className="dial-wrapper" ref="sliderContainer">
        {/* <hr className="header-wrapper" ref="sliderHeader" /> */}
        <Cursor ref="sliderCursor" />
      </div>
    )
  }
}

export default Dial;