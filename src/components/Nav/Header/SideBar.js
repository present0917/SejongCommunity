import ReactModal from "react-modal";
import "../FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SideBar.css"
const SideBar = (props) => {
  return (
     <ReactModal 
      isOpen={props.listOpen}
      onRequestClose={() => props.setlistOpen(false)}
      className = "show"
    >
      <FontAwesomeIcon
        icon="xmark"
        onClick={() => props.setlistOpen(false)}
        className="xbutton"
      />
      <br/>
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