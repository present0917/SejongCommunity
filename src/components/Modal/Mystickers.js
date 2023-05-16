import Modal from './Modal';
import { useState } from 'react';

const  Mystickers = (props) => {
    
  const [name, setName] = useState('');
  const [text, settext] = useState('');
  const [memo, setmemo] = useState('');

  async function deletemytree() {   //내트리지우기
    const response = await fetch("/stickers");
    if (!response.ok) {
      throw new Error('Failed to fetch del tree data');
    }
    const data = await response.json();
    if (!data) {
      throw new Error('No Search Data');
    }
    console.log(data);
  }

deletemytree();


  return (
    <Modal onClose={props.onClose} style={{color:"blue"}} >
    <div style={{color:"blue"}}>
        
        </div>
  </Modal>
  );
};

export default Mystickers;