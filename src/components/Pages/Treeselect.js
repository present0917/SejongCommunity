import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Rec2 from "../../etc/Rec2";
import "./Treeselect.css";
import { element } from "prop-types";

const Treeselect = () => {
  const [trees, settrees] = useState([]);
  const [page, setPage] = useState(1);
  const [URL, setURL] = useState("/forest");
  async function fetchtrees() {
    if (page !== 1) setURL(`/forest?page=${page}`);
    else setURL("/forest");
    const response = await fetch(URL);
    try {
      if (!response.ok) {
        throw new Error("Failed to fetch trees");
      }
      const data = await response.json();
      if (!data) {
        throw new Error("No Search Data");
      }
      console.log(data);
      const mapping = data.data.map((element) => {
        return {
          treeKey: element.treeKey,
          title: element.title,
          description: element.description,
          tags: element.tags,
          range:element.dataRange,
          dep:element.requestDepartment,
          id:element.requestId,
        };
      });
      //settrees(filteredData)
      //console.log(trees);
      const comeTrees = trees;
      comeTrees.push(...mapping);
      settrees(comeTrees);
      console.log(trees);
      //console.log(mapping);
    } catch (e) {
      alert(e);
    }
  }

  useEffect(() => {
    setPage(1);
    settrees([]);
    fetchtrees();
  }, []);
  //console.log(trees);
  if (trees !== null)
    return (
      <>
        <div className="recbox">
          {trees.map((post) => (
            <Rec2
              key={Math.random()}
              treeKey={post.treeKey}
              title={post.title}
              description={post.description}
              tags={post.tags}
              range={post.range}
              id={post.id}
              dep={post.dep}
            ></Rec2>
          ))}
        </div>
      </>
    );
  else return <div>no data</div>;
};
export default Treeselect;
