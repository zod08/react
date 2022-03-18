import React from 'react';
import '../styles/Button.css'

class Button extends React.Component{
	render(props){
	 

		return(
			<div className='but'>
				 <button value={this.props.value} onClick={this.props.clicked}>{this.props.number}</button>
			</div>
			
		);
	}
}

export default Button;