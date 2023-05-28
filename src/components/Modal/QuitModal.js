import Modal from './Modal';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Rec2d from '../../etc/Rec2d';
import './Viewmytrees.css'
import './DeleteCheck.css'
import sad from '../../pic/sad.png'
import errorimg from '../../pic/404.png'
import { useNavigate } from 'react-router-dom';
import LoadingContext from '../Nav/LoadingContext';
const QuitModal = (props) => { 
  const {updateLoading} = useContext(LoadingContext)
  const navigate  = useNavigate();
  async function iquit() { //삭제
    updateLoading(true,"탇퇴하는 중...ㅠㅠ")
    const response = await fetch(`/members` , {
      method: 'DELETE',
    });
    try{
    if (!response.ok) {
        throw new Error("서버응답 없음");
      }
      const data=await response.json();
      if(data.errorCode !==0){
        throw new Error('서버에서 문제 발생');
      }
      alert('탈퇴가 완료되었습니다.');
      navigate('/login');
    } catch(e) {
      alert(e);
    } finally {
      updateLoading(false);
    }
  }


    return (
        <Modal onClose={props.onClose} style={{ overflow: "auto" }} >
                  <div className="containera">
      <img src={sad} className="imga" />
        <div className="errormessage">
        정말 탈퇴하실건가요?<br></br>
                탈퇴 시 모든 스티커와 보드가<br></br>
                삭제되며, 복구할 수 없습니다<br></br>
            <button onClick={iquit}>탈퇴하기</button><button onClick={props.onClose}>취소</button> 
        </div>
        </div>


                
            

           
        </Modal >
         
    );

    
};

export default QuitModal;