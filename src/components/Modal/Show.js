import Modal from './Modal';
import classes from './Form.module.css';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
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
  const [isdep,setisdep]=useState(false);
  const [isid,setisid]=useState(false);
  const check=()=>{
  if(backdatas.dataRange.hasOwnProperty("studentId"))
  {
    setisdep(true);
  }
  if(backdatas.dataRange.hasOwnProperty("department"))
  {
    setisid(true);
  }
}
useEffect(() => {
  check();
}, []);
 console.log(auth);
 console.log('시간')
 console.log(backdatas.created_at)
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

        </div>
        <div>
      {backdatas.title}
<br></br><br></br>
      </div>
      <div>
      {backdatas.message}
      </div>
      <br></br><br></br>
      <div>{isid ? `${backdatas.dataRange.studentId} 학번`:null}</div>
      <div>{isdep ? `${backdatas.dataRange.department}`:null}</div>
      <div>
      {`${backdatas.dataRange.nickname} 님 께서 ${moment(backdatas.created_at).format('YYYY년M월D일')}`}
      </div>
      <div>
      {`${moment(backdatas.created_at).format('h시m분s초')} 에 부착된 스티커입니다.`}
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