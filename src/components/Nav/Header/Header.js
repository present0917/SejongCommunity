import "./Header.css";
import "../FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ReactModal from "react-modal";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const [searchBarOpen, setsearchBarOpen] = useState(false);
  const [listOpen, setlistOpen] = useState(false);
  const navigate = useNavigate()

  const handleOpenSearchBar= () => {
    navigate("/waypoint",{state:true});
    setsearchBarOpen(true);
  }
  const handleCloseSearchBar = () => {
    navigate("/tree");
    setsearchBarOpen(false);
  }
  return (
    <header className="header">
      <ReactModal
        isOpen={searchBarOpen}
        onRequestClose={() => handleCloseSearchBar()}
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

        <div className="topicon">
          <FontAwesomeIcon
            icon="bars"
            onClick={() => setlistOpen(true)}
            className="bar"
            style={{ color: "white" }}
          />
          </div>


          <div className="topicon">
          <FontAwesomeIcon
            icon="magnifying-glass"
            onClick={() => handleOpenSearchBar()}
            style={{ color: "white" }}
          />
          </div>


        </div>


      <SideBar listOpen={listOpen} setlistOpen={setlistOpen} />
    </header>
  );
};

export default Header;
