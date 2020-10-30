import React, { InputHTMLAttributes } from 'react';
import './style.css'

function Input(props){
    return(
        <div className="Input">
           <label htmlFor={props.name}>{props.label}</label><br />
           <input className="InputCadastro" type={props.text} id={props.name}/>
        </div>
    );
}

export default Input;