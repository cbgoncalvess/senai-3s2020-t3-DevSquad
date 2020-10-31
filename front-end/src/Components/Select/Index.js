import React from 'react';
import './style.css'

function Select(props) {
    return (
        <div className="select">
            <label htmlFor={props.Name}>{props.label}</label><br></br>
            <select className="div-select">
                <option value={props.Name}>{props.Name}</option>
            </select>
        </div>
    );
}

export default Select;