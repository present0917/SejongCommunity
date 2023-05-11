import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import classes from './Rec.module.css';

const Alertlist = (props) => { 
  const tag=[];

 

console.log(props);
  return (
    <Link to={`${props.data.treeid}`}>
    <li className={classes.meal}>
      
      <div>
      <h3>{`${1}님이 나에게 스티커를 남겼습니다.`}</h3>
        <div className={classes.description}>{props.data.maintext}</div>
        <div className={classes.price}>{tag}</div>

      </div>
      
    </li>
    </Link> 
  );
};

export default Alertlist;