import Modal from './Modal';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Rec2d from '../../etc/Rec2d';
import './Viewmytrees.css'
import './DeleteCheck.css'
import '../../pic/sad.png'
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
        console.log(data);
        alert('탈퇴가 완료되었습니다.');
    }
    catch(e){
        
        navigate('/Error');
    }
      }


    return (
        <Modal onClose={props.onClose} style={{ overflow: "auto" }} >
            <div style={{fontSize:'1rem'}}>
                정말 탈퇴하실건가요?<br></br>
                탈퇴 시 모든 스티커와 트리가<br></br>
                삭제되며, 복구할 수 없습니다<br></br>

                
            
            </div>
           <button onClick={iquit}>탈퇴하기</button><button onClick={props.onClose}>취소</button>
        </Modal >
         
    );

    
};

export default QuitModal;