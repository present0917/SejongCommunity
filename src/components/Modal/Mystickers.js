import Modal from './Modal';
import { useState } from 'react';
import { useEffect } from 'react';
const  Mystickers = (props) => {
    
  const [usetext, settext] = useState([]);

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
    settext(data.data);
  }

// deletemytree();

useEffect(() => {
    deletemytree();
  }, []);

  return (
    <Modal onClose={props.onClose} style={{overflow:"auto"}} >
    <div style={{color:"blue"}}>
        test
        <div>
        {usetext.map((data) => (
          <div key={Math.random()} style={{
            border: "1px solid black"
          }} >
            <div>
            제목{data.title}   
            </div>
            <div>
            내용{data.message}
            </div>
            <div>
            스티커모양{data.type}
            </div>
            <div>

            트리번호{data.treeKey}      
            </div>
            </div>
        ))} </div>
            {/* {usetext.data[0].treeKey} */}

        </div>
  </Modal>
  );
};

export default Mystickers;