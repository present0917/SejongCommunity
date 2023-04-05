import Modal from './Modal';
import classes from './Form.module.css';
import { useState } from 'react';

const Form = (props) => {
  const [name, setName] = useState('');
  const [text, settext] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();


    console.log(name, text);
  };

  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={submitHandler}>
        <div className={classes['form-control']}>
          <label htmlFor="name">스티커종류</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className={classes['form-control']}>
          <label htmlFor="text">내용</label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={(event) => settext(event.target.value)}
          />
        </div>
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onClose}>
            Close
          </button>
          <button type="submit" className={classes.button}>
            Add
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default Form;