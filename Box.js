import React,{ Component } from 'react'
import { View } from 'react-native'

class Box extends Component{
constructor(props){
	super(props)
	this.handleChangeColor = this.handleChangeColor.bind(this)
}

handleChangeColor(){
	
	this.props.changeColor(this.props.color)
}

render(){

	return <View
	
	
	onClick={this.handleChangeColor}
	style={{backgroundColor:this.props.color,
				width: 13, height: 13}}
	/>
}
}

export default Box
