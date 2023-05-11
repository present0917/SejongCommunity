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
        async function logout() {   //로그아웃
          console.log('out');
          const response = await fetch(`/logout`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
             
          });

          if (!response.ok) {
            throw new Error('Failed to log out');
          }
          console.log(response);
        }
function login()
{
  navigate('/login');
}
       


console.log(props);
  return (
    <li className={classes.meal}>
      <div>
        
        
      <button onClick={login}>log in</button>
      <button onClick={logout}>log out</button>
        <h3>{props.data.studentId} </h3>
        
        <div className={classes.price}>{props.data.name} </div>
        <div className={classes.price}>{props.data.department} </div>
        <div className={classes.description}>닉네임: {props.data.nickname}</div>
        
        <div className={classes.price}> </div>
        
      </div>
      <div>
        {/* <MealItemForm onAddToCart={addToCartHandler} /> */}
      </div>
    </li>
  );
};

export default Rec;