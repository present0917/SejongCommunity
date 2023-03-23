import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
const Login=()=>
{
    const navigate = useNavigate();
    const nav=()=>
    {
        if(JSON.parse(localStorage.getItem('login'))==true)
        {
            navigate("..");
        }
    }
    const set=()=>
    {
        localStorage.setItem("login",true);
        console.log(localStorage.getItem('login'));
    }
    const unset=()=>
    {
        localStorage.setItem("login",false);
        console.log(localStorage.getItem('login'));
    }
    return(
        <div>
            <button onClick={()=>{nav();}}>Login</button>
            <br/>
            <button onClick={()=>{set();}}>Logged in</button>
            <button onClick={()=>{unset();}}>logout</button>
        </div>
    )
}
export default Login