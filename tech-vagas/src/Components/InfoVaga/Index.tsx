import React,{HTMLAttributes} from 'react';
import './style.css';

interface VagaProps extends HTMLAttributes<HTMLElement> {
NomeProp:string
Source?:any
}

const InfoVaga: React.FC<VagaProps> =(VagaProps)=>{
    return(
<div className="InfoVaga">
    <img src={VagaProps.Source}/>
    <h5>{VagaProps.NomeProp}</h5>
</div>
    );
}
export default InfoVaga;