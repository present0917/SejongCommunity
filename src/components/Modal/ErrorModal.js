import Modal from './Modal';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Rec2d from '../../etc/Rec2d';
import './Viewmytrees.css'
import './DeleteCheck.css'
const ErrorModal = (props) => {


    return (
        <Modal onClose={props.onClose} style={{ overflow: "auto" }} >
            <div className='dcheck'>
                <br></br>
                <br></br>
                {props.message}
            
            </div>
           
        </Modal >
         
    );

    
};

export default ErrorModal;