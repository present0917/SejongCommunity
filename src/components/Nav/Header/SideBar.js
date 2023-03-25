import ReactModal from "react-modal";
import "../FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
const SideBar = (props) => {
  return (
    <ReactModal
      className="show"
      isOpen={props.listOpen}
      onRequestClose={() => props.setlistOpen(true)}
    >
      <FontAwesomeIcon
        icon="xmark"
        onClick={() => props.setlistOpen(false)}
        className="xbutton"
      />
      <ul>
        <li>menu1</li>
        <li>menu2</li>
        <li>menu3</li>
        <li>menu4</li>
        <li>menu5</li>
      </ul>
    </ReactModal>
  );
};

export default SideBar;
