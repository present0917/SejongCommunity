import './BottomNavi.css'
import "./FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const BottomNavi = () => {
    return (
        <div>
            <nav className="bottom">
                <div>
                    <Link to='./'><FontAwesomeIcon icon="home" /></Link>
                </div>
                <div>
                    <Link to='./search'><FontAwesomeIcon icon="compass" /></Link>
                </div>
                <div>
                    <Link to='./my'><FontAwesomeIcon icon="user" /></Link>
                </div>
            </nav>

        </div>
    )
}
export default BottomNavi