import Modal from './Modal';
import classes from './Form.module.css';
import { useState } from 'react';

const Show = (props) => {
  const { name, text, memo } = props.data;
  return (
    <Modal onClose={props.onClose}>
      
      <div>
        {name}
      </div>
        <div>
          {text}
        </div>
      {memo}
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onClose}>
            Close
          </button>
          
        </div>
      
    </Modal>
  );
};

export default Show;