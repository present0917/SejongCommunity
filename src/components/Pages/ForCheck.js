import { Outlet,useNavigate,Navigate, Link,useLocation } from "react-router-dom"
import AuthLogin from "../../context/auto-login"
import Login from "./Login"
import { useContext } from "react"
const Forcheck =()=>
{
    const location = useLocation();
    const navigate=useNavigate();
    const ctx =useContext(AuthLogin);
    const asd=navigate('/asd');
    return(
        localStorage.getItem('isLoggedin')=='1' ? <Outlet/> :  <Navigate to="/login" replace state={{ from: location }} />
    ) 
}
export default Forcheck