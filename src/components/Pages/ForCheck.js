import { Outlet,Navigate, useLocation } from "react-router-dom"
import AuthLogin from "../../context/auto-login"
import { useContext } from "react"
const Forcheck =()=>
{
    const location = useLocation();
    console.log("forcheck입니다.");
    async function authCheck() {
        const response = await fetch('http://localhost:3001/auth');
        try{
            const data = await response.json();
            if(!response.ok){
                throw new Error('로그인 정보가 없습니다.');
            }
            sessionStorage.setItem('tokenkey',data.token);
            if(sessionStorage.getItem('tokenkey') === sessionStorage.getItem('token'))
            {
                localStorage.setItem('isLoggedin','1');
            }
            else{
                localStorage.setItem('isLoggedin','0');
            }
        }
        catch(e){
            alert(e);
            localStorage.setItem('isLoggedin','0');
        }
    }
    authCheck();
    const ctx =useContext(AuthLogin);
    return(
        localStorage.getItem('isLoggedin')=='1' ? <Outlet/> :  <Navigate to="/login" replace state={{ from: location }} />
    ) 
}
export default Forcheck