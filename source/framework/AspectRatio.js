import Radium from 'radium'
import React from 'react'
import color from 'color'
var styles = {};


class AspectRatio extends React.Component {

	render () {
		return (
			<div style={styles.background}>
				<figure style={styles.figure}>
					
					<div style={styles.stretchyWrapper}>
						<div style={styles.stretchyWrapperDiv}>

							{this.props.children}

						</div>
					</div>

				</figure>
			</div>
		)
	}

}


styles = {

	figure: {
		width: '100%',
        margin: '0% auto'
	},

    stretchyWrapper: {
        width: '100%',
        paddingBottom: '56.25%', /* 16:9 */
        position: 'relative'
    },
     
    stretchyWrapperDiv: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        color: 'white',
        fontSize: '24px',
        textAlign: 'center'
    },

    background: {
    	width: '100%',
    	height: '100%',
    	padding: 0,
    	margin: 0
    }

}

export default AspectRatio