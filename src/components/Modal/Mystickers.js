import Modal from './Modal';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import LoadingContext from '../Nav/LoadingContext';
const Mystickers = (props) => {
  
  const [usetext, settext] = useState([]);
  const {updateLoading} = useContext(LoadingContext);
  async function deletemytree() {   
    updateLoading(true,"스티커 불러오는중...");
    const response = await fetch("/stickers");
    try{
      if (!response.ok) {
        throw new Error('Failed to fetch del tree data');
      }
      const data = await response.json();

      if (!data) {
        throw new Error('No Search Data');
      }
      settext(data.data);
    } catch(e) {
      alert(e);
      
    } finally {
      updateLoading(false);
    }
  }

  // deletemytree();

  useEffect(() => {
    deletemytree();
  }, []);

  const navigate=useNavigate();

  const nav=(data)=>
  {
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
                  제목 {data.title}
                </div>
                <div>
                  내용 {data.message}
                </div>
                <div>
                  스티커모양 {data.type}
                </div>
                <div>

                  트리제목 {data.title}
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