import React, { InputHTMLAttributes } from 'react';
import './style.css'

export default function Input(props){
    return(
        <div className="Input">
           <label htmlFor={props.name}>{props.label}</label> <br />
           <input placeholder={props.placeholder} type={props.type} id={props.name}/>
        </div>
    );
}