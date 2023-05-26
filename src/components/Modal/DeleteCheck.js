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







    return (
        <Modal onClose={props.onClose} style={{ overflow: "auto" }} >
            <div className='dcheck'>
                정말 삭제하실건가요?
                <button onClick={props.okay}> 넵 </button>
                <button
                onClick={props.onClose}> 아니요 </button>
            </div>
           
        </Modal >
         
    );

    
};

export default DeleteTreecheck;