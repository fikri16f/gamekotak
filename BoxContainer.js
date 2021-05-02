import React,{ Component } from 'react'
import { View } from 'react-native'
import Box from './Box'
import { rgbValue, generateColors } from './Helper'

class BoxContainer extends Component{

static defaultProps = {
	num : 18
}
constructor(props){
	super(props)
	this.state = {
	
	colors : generateColors(this.props.num)
	}
	this.changeColor = this.changeColor.bind(this)
}

changeColor(c){
	
	let newColor
	do{
	newColor = `rgb(
		${rgbValue()},
		${rgbValue()}
	)`
		

	}while(newColor === c)

	this.setState(set => ({
	colors : set.colors.map(color => {
		if(color !== c) return color
		return newColor
	})
	}))
}

render(){
	return(
	<View>
		{this.state.colors.map(color => (
		<Box color={color} changeColor={this.changeColor}/>
		))}
	</View>
	)
}
}

export default BoxContainer
