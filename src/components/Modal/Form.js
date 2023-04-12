import Modal from './Modal';
import classes from './Form.module.css';
import { useState } from 'react';

const Form = (props) => {
  const [name, setName] = useState('');
  const [text, settext] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(name, text);
    const data = { name, text };
    props.onClick(data);
    props.onClose();

  };
  const radioHandler = (event) => {
    setName(event.target.value);
  };

  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={submitHandler}>
        <div className={classes['form-control']}>
          <label htmlFor="name">스티커종류</label>
          <div>
          <label>
              <input type="radio" name="sticker" value="1" checked={name === '1'} onChange={radioHandler} />
              A 스티커
            </label>
            <label>
              <input type="radio" name="sticker" value="2" checked={name === '2'} onChange={radioHandler} />
              B 스티커
            </label>
          </div>
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
          <button type="button" className={classes['button--alt']} onClick={props.onClose}>
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