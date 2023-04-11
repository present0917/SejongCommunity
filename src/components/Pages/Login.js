import { useNavigate } from "react-router-dom"
import { React, useState, useEffect } from "react";
import SignUp from "./SignUp";
import "./Login.css"
const Login=(props)=>
{
    const [signUpOpen,setSignUpOpen] = useState(false);

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [idMessage, setIdMessage] = useState("");
    const [isId, setIsId] = useState(false);

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

    const onChangeId = (e) => {
        const currentId = e.target.value;
        setId(currentId);
        const idRegExp = /^[0-9]{8}$/;
    
        if (!idRegExp.test(currentId)) {
          setIdMessage("학번을 입력해주세요!");
          setIsId(false);
        } else {
          setIdMessage("");
          setIsId(true);
        }
      };

    return(
        <div>
            <div className="login-form">
                <form>
                    <div>
                        <div className="login-form-el">
                            <label htmlFor="ID">ID:</label><br/>
                            <input id="id" name="id" value={id} onChange={onChangeId} /><br/>
                        </div>
                        <div className="login-form-el">
                            <label htmlFor="password">PASSWORD:</label><br/>
                            <input id="password" name="password" />
                        </div>
                    </div>
                    <span> {idMessage} </span><br/>
                    <div className="login-actions">
                        <button className="button" type="submit" onClick={()=>{nav();}}>Login</button>
                        <button className="button" type="button" onClick={()=>{setSignUpOpen(true);}}>Sign Up</button>
                </div>
                </form>
            </div>
            <button onClick={()=>{set();}}>Logged in</button>
            <button onClick={()=>{unset();}}>logout</button>
            <SignUp signUpOpen={signUpOpen} setSignUpOpen = {setSignUpOpen}></SignUp>
        </div>
    )
}
export default Login