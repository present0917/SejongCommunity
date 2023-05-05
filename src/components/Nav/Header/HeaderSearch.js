import "../FontAwesome";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import "./HeaderSearch.css";

const HeaderSearch = (props) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  async function putQuery(query) {
    const response = await fetch("/forest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
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
    //props.setsearchBarOpen(false);
  };

  return (
    <div>
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          id="search"
          value={search}
          placeholder="검색어를 입력하세요."
          onChange={handleChange}
        />
      </form>
    </div>
  );
};
export default HeaderSearch;
