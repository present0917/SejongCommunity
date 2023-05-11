import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Rec2.css'
const Rec2 = (props) => { 
  const tag=[];

  const [isSelected, setIsSelected] = useState(false);
  if(props.data.tags[0])
    tag.push(...`#${props.data.tags}`)


console.log(props);
  return (
    




       <div className={`rec2 ${isSelected ? 'selected' : ''}`} >
         <Link to={`${props.data.id}`} style={{ textDecoration: "none" }} >
      <div>{props.data.title}</div>
        <div >{props.data.maintext}</div>
        <div >{tag}</div>
        </Link>
      </div> 


   
  


    
     
  );
};

export default Rec2;