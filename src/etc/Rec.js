import { useState,useEffect } from 'react';

import classes from './Rec.module.css';

const Rec = (props) => {
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
          const response = await fetch("/logout");
          if (!response.ok) {
            throw new Error('Failed to log out');
          }
        }


console.log(props);
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.data.studentId} <button onClick={logout}>log out</button></h3>
        
        <div className={classes.description}>{props.data.nickname}</div>
        
        <div className={classes.price}> </div>
        
      </div>
      <div>
        {/* <MealItemForm onAddToCart={addToCartHandler} /> */}
      </div>
    </li>
  );
};

export default Rec;