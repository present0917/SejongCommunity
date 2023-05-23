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
    //submitSearch();
  };
  const handlePageDown = () => {
    const nextPage = page - 1;
    setPage(nextPage);
    //submitSearch()
  };

  async function submitSearch() {
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
          memberKey: element.memberKey,
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
  async function submitSearchTest() {
    const response = await fetch("http://localhost:3001/forest");
    if (!response.ok) {
      throw new Error("Failed to fetch Search data");
    }
    const data = await response.json();
    if (!data) {
      throw new Error("No Search Data");
    }
    const length = await data.maxPage;
    const mapping = await data.data.map((element) => {
      return {
        treeKey: element.treeKey,
        memberKey: element.memberKey,
        title: element.title,
        description: element.description,
        tags: [element.tags],
      };
    });
    setSearchData(mapping);
    //setPageLength(length);
  }
  useEffect(() => {
    console.log(`${state}&page=${page}`);
    submitSearch();
  }, []);

  return (
    <div>
      it's search
      <hr />
      {searchData.map((post) => (
        // <Link to={`/tree/${post.treeKey}`}>
        //   <h3>{post.title}</h3>
        //   <p>{post.memberKey}</p>
        //   <p>{post.description}</p>
        //   {post.tags.map((tag) => (
        //     <i key={tag}>#{tag}</i>
        //   ))}
        // </Link>
        <Rec2
          treeKey={post.treeKey}
          title={post.title}
          memberKey={post.memberKey}
          description={post.description}
          tags={post.tags}
        ></Rec2>
      ))}
      {/*나중에 Link로 감싸서 해당 게시판 호출*/}
      {/* <footer>
        <Pagination
          total={pageLength}
          limit={limit}
          page={page}s
          setPage={setPage}
        />
      </footer> */}
      <div>
        <button disabled={page === 1} onClick={handlePageDown}>
          back
        </button>
        {page}
        <button disabled={page === pageLength} onClick={handlePageUp}>
          next
        </button>
      </div>
      <button type="button" onClick={submitSearchTest}>
        test
      </button>
    </div>
  );
};
export default Search;
