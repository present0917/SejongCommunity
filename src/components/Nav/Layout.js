import Header from "./Header/Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import './Layout.css'
const Layout = () => {
    return (
        <div className="padding">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
export default Layout

