import { useState, useEffect } from "react";
import { useLocation } from "react-router";

const Search = (props) => {
  const [searchData, setSearchData] = useState([]);
  const [page, setPage] = useState(1);
  const { state } = useLocation();
  //console.log(state);
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
        throw new Error(`${response.status}`);
      }
    } catch (e) {
      alert(e);
    }
  }
  async function searchTest() {
    const response = await fetch("http://localhost:3012/db");
    if (!response.ok) {
      throw new Error("Failed to fetch Search data");
    }
    const data = await response.json();
    if (!data) {
      throw new Error("No Search Data");
    }
    const mapping = await data.posts.map((element) => {
      return {
        id: element.id,
        title: element.title,
        maintext: element.maintext,
        tags: [element.tags],
      };
    });
    setSearchData(mapping);
  }

  return (
    <div>
      it's search
      <hr />
      {searchData.map((post) => (
        <div key={post.id}>
          <h3 key={post.title}>{post.title}</h3>
          <p key={post.maintext}>{post.maintext}</p>
          <p>
            {post.tags.map((tag) => (
              <i key={tag}>#{tag} </i>
            ))}
          </p>
          <hr />
        </div>
      ))}
      {/*나중에 Link로 감싸서 해당 게시판 호출*/}
      <div>
        <button>next</button>
        <button>back</button>
      </div>
    </div>
  );
};
export default Search;
