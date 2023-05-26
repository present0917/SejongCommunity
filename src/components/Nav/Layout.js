import Header from "./Header/Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import './Layout.css'
import { useOutletContext } from "react-router-dom";
const Layout = (props) => {
const {sum}=useOutletContext();
        return(
        <div className="padding">

            <Header />
            <Outlet context={{sum}}/>
            <Footer sum={sum}/>
        </div>
    )
}
export default Layout

