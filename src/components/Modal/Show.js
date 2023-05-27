import Modal from './Modal';
import classes from './Form.module.css';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
const Show = (props) => {
  const backdatas=props.backdata.data.backSticker;
  const{auth}=props;
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
  const Submithandler=(event)=>  
  {
     event.preventDefault();
     props.onClose();
     props.delete(props.data);
     console.log('폼이 제출됐을때');
  }
  const openhandler=(event)=>  
  {
     event.preventDefault();
     props.open();
     
  }

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
          <button className={classes["button--alt"]} onClick={props.onClose}>
            Close
          </button>
          {auth == 2 && (
            <button className={classes["button--alt"]} onClick={openhandler}>
              Fix
            </button>
          )}
          <button type="submit" className={classes.button}>
            delete
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default Show;
