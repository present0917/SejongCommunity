import "../FontAwesome";
import React, { useEffect, useState , } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SearchBar.module.css";
import tagData from "../../../dataJson/tagdata.json";
import ToggleButton from "../../ui/toggle/toggleButton";
import ToggleButtonGroup from "../../ui/toggle/toggleButtonGroup";

const SearchBar = (props) => {
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([""]);
  const [select, setSelect] = useState("title");
  const navigate = useNavigate();

  function handleSelect() {
    const str = search.replace(/ /g, "");
    switch (select) {
      case "title":
        return `title=${str}`;
      case "description":
        return `description=${str}`;
      case "nickname":
        return `nickname=${str}`;
      case "titdesc":
        return `titdesc=${str}`;
      default:
        break;
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (tags[0] === "") {
      const search = `/forest?${handleSelect()}`;
      navigate("/search", { state: search });
    } else {
      const search = `/forest?${handleSelect()}&tag=${tags.join("&tag=")}`;
      navigate("/search", { state: search });
    }

    props.setsearchBarOpen(false);
  };

  return (
    <>
      <form className={styles.search} onSubmit={handleSubmit}>
        <div className={styles.searchBox}>
          <select
            value={select}
            className={styles.searchBoxSelect}
            onChange={(e) => setSelect(e.target.value)}
          >
            <option value="title">제목</option>
            <option value="description">내용</option>
            <option value="nickname">작성자</option>
            <option value="titdesc">제목+내용</option>
          </select>
          <input
            type="text"
            id="search"
            value={search}
            placeholder="검색어를 입력하세요."
            onChange={(e) => setSearch(e.target.value)}
            className={styles.searchBoxText}
          />
        </div>
        <ToggleButtonGroup values={tags} onChange={setTags} mode="single">
          {tagData.tags.map((tag) => (
            <ToggleButton key={Math.random()} value={tag.value}>#{tag.text}</ToggleButton>
          ))}
        </ToggleButtonGroup>
      </form>
    </>
  );
};
export default SearchBar;
