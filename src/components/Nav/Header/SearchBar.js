import "../FontAwesome";
import React, { useState } from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import styles from "./SearchBar.module.css";
import ToggleButton from "../../ui/toggle/toggleButton";
import ToggleButtonGroup from "../../ui/toggle/toggleButtonGroup";

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
    <>
      <form className={styles.search} onSubmit={handleSubmit}>
        <div className={styles.searchBox}>
          <select
            value={select}
            className={styles.searchBoxSelect}
            onChange={(e) => setSelect(e.target.value)}
          >
            <option value="title">제목</option>
            <option value="content">내용</option>
            <option value="nickname">작성자</option>
            <option value="titcont">제목+내용</option>
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
        <ToggleButtonGroup
          values={tags}
          onChange={setTags}
          style={styles.searchToggleBox}
        >
          <ToggleButton
            style={
              tags.find((v) => v === "밥약") ? styles.default : styles.checked
            }
            value="밥약"
          >
            #밥약
          </ToggleButton>
          <ToggleButton
            style={
              tags.find((v) => v === "스터디") ? styles.default : styles.checked
            }
            value="스터디"
          >
            #스터디
          </ToggleButton>
          <ToggleButton
            style={
              tags.find((v) => v === "공모전") ? styles.default : styles.checked
            }
            value="공모전"
          >
            #공모전
          </ToggleButton>
          <ToggleButton
            style={
              tags.find((v) => v === "번개") ? styles.default : styles.checked
            }
            value="번개"
          >
            #번개
          </ToggleButton>
        </ToggleButtonGroup>
      </form>
    </>
  );
};
export default SearchBar;
