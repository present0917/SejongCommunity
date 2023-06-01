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
  const [fixtreeOpen, setfixtreeOpen] = useState(false);

  const tags=props.tags
  const tagMap = tagData.tags.map((e) => [e.value, e.text]);
  const tag = [];
  if (tags !== null)
    tags.forEach((v) => {
      tag.push("#" + tagMap[v - 1][1]);
    });

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
    setfixtreeOpen(true);


    // props.closeone();
    
    }}
      >수정</button>

  

<Fixtreeform className="newModal"
        maketreeOpen={fixtreeOpen}
        setmaketreeOpen={setfixtreeOpen}
        datas={props}
        reload={props.reload}
      ></Fixtreeform>
    </div>
    
  );
};
export default Rec2f;
