import { useState, useEffect } from "react";
import { useLocation } from "react-router";

const Search = (props) => {
  const [searchData, setSearchData] = useState([]);
  const { state } = useLocation();
  async function submitSearch(q) {
    const searchText = q.target.value;
    const response = await fetch("http://localhost:3001/search", {
      //"/forest"
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        search: { searchText },
      }),
    });
    try {
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
    } catch (e) {
      alert(e);
    }
  }
  async function fetchData() {
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

  useEffect(() => {
    //fetchData();
    console.log(state);
  }, [state]);

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
