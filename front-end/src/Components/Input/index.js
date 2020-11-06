import React, { useState } from 'react';
import './style.css'

function Input(props){
    // props.teste=const[dado,setDado]=useState('');
    return(
        <div className="Input">
           <label htmlFor={props.name}>{props.label}</label><br />

           <input className="InputCadastro" type={props.text} id={props.name} placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>


        </div>
    );
}

export default Input;