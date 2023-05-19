import Doyouknow from "../../etc/Doyouknow";
import "./First.css";
import {useEffect } from "react";
import { useState } from "react";
import { useOutletContext } from "react-router";
import { Link } from "react-router-dom";
const First = (props) => {
  
  const [isalarm,setisalarm] = useState(0);
  const {sum}=useOutletContext();

  const alarmcheck=()=>
  {
    if(sum>0)
    {
      setisalarm(sum);
    }
    console.log(sum);
  }
  useEffect(() => {
    alarmcheck();
  }, []);
  return (
    <div className="first">

    
<Link to={`/alert`} style={{ textDecoration: "none"  }}>
        {sum>0 && <div>  {sum}개의 알람이 있습니다.</div>}
    </Link>

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
