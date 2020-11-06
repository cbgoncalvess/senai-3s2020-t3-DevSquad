import React, { useState } from 'react';
import './style.css'

function Input(props){
    // props.teste=const[dado,setDado]=useState('');
    return(
        <div className="Input">
           <label htmlFor={props.name}>{props.label}</label><br />
           <input className={props.className} type={props.type} id={props.name} placeholder={props.placeholder} onChange={props.onChange} />
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======

           <input className="InputCadastro" type={props.text} id={props.name} placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>


>>>>>>> f06b0d22fe3f6bdac53eed0ff2270f3729c0e382
>>>>>>> 8f3d49cb032971f61133d0331fa9ba5039621602
>>>>>>> d75875f4606b4fcbfdcab05a99426af22c83ac23
        </div>
    );
}

export default Input;