import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Rec2 from "../../etc/Rec2";

const Search = (props) => {
  const [searchData, setSearchData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageLength, setPageLength] = useState(1);
  const { state } = useLocation();

  const handlePageUp = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    submitSearch(nextPage);
  };
  const handlePageDown = () => {
    const nextPage = page - 1;
    setPage(nextPage);
    submitSearch(nextPage);
  };

  async function submitSearch(page) {
    const response = await fetch(`${state}&page=${page}`, {
      //"/forest"
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    try {
      if (!response.ok) {
        throw new Error("Failed to fetch Search data");
      }
      const data = await response.json();
      if (!data) {
        throw new Error("No Search Data");
      }
      // const length = await data.maxPage;
      const mapping = await data.data.map((element) => {
        return {
          treeKey: element.treeKey,
          title: element.title,
          description: element.description,
          tags: element.tags,
        };
      });
      setSearchData(mapping);
      // setPageLength(length);
    } catch (e) {
      alert(e);
    }
  }
  // async function submitSearchTest() {
  //   const response = await fetch("http://localhost:3001/forest");
  //   if (!response.ok) {
  //     throw new Error("Failed to fetch Search data");
  //   }
  //   const data = await response.json();
  //   if (!data) {
  //     throw new Error("No Search Data");
  //   }
  //   const length = await data.maxPage;
  //   const mapping = await data.data.map((element) => {
  //     return {
  //       treeKey: element.treeKey,
  //       title: element.title,
  //       description: element.description,
  //       tags: [element.tags],
  //     };
  //   });
  //   setSearchData(mapping);
  //   //setPageLength(length);
  // }
  useEffect(() => {
    //console.log(`${state}&page=${page}`);
    submitSearch(1);
  }, []);

  return (
    <div>
      it's search
      <hr />
      {searchData.map((post) => (
        <Rec2
          treeKey={post.treeKey}
          title={post.title}
          description={post.description}
          tags={post.tags}
        ></Rec2>
      ))}
      <div>
        <button disabled={page === 1} onClick={handlePageDown}>
          back
        </button>
        {page}
        <button onClick={handlePageUp}>next</button>
      </div>
    </div>
  );
};
export default Search;
