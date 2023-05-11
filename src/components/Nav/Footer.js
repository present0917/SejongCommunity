import "./FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./Footer.css"
const Footer = () => {
    return (
      <footer>
        <nav className="bottom">
                <div className="bottomicon">
                    <Link to='/'><FontAwesomeIcon icon="home" style={{color: 'white'}} /></Link>
                </div>
                <div className="bottomicon">
                    <Link to='alert'><FontAwesomeIcon icon="bell" style={{color: 'white'}} /></Link>
                </div>
                <div className="bottomicon">
                    <Link to='tree'><FontAwesomeIcon icon="user" style={{color: 'white'}} /></Link>
                </div>
            </nav>
      </footer>
    )
  }
  
  export default Footer