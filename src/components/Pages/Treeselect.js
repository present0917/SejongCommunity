import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Rec2 from "../../etc/Rec2";
import "./Treeselect.css";

const Treeselect = () => {
  const [trees, settrees] = useState([]);
  async function fetchtrees() {
    const response = await fetch("/forest");
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
          memberKey: element.memberKey,
          title: element.title,
          description: element.description,
          tags: element.tags,
        };
      });
      //settrees(filteredData)
      settrees(mapping);
      console.log(mapping);

    } catch (e) {
      alert(e);
    }
  }

  useEffect(() => {
    fetchtrees();
  }, []);
  console.log(trees);
  if (trees !== null)
    return (
      <>
        <div className="recbox">
          {trees.map((post) => (
            <Rec2 key={Math.random()}
              treeKey={post.treeKey}
              title={post.title}
              memberKey={post.memberKey}
              description={post.description}
              tags={post.tags}
            ></Rec2>
          ))}
        </div>
      </>
    );
  else return <div>no data</div>;
};
export default Treeselect;
