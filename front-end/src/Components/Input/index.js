import React, { useState } from 'react';
import './style.css'

function Input(props){
    // props.teste=const[dado,setDado]=useState('');
    return(
        <div className="Input">
           <label htmlFor={props.name}>{props.label}</label><br />
<<<<<<< HEAD
           <input className={props.className} type={props.type} id={props.name} placeholder={props.placeholder} onChange={props.onChange} />
=======
           <input className={props.className} type={props.type} id={props.name} placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
>>>>>>> 352eebb0c6995f45b86d94de3bb5ba231ef4e8f8
        </div>
    );
}

export default Input;