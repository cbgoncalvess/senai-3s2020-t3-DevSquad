import React from 'react';
import './style.css'

function Input (props) {
    return(
        <div className="Input">
           <label htmlFor={props.name}>{props.label}</label><br />
           <input className={props.className} type={props.type} id={props.name} placeholder={props.placeholder} onChange={props.onChange} value={props.value} maxLength={props.maxLength} minLength={props.minLength} required/>
        </div>
    );
}

export default Input;