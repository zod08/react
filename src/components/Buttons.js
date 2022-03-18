import React from 'react';
import Button from './Button';
import '../styles/Buttons.css';

class Buttons extends React.Component{
	render(props){
	 

		return(
			<div className='container'>
				 <div className='column'>
					 <Button number='7' value='7' clicked={this.props.click}/>
					 <Button number='4' value='4' clicked={this.props.click}/>
					 <Button number='1' value='1' clicked={this.props.click}/>
					 <Button number='0' value='0' clicked={this.props.click}/>

				</div>
				 <div className='column'>
				 	<Button number='8'  value='8' clicked={this.props.click}/>
				 	<Button number='5'  value='5' clicked={this.props.click}/>
				 	<Button number='2'  value='2' clicked={this.props.click}/>
				 	<Button number='Reset' value='clear' clicked={this.props.click}/>
				</div>
				<div className='column'>
					 <Button number='9'  value='9' clicked={this.props.click}/>
					 <Button number='6'  value='6' clicked={this.props.click}/>
					 <Button number='3'  value='3' clicked={this.props.click}/>
					 <Button number='='  value='=' clicked={this.props.click}/>
					  
				</div>
				<div className='column'>
					 <Button number='x'  value='x' clicked={this.props.click}/>
					 <Button number='%'  value='%' clicked={this.props.click}/>
					 <Button number='+'  value='+' clicked={this.props.click}/>
					 <Button number='-'  value='-' clicked={this.props.click}/>
				</div>
			</div>
			
		);
	}
}

export default Buttons;