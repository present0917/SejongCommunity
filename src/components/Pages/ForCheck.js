import { Outlet,Navigate, useLocation } from "react-router-dom"
import AuthLogin from "../../context/auto-login"
import { useContext } from "react"
const Forcheck =()=>
{
    const location = useLocation();
    const ctx =useContext(AuthLogin);
    return(
        localStorage.getItem('isLoggedin')=='1' ? <Outlet/> :  <Navigate to="/login" replace state={{ from: location }} />
    ) 
}
export default Forcheck