import './BottomNavi.css'
import "./FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const BottomNavi = () => {
    return (
        <nav className="wrapper">
            <div>
                <Link to='./main'>button</Link>
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