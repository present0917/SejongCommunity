import { useState } from "react";

import tagData from "../dataJson/tagdata.json";
import "./Rec2.css";
import DeleteTreecheck from "../components/Modal/DeleteCheck"
import Fixtreeform from "../components/Modal/Fixtreeform";
import Fixtree from "../components/Modal/FixTree";
const Rec2f = (props) => {
  const [isSelected, setIsSelected] = useState(false);
  const [checkmodal, setcheckmodal] = useState(false);
  const [maketreeOpen, setmaketreeOpen] = useState(false);
  const tags=props.tags
  const tagMap = tagData.tags.map((e) => [e.value, e.text]);
  const tag = [];
  if (tags !== undefined)
    tags.forEach((v) => {
      tag.push("#" + tagMap[v - 1][1]);
    });

    const hideModalHandler = () => {
       setcheckmodal(false);
    };

    const checkopen=()=>
    {
      setcheckmodal(true);
    }



    async function fixtree() {
      const response = await fetch(`/forest/${props.treeKey}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      });
      hideModalHandler();
    }



  return (
    <div className={`rec2d ${isSelected ? "selected" : ""}`}>
      <div to={`/tree/${props.treeKey}`} style={{ textDecoration: "none" }}
      >
        <div>{props.title}</div>
        <div>{props.memberKey}</div>
        <div>{props.description}</div>
        <i>{tag} </i>
      </div>
      <button
   onClick={() => {
    props.open();
    props.closeone();
    }}
      >수정</button>

  
    </div>
    
  );
};
export default Rec2f;
