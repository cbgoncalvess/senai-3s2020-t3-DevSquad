import React, { useState } from 'react';
import './style.css'

function Input(props){
    return(
        <div className="Input">
           <label htmlFor={props.name}>{props.label}</label><br />
           <input className="InputCadastro" type={props.type} id={props.name} placeholder={props.placeholder} onChange={props.onChange} />
        </div>
    );
}

export default Input;