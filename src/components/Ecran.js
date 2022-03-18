import React from 'react';
import '../styles/screen.css';

class Ecran extends React.Component{
	render(props){
	 

		return(
			<div>
				<p>Tapez : <input type="text" readOnly value={this.props.typed}/></p>
			</div>
			
		);
	}
}

export default Ecran;