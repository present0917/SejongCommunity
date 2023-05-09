import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import classes from './Rec.module.css';

const Rec2 = (props) => { 
console.log(props);
  return (
    <Link to={`${props.data}`}>
    <li className={classes.meal}>
      
      <div>
      <h3>{props.data}</h3>
        <div className={classes.description}>자세한</div>
        <div className={classes.price}>설명들추가</div>
        
      </div>
      
    </li>
    </Link> 
  );
};

export default Rec2;