import "./Header.css";
import "../FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ReactModal from "react-modal";
import HeaderSearch from "./HeaderSearch";
import SideBar from "./SideBar";
const Header = (props) => {
  const [searchBarOpen, setsearchBarOpen] = useState(false);
  const [listOpen, setlistOpen] = useState(false);

  return (
    <header className="header">
      <div className="contents">
        <ReactModal
          isOpen={searchBarOpen}
          onRequestClose={() => setsearchBarOpen(false)}
          className="searchbar"
        >
          <HeaderSearch setsearchBarOpen={setsearchBarOpen}/>
        </ReactModal>
        <div>
          <FontAwesomeIcon
            icon="bars"
            onClick={() => setlistOpen(true)}
            className="bar"
          />
        </div>
        <div>
          <FontAwesomeIcon
            icon="magnifying-glass"
            onClick={() => setsearchBarOpen(true)}
          />
        </div>
      </div>
      <SideBar listOpen={listOpen} setlistOpen={setlistOpen}/>
    </header>
  );
};

export default Header;
