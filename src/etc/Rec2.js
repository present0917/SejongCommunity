import { useState, useEffect, Children } from "react";
import { Link } from "react-router-dom";
import tagData from "../dataJson/tagdata.json"
import "./Rec2.css";
const Rec2 = ({ treeKey, memberKey, title, description, tags }) => {
  const [isSelected, setIsSelected] = useState(false);
  console.log(tags);
  const tagMap = tagData.tags.map((e)=>[e.value,e.text]);
  const tag = [];
  if (tags !== undefined) tags.forEach(v=>{
    tag.push("#"+tagMap[v-1][1]);
  })

  return (
    <div className={`rec2 ${isSelected ? "selected" : ""}`}>
      <Link to={`/tree/${treeKey}`} style={{ textDecoration: "none" }}>
        <div>{title}</div>
        <div>{memberKey}</div>
        <div>{description}</div>
        <i>{tag} </i>
      </Link>
    </div>
  );
};

export default Rec2;
