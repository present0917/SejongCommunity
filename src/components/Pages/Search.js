import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import Rec2 from "../../etc/Rec2";

const Search = (props) => {
  const [searchData, setSearchData] = useState([]);
  const [page, setPage] = useState(1);
  const [nextButton, setNextButton] = useState(false);
  const [backButton, setBackButton] = useState(true);
  const { state } = useLocation();

  const handlePageUp = () => {
    const nextPage = page + 1;
    setPage(nextPage);
  };
  const handlePageDown = () => {
    const nextPage = page - 1;
    setPage(nextPage);
  };

  async function submitSearch(page) {
    console.log(`${state}&page=${page}`);
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
      console.log(data);
      const mapping = await data.data.map((element) => {
        return {
          treeKey: element.treeKey,
          title: element.title,
          dataRange: element.dataRange,
          description: element.description,
          tags: element.tags,
          nick:element.dataRange.nickname
        };
      });
      console.log(mapping);
      if (mapping.length === 0) {
        setNextButton(true);
      } else {
        setSearchData(mapping);
        setNextButton(false);
      }
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
    submitSearch(page);
    if (page !== 1) {
      setBackButton(false);
    } else {
      setBackButton(true);
    }
  }, [page]);
  useEffect(() => {
    setPage(1);
  }, [state]);

  return (
    <div>
     
      <hr />
      {searchData.map((post) => (
        <Rec2
          key={Math.random()}
          treeKey={post.treeKey}
          dataRange={post.dataRange}
          title={post.title}
          description={post.description}
          tags={post.tags}
          nick={post.nick}
        ></Rec2>
      ))}
      <div>
        <button disabled={backButton} onClick={handlePageDown}>
          back
        </button>
        {page}
        <button disabled={nextButton} onClick={handlePageUp}>
          next
        </button>
      </div>
    </div>
  );
};
export default Search;
