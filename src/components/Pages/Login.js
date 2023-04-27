import { useNavigate } from "react-router-dom"
import { React, useState, useEffect } from "react";
import SignUp from "./SignUp";
import "./Login.css"
const Login = (props) => {
    const [signUpOpen, setSignUpOpen] = useState(false);

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [idMessage, setIdMessage] = useState("test");
    const [isId, setIsId] = useState(false);

    const navigate = useNavigate();
    const nav = () => {
        if ({/*JSON.parse(localStorage.getItem('isLoggedin'))==true*/ }) {
            navigate('..')
            console.log(idMessage);
            console.log("oka");
        }
    }

//로그인유효성검사
    const datatestprint = () => {  
        const authData = {
            id: { id },
            password: { password },
        };
        logintest(authData);
    }

    async function logintest(info) {
        const response = await fetch('http://localhost:3001/post/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info),
        });
        if(response.status === 401){
            console.log('error 401');
        }
        console.log('확인용');
        const data = await response.json();
        console.log(data)

        if (!data.ok) {
            console.log("error");
        }
          
        const token = data.token;
        localStorage.setItem('token', token);
    }


    const set = () => {
        props.onlogin('a', 'b');
    }
    const unset = () => {
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
    const onChangePass = (e) => {
        const currentpass = e.target.value;
        setPassword(currentpass);
    };

    return (
        <div>
            <div className="login-form">
                <form action="">
                    <div>
                        <div className="login-form-el">
                            <label htmlFor="ID">ID:</label><br />
                            <input id="id" name="id" value={id} onChange={onChangeId} /><br />
                        </div>
                        <div className="login-form-el">
                            <label htmlFor="password">PASSWORD:</label><br />
                            <input id="password" name="password" value={password} onChange={onChangePass} /> <br />
                        </div>
                    </div>
                    <span> {idMessage} </span><br />
                    <div className="login-actions">
                        <button className="button" type="submit" onClick={() => { nav(); }}>Login</button>
                        <button className="button" type="button" onClick={() => { setSignUpOpen(true); }}>Sign Up</button>
                    </div>
                </form>
            </div>
            <button onClick={() => { set(); }}>Logged in</button>
            <button onClick={() => { unset(); }}>logout</button>
            
            <button onClick={() => { datatestprint(); }}>DataTestButton</button> 
            {/* 로그인유효성검사 */}
            <SignUp signUpOpen={signUpOpen} setSignUpOpen={setSignUpOpen}></SignUp>
        </div>
    )
}
export default Login