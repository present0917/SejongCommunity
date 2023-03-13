import './BottomNavi.css'
import "./FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const BottomNavi=()=>
{
    return (
        <nav className="wrapper">
        <div>
        
      </div>
      <div>
      <FontAwesomeIcon icon="home" /> 
        <FontAwesomeIcon icon="compass" />
      </div>


      <div>
        <FontAwesomeIcon icon="user" />
      </div>
      </nav> 
    )
}
export default BottomNavi