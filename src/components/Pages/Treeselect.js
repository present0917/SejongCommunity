import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Rec2 from "../../etc/Rec2";
import "./Treeselect.css";
import { element } from "prop-types";

const Treeselect = () => {
  const [trees, settrees] = useState([]);
  const [comeTrees, setComeTrees] = useState([]);
  const [page, setPage] = useState(1);
  const [disabled, setDisabled] = useState(false);

  async function fetchtrees(URL) {
    const response = await fetch(URL);
    try {
      if (!response.ok) {
        throw new Error("Failed to fetch trees");
      }
      const data = await response.json();

      if (!data) {
        throw new Error("No Search Data");
      }
<<<<<<< HEAD
      console.log(data);
      const mapping = data.data.map((element) => {
=======
      const mapping = await data.data.map((element) => {
>>>>>>> origin/searchMapping
        return {
          treeKey: element.treeKey,
          title: element.title,
          dataRange: element.dataRange,
          description: element.description,
          tags: element.tags,
          range:element.dataRange,
          dep:element.requestDepartment,
          id:element.requestId,
        };
      });

      if (mapping[0]) {
        setComeTrees(trees);
        comeTrees.push(...mapping);
        settrees(comeTrees);
        console.log(trees);
      } else {
        console.log("예아");
        setDisabled(true);
      }
    } catch (e) {
      alert(e);
    }
  }
  const nextLoad = () => {
    const nextPage = page + 1;
    setPage(nextPage);
  };

  useEffect(() => {
    if (page === 1) {
      setDisabled(false);
    }
    var URL = "/forest";
    if (page !== 1) {
      URL = `/forest?page=${page}`;
    } else {
      URL = "/forest";
    }
    console.log(URL);
    fetchtrees(URL);
  }, [page]);
  if (page === 1 && disabled === true)
    return <>아직 게시글이 없어요. 첫번째 게시글의 주인공이 되어보세요!</>;
  else
    return (
      <>
        <div className="recbox">
          {trees.map((post) => (
            <Rec2
              key={Math.random()}
              treeKey={post.treeKey}
              dataRange={post.dataRange}
              title={post.title}
              description={post.description}
              tags={post.tags}
              range={post.range}
              id={post.id}
              dep={post.dep}
            ></Rec2>
          ))}
          <button onClick={nextLoad} disabled={disabled}>
            다음
          </button>
        </div>
      </>
    );
};
export default Treeselect;
