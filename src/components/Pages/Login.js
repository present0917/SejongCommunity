import { useNavigate } from "react-router-dom"
const Login=(props)=>
{
    const navigate = useNavigate();
    const nav=()=>
    {
        if({/*JSON.parse(localStorage.getItem('isLoggedin'))==true*/})
        {
            navigate('..')
            console.log("oka");
        }
    }
    const set=()=>
    {
        props.onlogin('a','b');
    }
    const unset=()=>
    {
        props.onlogout();
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