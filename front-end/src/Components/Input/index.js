import React, { useState } from 'react';
import './style.css'

function Input(props){
    return(
        <div className="Input">
<<<<<<< HEAD

           <label htmlFor={props.name}>{props.label}</label><br />
           <input className={props.className} type={props.type} id={props.name} placeholder={props.placeholder} onChange={props.onChange} />

=======
           <label htmlFor={props.name}>{props.label}</label><br />
           <input className={props.className} type={props.type} id={props.name} placeholder={props.placeholder} onChange={props.onChange} />
>>>>>>> b04324ca3ca6e7ace6d044ad11a20d24e94989c7
        </div>
    );
}

export default Input;