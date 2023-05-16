import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Rec2 from "../../etc/Rec2";
import "./Treeselect.css";

const Treeselect = () => {
  const [trees, settrees] = useState([]);

  // async function fetchtrees() { //불러오기 테스트
  //     const response = await fetch('http://localhost:3002/db');
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch trees');
  //     }
  //     const data = await response.json();
  //     const filteredData = Object.fromEntries(
  //         Object.entries(data).filter(([key, value]) => /^tree\d+$/.test(key))
  //       );
  //       const filteredKeys = Object.keys(filteredData);
  //     console.log(filteredKeys);
  //     settrees(filteredKeys)
  //   };

  async function fetchtrees() {
    //불러오기 테스트
    const response = await fetch("/forest");
    try {
      if (!response.ok) {
        throw new Error("Failed to fetch trees");
      }
      const data = await response.json();
      if (!data) {
        throw new Error("No Search Data");
      }
      const mapping = data.data.map((element) => {
        return {
          treeKey: element.treeKey,
          memberKey: element.memberKey,
          title: element.title,
          description: element.description,
          tags: [element.tags],
        };
      });
      //settrees(filteredData)
      settrees(mapping);
    } catch (e) {
      alert(e);
    }
  }

  useEffect(() => {
    fetchtrees();
  }, []);

  if (trees !== null)
    return (
      <>
        <div className="recbox">
          {trees.map((post) => (
            <Rec2
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
