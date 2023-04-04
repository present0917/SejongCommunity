import "../FontAwesome";
import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./HeaderSearch.css";

const HeaderSearch = (props) => {
  const searchInputRef = useRef();
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  }; //변경사항 처리
  const handleSearch = () => {
    localStorage.setItem("isSearchOn", "1");
    props.setsearchBarOpen(false);
  };

  const handleSubmission = (event) => {
    event.preventDefault();

    console.log(search);
    const enteredValue = searchInputRef.current.value;
    console.log(enteredValue);
  };

  return (
    <header className="header">
      <form onSubmit={handleSubmission} className="search">
        <input
          ref={searchInputRef}
          type="text"
          id="search"
          value={search}
          placeholder="검색어를 입력하세요."
          onChange={handleChange}
          className="search-text"
        />

        <Link to="search">
          <button
            type="submit"
            className="search-button"
            onClick={handleSearch}
          >
            <FontAwesomeIcon icon="magnifying-glass" id="search-button" />
          </button>
        </Link>
      </form>
    </header>
  );
};
export default HeaderSearch;
