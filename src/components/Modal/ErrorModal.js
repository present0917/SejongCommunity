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
            <div style={{fontSize:'1.5rem'}}>
                <br></br>
                <br></br>
                {props.message}
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

            <button onClick={props.onClose}>close</button>
            </div>
           
        </Modal >
         
    );

    
};

export default ErrorModal;