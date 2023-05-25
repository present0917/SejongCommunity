import Modal from './Modal';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Mystickers = (props) => {

  const [usetext, settext] = useState([]);

  async function deletemytree() {   
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

  const navigate=useNavigate();

  const nav=(data)=>
  {
    console.log('클릭');
    navigate(`/tree/${data.treeKey}`)
    window.location.reload();
  }
  return (
    <Modal onClose={props.onClose} style={{ overflow: "auto" }} >
      <div style={{ textDecoration: "none"  }}>
        <div>
          

            {usetext.map((data) => (
              <div key={Math.random()} style={{
                border: "1px solid black"
              }} >
                <div onClick={()=>nav(data)}>
                {/* <Link to={`/tree/${data.treeKey}`} style={{ textDecoration: "none"  }} onClick={props.onClose} > */}
                <div >
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
                {/* </Link> */}
              </div>
            ))} </div>
      

      {/* {usetext.data[0].treeKey} */}

    </div>
  </Modal >
  );
};

export default Mystickers;