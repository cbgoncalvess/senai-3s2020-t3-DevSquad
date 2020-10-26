import React, { InputHTMLAttributes } from 'react'
import '../input/style.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
name: string;
label:string;
}

const Input: React.FC<InputProps> =({label, name, ...rest})=>{
    return(
        <div>
           <label htmlFor={name}>{label}</label><br></br>
           <input type='text' id={name}{...rest}/>
        </div>
    );
}
export default Input;