import { useState,useEffect } from 'react';
import classes from './Rec.module.css';
import { useNavigate } from 'react-router';
const Rec = (props) => {

  const navigate= useNavigate();
 

//   const cartCtx = useContext(CartContext);

//   const price = `$${props.price.toFixed(2)}`;

//   const addToCartHandler = amount => {
//     cartCtx.addItem({
//       id: props.id,
//       name: props.name,
//       amount: amount,
//       price: props.price
//     });
//   };

// function login()
// {
//   navigate('/login');
// }
       

       


console.log(props);
  return (
    <li className={classes.meal}>
      <div className='myinfo'>

        
        
      {/* <button onClick={login}>log in</button> */}
     
        <h3>{props.data.studentId} </h3>

        <div>{props.data.name} </div>
        <div>{props.data.department} </div>
        <div>닉네임: {props.data.nickname}</div>
        
        
      </div>
      <div>
        {/* <MealItemForm onAddToCart={addToCartHandler} /> */}
      </div>
    </li>
  );
};

export default Rec;