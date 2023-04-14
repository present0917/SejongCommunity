import Modal from './Modal';
import classes from './Form.module.css';
import { useState } from 'react';

const Show = (props) => {
  const { id, name, text, memo } = props.data;
  const Submithandler=(event)=>  
  {
     event.preventDefault();
     props.onClose();
     props.delete(props.data);
  }

  const patchhandler=(event)=>  
  {
     event.preventDefault();
     props.onClose();
     props.patch(props.data);
  }
  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={Submithandler}>
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
          <button className={classes['button--alt']} onClick={patchhandler}>
            patch
          </button>
          <button type="submit" className={classes.button}>
            delete
          </button>
        </div>
        </form>
    </Modal>
  );
};

export default Show;