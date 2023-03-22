import './Header.css'
import "./FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState } from 'react';
const Header = () => {
    const [buttonClick,setbuttonClick]=useState(false);
    const test=()=>
    {
        setbuttonClick(!buttonClick);
    }
    return (
        <header className='header'>
            <div className='contents'>
                <div>
                <FontAwesomeIcon icon={buttonClick ? "xmark" : "bars"} onClick={test} className='bar' />
                </div>
                <div>
                <Link to='./search'><FontAwesomeIcon icon="compass" /></Link>
                </div>
            </div>
            <menu className={buttonClick ? "show" : "hide"}> 
                <div>hello</div>
                <div>it's test</div>
            </menu>
        </header>
    )
}

export default Header