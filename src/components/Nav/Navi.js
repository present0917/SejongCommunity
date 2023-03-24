import './Navi.css'
import "./FontAwesome";
import Footer from "./Footer"
import Header from './Header/HeaderDefault';

const Navi =  (props) => {
    
    return (
        <div className='padding'>
            <Header/>
            <main>
                {props.children}
            </main>
            <Footer/>
        </div>
    )
}
export default Navi