import Doyouknow from "../../etc/Doyouknow";
import "./First.css";
import { useEffect } from "react";
import { useState } from "react";
import { useOutletContext } from "react-router";
import { Link } from "react-router-dom";
import board from "../../pic/board.png"
import { useNavigate } from "react-router-dom";
const First = (props) => {
  const navigate=useNavigate();
  const [isalarm, setisalarm] = useState(0);
  const { sum } = useOutletContext();

  const alarmcheck = () => {
    if (sum > 0) {
      setisalarm(sum);
    }
  }
  useEffect(() => {
    alarmcheck();
    fetchData();
  }, []);

  {/* 아래로 */ }
  const [trees, setmytrees] = useState([]);
  async function fetchData() {
    //트리정보
    try{
    const response = await fetch("/members");
    if (!response.ok) {
      console.log('re');
      navigate("/Errorlogin");
      // throw new Error("Failed to fetch Search data");
    }
    const data = await response.json();
    if (!data) {
      navigate("/Errorlogin");
      // throw new Error("No Search Data");
    }
  
  
    
    const mapping = data.treeId.map((element) => {
      const found = data.alarmCount.find((obj) => obj.id === element.treeKey);
      return {
        treeKey: element.treeKey,
        memberKey: element.memberKey,
        title: element.title,
        description: element.description,
        tags: element.tags,
        count: found ? found.count : 0,
      };
    });

    setmytrees(mapping);
  }
  catch(e)
  {
    navigate("/Errorlogin");
  }
  }

  async function randomtree() {
    //트리정보
    const response = await fetch("/forest/random-tree");
    if (!response.ok) {
      console.log('re');
      navigate("/Errorlogin");
      // throw new Error("Failed to fetch Search data");
    }
    const data = await response.json();
    if (!data) {
      navigate("/Errorlogin");
      // throw new Error("No Search Data");
    }
    navigate(`/tree/${data.tree.treeKey}`)
  }

  return (
    <div className="first">

<br></br>
<Link to={`/alert`} style={{ textDecoration: "none" }}>
        {sum > 0 && <div>  {sum}개의 알람이 있습니다.</div>}
      </Link>
      
      <br></br>
      <br></br>
          <div className='galarm'>
      
      {trees.map((post) => (
        <div key={Math.random()} className='galarms'>
          <div className="imgcontainer">
          <Link to={`/tree/${post.treeKey}`}>
           <img src={board} className="smallboard" />
           
           <span className="counttext"> {post.title}<br></br>{post.count}</span>
           </Link>
           </div>
       </div>
      ))}
     
      </div>


      <div className="kknow">
        <button onClick={randomtree}>I'm Feeling Lucky</button>
        <Doyouknow></Doyouknow>
      </div>
    </div>
  );
};
export default First;
