import React, { Component, PropTypes } from 'react';
import Styles from './styles.js';

class Button extends Component {

  static propTypes = {
    children: PropTypes.any,
    onPress: PropTypes.func,
    color: PropTypes.string,
    disabled: PropTypes.bool
  }

  constructor (props) {

    super(props);

    this.state = {
      isPressed: false
    }

  }

  onPress () {
    if(this.props.onPress) {
      this.props.onPress();
    }
  }

  render() {

    var buttonStyles = [ Styles.Button ];

    if(this.state.isPressed) {
      buttonStyles.push( Styles.ButtonBackground );
    }

    if(this.state.disabled) {
      buttonStyles.push( Styles.ButtonDisabled );
    }

    // TODO - Bugfix this
    // style={ buttonStyles }

    return (
      <button
        style={ Styles.Button }
        onClick={() => this.onPress()}
        onMouseDown={() => this.setState({isPressed: true})}
        onMouseOut={() => this.setState({isPressed: false})}>

        {this.props.children}

      </button>
    )
  }

}

export default Button;
