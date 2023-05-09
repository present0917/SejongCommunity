import "./Header.css";
import "../FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ReactModal from "react-modal";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";

const Header = (props) => {
  const [searchBarOpen, setsearchBarOpen] = useState(false);
  const [listOpen, setlistOpen] = useState(false);

  return (
    <header className="header">
      <ReactModal
        isOpen={searchBarOpen}
        onRequestClose={() => setsearchBarOpen(false)}
        className="searchbar"
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 1)",
          },
        }}
        ariaHideApp={false}
      >
        <SearchBar setsearchBarOpen={setsearchBarOpen} />
      </ReactModal>
      <div className="contents">
        <div>
          <FontAwesomeIcon
            icon="bars"
            onClick={() => setlistOpen(true)}
            className="bar"
            style={{ color: "white" }}
          />
        </div>
        <div>
          {/* <Link to="searchtest">
            <FontAwesomeIcon
              icon="magnifying-glass"
              style={{ color: "white" }}
            />
          </Link> */}
          <FontAwesomeIcon
            icon="magnifying-glass"
            onClick={() => setsearchBarOpen(true)}
          />
        </div>
      </div>

      <SideBar listOpen={listOpen} setlistOpen={setlistOpen} />
    </header>
  );
};

export default Header;
