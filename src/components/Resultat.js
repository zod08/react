import React  from 'react';
import '../styles/screen.css';

const Resultat = ({typed}) => {
 
		return(
			<div>
				 <p>Total  : <input type="text" readOnly  value={typed}/></p>
			</div>
			
		);
 
}

export default Resultat;