import Modal from './Modal';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Rec2d from '../../etc/Rec2d';
import './Viewmytrees.css'
import './DeleteCheck.css'
const DeleteTreecheck = (props) => {

    const [usetext, settext] = useState([]);
    const [mytrees, setmytrees] = useState([]);




    function func()
    {
        props.okay();
        props.fetch();
       
    }


    return (
        <Modal onClose={props.onClose} style={{ overflow: "auto" }} >
            <div className='dcheck'>
                삭제된 보드는<div>
                </div>
                복구할 수<div></div> 
                없습니다.
                <br></br><br></br>

                <button onClick={func}> 삭제 </button>
                <button
                onClick={props.onClose}> 취소 </button>
            </div>
           
        </Modal >
         
    );

    
};

export default DeleteTreecheck;