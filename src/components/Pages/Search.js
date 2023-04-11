import { useState, useEffect } from "react";
import searchTest from "./searchTest.json";
const Search = (props) => {
  const [searchData, setSearchData] = useState([]);
  // async function fetchData() {
  //   const response = await fetch("url");
  //   const data = await response.json();
  // const mapping = await data.results.map((element) => {
  //   return {
  //       id: element.id,
  //       title: element.title,
  //       mainText: element.maintext,
  //       tags: [element.tags],
  //   };
  // });
  //   setSearchData(mapping);
  // }
  return (
    <div>
      it's search
      <hr />
      {searchTest.posts.map((post) => (
        <section key={post.id}>
          <h3 key={post.title}>{post.title}</h3>
          <p key={post.maintext}>{post.maintext}</p>
          <p>
            {post.tags.map((tag) => (
              <i key={tag}>#{tag} </i>
            ))}
          </p>
          <hr />
        </section>
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
