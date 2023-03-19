import './Header.css'
import "./FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header className='header'>
            <div className='contents'>
                <div>
                <Link to='./search'><FontAwesomeIcon icon="bars" /></Link>
                </div>
                <div>
                <Link to='./search'><FontAwesomeIcon icon="compass" /></Link>
                </div>
            </div>
        </header>
    )
}

export default Header