import "../FontAwesome";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import "./HeaderSearch.css";

const HeaderSearch = (props) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  async function putQuery(query) {
    const response = await fetch("http://localhost:3001/search", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isDone: true,
        search: query,
      }),
    });
    try {
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      navigate("/search");
      props.setsearchBarOpen(false);
    } catch (e) {}
  }

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchData = {
      search: search,
    };
    navigate("/search", { state: searchData });
    props.setsearchBarOpen(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="container">
        <input
          type="text"
          id="search"
          value={search}
          placeholder="검색어를 입력하세요."
          onChange={handleChange}
          className="search-textbox"
        />
        <button type="submit" className="search-button">
          <FontAwesomeIcon icon="magnifying-glass" id="search-button" />
        </button>
      </form>
    </div>
  );
};
export default HeaderSearch;
