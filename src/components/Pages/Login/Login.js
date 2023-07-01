import { useNavigate } from "react-router-dom";
import { React, useState } from "react";
import SignUp from "./SignUp";
import "./Login.css";
import logo from "../../../pic/logo3.png";
import LoginFooter from "../../Nav/LoginFooter";
import Doyouknow from "../../../etc/Doyouknow";

const Login = (props) => {
  const [signUpOpen, setSignUpOpen] = useState(false);

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [idMessage, setIdMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [isId, setIsId] = useState(false);
  const [isPass, setIsPass] = useState(false);

  const [disabled, setDisabled] = useState(false);

  const navigate = useNavigate();
  const nav = () => {
    if (
      {
      }
    ) {
      navigate("..");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisabled(true);

    if (!isId || !isPass) {
      alert("아이디, 비밀번호를 확인해주세요.");
    } else {
      const authData = {
        studentId: { id },
        password: { password },
      };
      loginSubmit(authData); 
    }
    setDisabled(false);
  };

  //실제
  async function loginSubmit(info) {
    const response = await fetch("http://ec2-3-24-166-96.ap-southeast-2.compute.amazonaws.com:8080/login", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        studentId: Number(id),
        password: password,
      }),
    });
    try {
      if (!response.ok) {
        throw new Error(`${response.status} 에러가 발생했습니다.`);
      }
      const data = await response.json();
      // errorCode !== 0 에러
      if (data.errorCode !== 0) {
        throw new Error(`${data.message}`);
      }
      sessionStorage.setItem("token", data.sessionId);
      localStorage.setItem("isLoggedin", "1");
      navigate("..");
    } catch (e) {
      alert(e);
      setId("");
      setPassword("");
    }
  }

  const onChangeId = (e) => {
    const currentId = e.target.value;
    setId(currentId);
    const idRegExp = /^[0-9]{8}$/;

    if (!idRegExp.test(currentId)) {
      setIdMessage("학번을 입력해주세요");
      setIsId(false);
      setDisabled(true);
    } else {
      setIdMessage("ok!");
      setIsId(true);
      setDisabled(false);
    }
  };
  const onChangePass = (e) => {
    const currentPass = e.target.value;
    setPassword(currentPass);
    const passRegExp = /^[a-zA-Zㄱ-힣0-9~!@#$%^&*()-_+|<>?:-{}]{8,30}$/;
    if (!passRegExp.test(currentPass)) {
      setPasswordMessage("비밀번호를 확인해주세요");
      setIsPass(false);
      setDisabled(true);
    } else {
      setPasswordMessage("ok!");
      setIsPass(true);
      setDisabled(false);
    }
  };

  return (
    <div>
      6/30
      <div className="entire">
        <img src={logo} className="logo" />
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <div>
              <div className="login-form-el">
                <label htmlFor="ID"></label>
                <br />
                <input
                  id="id"
                  name="id"
                  value={id}
                  onChange={onChangeId}
                  placeholder="ID"
                />
                <br></br>

                <i className={isId ? "alert-ok" : "alert"}> {idMessage} </i>
                <br></br>
              </div>
              <div className="login-form-el">
                <label htmlFor="password"></label>
                <br />
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="PASSWORD"
                  value={password}
                  onChange={onChangePass}
                />
                <br></br>
                <i className={isPass ? "alert-ok" : "alert"}>
                  {" "}
                  {passwordMessage}{" "}
                </i>
              </div>

              <br></br>
            </div>

            <div className="login-actions">
              <br></br>
              <button className="button" type="submit" disabled={disabled}>
                Login
              </button>
              <button
                className="button"
                type="button"
                onClick={() => {
                  setSignUpOpen(true);
                }}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <div className="doyou">
          <Doyouknow></Doyouknow>
        </div>
        <SignUp signUpOpen={signUpOpen} setSignUpOpen={setSignUpOpen}></SignUp>
      </div>

      <LoginFooter></LoginFooter>
    </div>
  );
};

export default Login;
