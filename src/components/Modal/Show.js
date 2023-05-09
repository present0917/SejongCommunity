import Modal from './Modal';
import classes from './Form.module.css';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
const Show = (props) => {
  const params = useParams();
  const { id, name, text, memo } = props.data;
  const [des, setdes] = useState('need to get maybe error'); //입력 내용 담을곳
  console.log(id);//스티커아이디
  console.log(props.treeid);//트리id
  const Submithandler=(event)=>  
  {
     event.preventDefault();
     props.onClose();
     props.delete(props.data);
  }
  const openhandler=(event)=>  
  {
     event.preventDefault();
     props.open();
     
  }
  useEffect(() => {
    desfetch();
  }, []);
  async function desfetch() { //상세 불러오기 GET /stickers/{stickerKey}
    console.log('desfetch');
    const num=params.id;
    //console.log(num);
    const response = await fetch(`http://localhost:3002/${num}`);
    //const response = await fetch(`http://localhost:3002/${num}/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch card data');
    }
    const data = await response.json();
    // if (!data.tree1) {
    //   throw new Error('Invalid card data');
    // }
    const mapping = await data.map((element) => {
      return {
        des: element.memo
      };
    });
    //setdes('test');
    setdes(mapping.des);
    console.log(data);
    console.log(mapping);
  };
  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={Submithandler}>
      <div>
        {name}
      </div>
        <div>
          {text}
        </div>
        <div>
      {des}
      </div>
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onClose}>
            Close
          </button>
          <button className={classes['button--alt']} onClick={openhandler}>
            Fix
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