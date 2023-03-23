import "./FontAwesome";
import React,{useState,useEffect} from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './HeaderSearch.css';



const HeaderSearch = (props) => {
    const [search,setSearch] = useState("");


    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    } //변경사항 처리
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSearch(search);
    } //submit 시 검색어를 props.onSearch 전달
    return (
        <div className='header'>
                <form onSubmit={handleSubmit} className = "search">
                    <input type="text" id="search" value={search} placeholder="검색어를 입력하세요." onChange={handleChange} className="search-text"/>
                    <button type='submit' className='search-button'><FontAwesomeIcon icon="magnifying-glass"/></button>
                </form>
                <div></div>
        </div>
    )
}
export default HeaderSearch;