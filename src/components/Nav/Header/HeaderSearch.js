import "../FontAwesome";
import React, { useState, useRef,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import "./HeaderSearch.css";

const HeaderSearch = (props) => {
  const searchInputRef = useRef();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  async function putQuery(query) {
    const response = await fetch('http://localhost:3011/q', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        isDone: true,
        q:query,
    }),
    }).then(res =>{
      if(res.ok){
        console.log(query);
      }
    });
    navigate('/search');
    props.setsearchBarOpen(false);
  }

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmission = (event) => {
    event.preventDefault();

    console.log(search);
    const enteredValue = searchInputRef.current.value;
    console.log(enteredValue);
  };

  return (
    <header className="header">
      <form action="/forest" onSubmit={handleSubmission} className="search">
        <input
          ref={searchInputRef}
          type="text"
          id="q"
          value={search}
          placeholder="검색어를 입력하세요."
          onChange={handleChange}
          className="search-text"
        />

        <button
          type="submit"
          className="search-button"
          onClick={()=>putQuery(search)}
        >
          <FontAwesomeIcon icon="magnifying-glass" id="search-button" />
        </button>
      </form>
    </header>
  );
};
export default HeaderSearch;
