import { useState, useEffect, Children } from "react";
import { Link } from "react-router-dom";
import tagData from "../dataJson/tagdata.json";
import "./Rec2.css";
import DeleteTreecheck from "../components/Modal/DeleteCheck"

const Rec2d = ({ treeKey, memberKey, title, description, tags,check }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [checkmodal, setcheckmodal] = useState(false);

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
      console.log("체크모달열렸나?");
      setcheckmodal(true);
    }



    async function deletetree() {
      console.log("삭제할거야");
      const response = await fetch(`/forest/${treeKey}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      hideModalHandler();
    }



  return (
    <div className={`rec2d ${isSelected ? "selected" : ""}`}>
      <div to={`/tree/${treeKey}`} style={{ textDecoration: "none" }}
      >
        <div>{title}</div>
        <div>{memberKey}</div>
        <div>{description}</div>
        <i>{tag} </i>
      </div>
      <button
      onClick={checkopen}
      >삭제</button>

{checkmodal && <DeleteTreecheck onClose={hideModalHandler} okay={deletetree}/>}
    </div>
  );
};
export default Rec2d;