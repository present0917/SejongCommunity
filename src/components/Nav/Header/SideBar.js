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
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.3)'
        }
      }}
      ariaHideApp={false}
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