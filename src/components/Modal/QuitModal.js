import Modal from './Modal';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Rec2d from '../../etc/Rec2d';
import './Viewmytrees.css'
import './DeleteCheck.css'
import sad from '../../pic/sad.png'
import errorimg from '../../pic/404.png'
import { useNavigate } from 'react-router-dom';
const QuitModal = (props) => {

    const navigate=useNavigate();
    async function iquit() { //삭제
        try{
        const response = await fetch(`/members` , {
          method: 'DELETE',
        });
        if (!response.ok) {
            console.log('탈퇴중오류');
            navigate("/Error");
          }
          const data=await response.json();
          alert('탈퇴가 완료되었습니다.');
          navigate('/login');
        
    }
    catch(e){
        console.log(e);
        navigate('/Error');
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