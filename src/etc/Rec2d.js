import { useState, useContext } from "react";

import tagData from "../dataJson/tagdata.json";
import "./Rec2.css";
import DeleteTreecheck from "../components/Modal/DeleteCheck"
import LoadingContext from "../components/Nav/LoadingContext";

const Rec2d = (props) => {
  const [isSelected, setIsSelected] = useState(false);
  const [checkmodal, setcheckmodal] = useState(false);

  const {updateLoading} = useContext(LoadingContext);

  const tags=props.tags
  const tagMap = tagData.tags.map((e) => [e.value, e.text]);
  const tag = [];
  if (tags !== null)
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
      updateLoading(true,"보드 삭제 중...");
      const response = await fetch(`/forest/${props.treeKey}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      try{
        if(response){
          console.log("삭제완료");
          props.fetch();
        } else {
          throw new Error("서버 응답 없음");
        }
      } catch(e) {
        alert(e);
      } finally {
        hideModalHandler();
        updateLoading(false);
      }
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
