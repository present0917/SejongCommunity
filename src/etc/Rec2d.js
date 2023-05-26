import { useState } from "react";

import tagData from "../dataJson/tagdata.json";
import "./Rec2.css";
import DeleteTreecheck from "../components/Modal/DeleteCheck"

const Rec2d = (props) => {
  const [isSelected, setIsSelected] = useState(false);
  const [checkmodal, setcheckmodal] = useState(false);
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



    async function deletetree() {
      const response = await fetch(`/forest/${props.treeKey}`, {
        method: "DELETE",
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
      onClick={checkopen}
      >삭제</button>

{checkmodal && <DeleteTreecheck onClose={hideModalHandler} okay={deletetree} fetch={props.fetch} />}
    </div>
  );
};
export default Rec2d;
