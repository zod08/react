import React , {useState} from 'react';
import Title from './Title';
import Ecran from './Ecran';
import Resultat from './Resultat';
import Buttons from './Buttons';
import '../styles/first-component.css';

const Display = () => {
	const [val , setVal] = useState('');
	const [firstNum , setNum1] = useState(0);
	const [secondNum , setNum2] = useState(0);
	//const [total , setTotal] = useState(0);
	const [signe , setSigne] = useState('');
 
	 

	const calcul = (signe, num1 , num2) => {
		if(signe === 'x'){return num1 * num2;}
		if(signe === '%'){return num1 / num2;}
		if(signe === '+'){return num1 + num2;}
		if(signe === '-'){return num1 - num2;}
	}
	 	
	const buttonClicked = (e) => {
      	//alert(e.target.value);
      	if(e.target.value === 'clear'){
      		setVal('');
      		//setTotal(0);
      		setNum1(0);
      		setNum2(0);
      		setSigne('');
      	}else if(e.target.value === '+' || e.target.value === '-' || e.target.value === 'x' || e.target.value === '%' ){
      		setSigne(e.target.value);
      		setNum1(val);
      		setVal('');
      		 
      	}else if(e.target.value === '='){
      		setNum2(val);
      		
      	}else{
      		setVal(val + e.target.value);
      	}

      	//setTotal(calcul(signe ,parseInt(firstNum) , parseInt(secondNum)))
      	
  	}
	 	
	 
	   
	 	
		return(

			<div className='root'>
				{/*<p>{firstNum +' '+secondNum}</p>
				<p>{calcul(signe ,parseInt(firstNum) , parseInt(secondNum))}</p>
		 */}
				<Title />
				<Ecran typed={val}/>
				<Resultat typed={calcul(signe ,parseInt(firstNum) , parseInt(secondNum))}/>
				<Buttons click={buttonClicked}/>
			</div>
			
		);
}

export default Display;