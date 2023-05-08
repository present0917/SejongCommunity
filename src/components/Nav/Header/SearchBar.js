import "../FontAwesome";
import React, { useState } from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import styles from "./SearchBar.module.css";
import Checkbox from "../../ui/checkbox/Checkbox";
import CheckboxGroup from "../../ui/checkbox/CheckboxGroup";

const SearchBar = (props) => {
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);
  const [select, setSelect] = useState("title");

  const navigate = useNavigate();
  function handleSelect() {
    switch (select) {
      case "title":
        return `title=${search}`;
      case "content":
        return `content=${search}`;
      case "nickname":
        return `nickname=${search}`;
      case "titcont":
        return `title=${search}&content=${search}`;
      default:
        break;
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const search = `/forest?${handleSelect()}&tag=${tags.join("&tag=")}`;
    navigate("/search", { state: search });
    props.setsearchBarOpen(false);
  };

  return (
    <div>
      <form className={styles.search} onSubmit={handleSubmit}>
        <input
          type="text"
          id="search"
          value={search}
          placeholder="검색어를 입력하세요."
          onChange={(e) => setSearch(e.target.value)}
          className={styles.searchInputText}
        />
        <CheckboxGroup values={tags} onChange={setTags}>
          <select value={select} onChange={(e) => setSelect(e.target.value)}>
            <option value="title">제목</option>
            <option value="content">내용</option>
            <option value="nickname">작성자</option>
            <option value="titcont">제목+내용</option>
          </select>
          <Checkbox value="밥약">#밥약</Checkbox>
          <Checkbox value="스터디">#스터디</Checkbox>
          <Checkbox value="공모전">#공모전</Checkbox>
          <Checkbox value="번개">#번개</Checkbox>
        </CheckboxGroup>
      </form>
    </div>
  );
};
export default SearchBar;
