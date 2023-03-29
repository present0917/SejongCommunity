import "./FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./Footer.css"
const Footer = () => {
    return (
      <footer>
        <nav className="bottom">
                <div>
                    <Link to='/'><FontAwesomeIcon icon="home" /></Link>
                </div>
                <div>
                    <Link to='alert'><FontAwesomeIcon icon="bell" /></Link>
                </div>
                <div>
                    <Link to='my'><FontAwesomeIcon icon="user" /></Link>
                </div>
            </nav>
      </footer>
    )
  }
  
  export default Footer