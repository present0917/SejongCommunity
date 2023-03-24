import './Test.css'
import "./FontAwesome";
import Footer from "./Footer"
import HeaderRouter from './Header/HeaderRouter';

const Test =  (props) => {
    
    return (
        <div className='padding'>
            <HeaderRouter/>
            <main>
                {props.children}
            </main>
            <Footer/>
        </div>
    )
}
export default Test