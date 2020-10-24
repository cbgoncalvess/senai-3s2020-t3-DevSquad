import React,{HTMLAttributes} from 'react';
import './style.css';

interface TagProps extends HTMLAttributes<HTMLElement> {
NomeTag:string
}

const Tag: React.FC<TagProps> =(TagProps)=>{
    return(
<div className="Tag">
    <h5>{TagProps.NomeTag}</h5>
</div>
    );
}
export default Tag;