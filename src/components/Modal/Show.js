import Modal from './Modal';
import classes from './Form.module.css';
import { useState } from 'react';

const Show = (props) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();


    console.log(name, quantity);
  };

  return (
    <Modal onClose={props.onClose}>
      
      <div>
        {props.title}
      </div>
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onClose}>
            Close
          </button>
          
        </div>
      
    </Modal>
  );
};

export default Show;