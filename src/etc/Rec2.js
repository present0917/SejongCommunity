import { useState, useEffect, Children } from "react";
import { Link } from "react-router-dom";
import "./Rec2.css";
const Rec2 = ({ treeKey, memberKey, title, description, tags }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className={`rec2 ${isSelected ? "selected" : ""}`}>
      <Link to={`/tree/${treeKey}`} style={{ textDecoration: "none" }}>
        <div>{title}</div>
        <div>{memberKey}</div>
        <div>{description}</div>
        {tags.map((tag) => (
          <i key={Math.random()}>{"#" + tag.join(", #")}</i>
        ))}
      </Link>
    </div>
  );
};

export default Rec2;
