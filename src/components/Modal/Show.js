import Modal from './Modal';
import classes from './Form.module.css';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
const Show = (props) => {
  console.log(props);
  // console.log(props.backdata.data.backSticker);
  const backdatas=props.backdata.data.backSticker;
  console.log(backdatas);
  // const {title}=props.backcardInfo;
  const params = useParams();
  const { id, type, message } = props.data;
  const{auth}=props;
  const [des, setdes] = useState('here is description'); //입력 내용 담을곳
  const [stuid, setid] = useState('here is student id'); //입력 내용 담을곳
 console.log(auth);
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
  // useEffect(() => {
  //   desfetch();
  // }, []);
  // async function desfetch() { //상세 불러오기 GET /stickers/{stickerKey}
  //   console.log('desfetch');
  //   const num=params.id;
  //   //console.log(num);
  //   const response = await fetch(`http://localhost:3002/${num}`);

  //   //const response = await fetch(`/${num}/${id}`);

  //   if (!response.ok) {
  //     throw new Error('Failed to fetch card data');
  //   }
  //   const data = await response.json();
  //   // if (!data.tree1) {
  //   //   throw new Error('Invalid card data');
  //   // }
  //   const mapping = await data.map((element) => {
  //     return {
  //       des: element.memo,
  //       studid: element.studentId
  //     };
  //   });
  //   //setdes('test');
  //   setdes(mapping.des);
  //   setid(mapping.studid);
  //   console.log(data);
  //   console.log(mapping);
  // };
  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={Submithandler}>
      <div>
        {type}
      </div>
        <div>

        </div>
        <div>
      {backdatas.title}

      </div>
      <div>
      {backdatas.message}
      </div>
      <div>
      {backdatas.created_at}
      </div>

        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onClose}>
            Close
          </button>
          {auth==2 &&
          <button className={classes['button--alt']} onClick={openhandler} >
            Fix
          </button>
}
          <button type="submit" className={classes.button}>
            delete
          </button>
          
        </div>
        </form>
    </Modal>
  );
};

export default Show;