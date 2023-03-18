import './Test.css'
import "./FontAwesome";
import Footer from "./Footer"
import Header from "./Header"
const Test =  (props) => {
    
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
export default Test