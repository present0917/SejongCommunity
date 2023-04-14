import { useState, useEffect } from "react";

const Search = (props) => {
  const [searchData, setSearchData] = useState([]);
  async function fetchData() {
    const response = await fetch("http://localhost:3010/db");
    if (!response.ok) {
      throw new Error('Failed to fetch Search data');
    }
    const data = await response.json();
    if (!data) {
      throw new Error('No Search Data');
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

  useEffect(()=>{
    fetchData();
  },[])

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
