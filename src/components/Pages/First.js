import Doyouknow from "../../etc/Doyouknow";
import "./First.css";
import { useEffect } from "react";
import { useState } from "react";
import { useOutletContext } from "react-router";
import { Link } from "react-router-dom";
import Rec2 from "../../etc/Rec2";
import board from "../../pic/board.png"
const First = (props) => {

  const [isalarm, setisalarm] = useState(0);
  const { sum } = useOutletContext();

  const alarmcheck = () => {
    if (sum > 0) {
      setisalarm(sum);
    }
    console.log(sum);
  }
  useEffect(() => {
    alarmcheck();
    fetchData();
  }, []);

  {/* 아래로 */ }
  const [trees, setmytrees] = useState([]);
  async function fetchData() {
    //트리정보
    const response = await fetch("/members");
    if (!response.ok) {
      throw new Error("Failed to fetch Search data");
    }
    const data = await response.json();
    if (!data) {
      throw new Error("No Search Data");
    }
    console.log('확인');
    console.log(data);  
    const mapping = data.treeId.map((element) => {
      return {
        treeKey: element.treeKey,
        memberKey: element.memberKey,
        title: element.title,
        description: element.description,
        tags: element.tags,
      };
    });

    setmytrees(mapping);
    console.log(mapping);

  }





  return (
    <div className="first">


<Link to={`/alert`} style={{ textDecoration: "none" }}>
        {sum > 0 && <div>  {sum}개의 알람이 있습니다.</div>}
      </Link>
    <div className='galarm'>
      {trees.map((post) => (
        <div key={Math.random()} className='galarms'>
           <img src={board} className="smallboard" />
          {/* treeKey={post.treeKey}
          title={post.title}
          memberKey={post.memberKey}
          description={post.description}
          tags={post.tags} */}
       </div>
      ))}
      </div>




      {/* <div className="alertContainer">
        <div className="treeAlert"></div>
      </div> */}
      <div className="kknow">
        <Doyouknow></Doyouknow>
      </div>
    </div>
  );
};
export default First;
