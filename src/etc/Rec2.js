import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import tagData from "../dataJson/tagdata.json";
import "./Rec2.css";
const Rec2 = ({
  treeKey,
  title,
  description,
  tags,
  dep,
  id,
  dataRange,
  nick,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const [showid, setshowid] = useState(false);
  const [showdep, setshowdep] = useState(false);
  function fun() {
    setshowid(dataRange.hasOwnProperty("studentId"));
    setshowdep(dataRange.hasOwnProperty("department"));
  }

  useEffect(() => {
    fun();
  }, []);

  const tagMap = tagData.tags.map((e) => e.text);
  const tag = [];
  const test = tagMap.findIndex((element, index, array) => {
    return element === "팀플";
  });
  console.log(test);
  if (tags !== null)
    tags.forEach((v) => {
      tag.push("#" + tagMap[v - 1]);
    });
  if (!tags) {
    return <></>;
  }
  return (
    <div className="rec2">
      <Link to={`/tree/${treeKey}`} style={{ textDecoration: "none" }}>
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        <div className="info">
          <Link to={"/forest"} className="tag">
            <i className="tag">{tag} </i>
          </Link>
          <span className="writter">
            <>{showid ? `${dataRange.studentId}학번` : "학번 비공개"} </>
            <>{`${nick}`} </>
            <>{showdep ? dataRange.department : "학과 비공개"} </>
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Rec2;
