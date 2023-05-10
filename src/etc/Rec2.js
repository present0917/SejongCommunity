import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import classes from './Rec.module.css';

const Rec2 = (props) => { 
console.log(props);
  return (
    <Link to={`${props.data.id}`}>
    <li className={classes.meal}>
      
      <div>
      <h3>{props.data.title}</h3>
        <div className={classes.description}>{props.data.maintext}</div>
        <div className={classes.price}>설명들추가</div>

      </div>
      
    </li>
    </Link> 
  );
};

export default Rec2;