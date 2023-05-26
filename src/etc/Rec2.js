import { useState,useEffect} from "react";
import { Link } from "react-router-dom";
import tagData from "../dataJson/tagdata.json";
import "./Rec2.css";
const Rec2 = ({ treeKey, title, description, tags,dep,id,dataRange,nick }) => {
  
  const [isSelected, setIsSelected] = useState(false);
  
  const [showid, setshowid] = useState(false);
  const [showdep, setshowdep] = useState(false);
  function fun(){
  setshowid(dataRange.hasOwnProperty("studentId"));
  setshowdep(dataRange.hasOwnProperty("department"));
}

  useEffect(() => {
    fun();
  }, []);

  const tagMap = tagData.tags.map((e) => [e.value, e.text]);
  const tag = [];
  if (tags !== null)
    tags.forEach((v) => {
      tag.push("#" + tagMap[v - 1][1]);
    });
  return (
    <div className={`rec2 ${isSelected ? "selected" : ""}`}>
      <Link to={`/tree/${treeKey}`} style={{ textDecoration: "none" }}>
        <div>{title}</div>
        <div>{description}</div>
        <div>{showid ? `${dataRange.studentId} 학번`:'학번 비공개'}{` ${nick}`}</div>
        <div>{showdep ? dataRange.department:'학과 비공개'}</div>
        <i>{tag} </i>
      </Link>
    </div>
  );
};

export default Rec2;
