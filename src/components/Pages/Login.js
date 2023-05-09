import { useNavigate } from "react-router-dom";
import { React, useState, useEffect } from "react";
import SignUp from "./SignUp";
import "./Login.css";
import logo from "../../pic/logo.png";
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
        /*JSON.parse(localStorage.getItem('isLoggedin'))==true*/
      }
    ) {
      navigate("..");
      console.log(idMessage);
      console.log("oka");
    }
  };

  const handleSubmit = (event) => {
    setDisabled(true);
    event.preventDefault();
    if (!isId || !isPass) {
      alert("아이디, 비밀번호를 확인해주세요.");
    } else {
      const authData = {
        studentId: { id },
        password: { password },
      };
      loginSubmit(authData); //실제
      //loginSubmitTest(authData); //test
      //nav();
    }
    setDisabled(false);
  };

  // const datatestprint = () => {
  //   const authData = {
  //     studentId: { id },
  //     password: { password },
  //   };
  //   logintest(authData);
  // };

  async function logintest(info) {
    const response = await fetch("http://localhost:3001/post/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });
    if (response.status === 401) {
      console.log("error 401");
    }
    console.log("확인용");
    const data = await response.json();
    console.log(data);

    if (!data.ok) {
      console.log("error");
    }

    const token = data.token;
    localStorage.setItem("token", token);
  }

  //테스트용
  async function loginSubmitTest(info) {
    const response = await fetch("http://localhost:3001/login", {
      method: "PUT", //테스트용 연동 때 POST로 바꾸면 됨
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        studentId: id,
        password: password,
      }),
    });
    const check = await response.json();
    console.log("로그확인");
    console.log(check);
    //const data = await response.json();
    const testres = await fetch("http://localhost:3001/res"); //테스트용
    const data = await testres.json(); //테스트용
    try {
      if (!testres.ok) {
        //서버 연결시 response로 교체
        throw new Error(`${testres.status} 에러가 발생했습니다.`); //서버 연결시 response로 교체
      } else if (data.message !== "") {
        throw new Error(`Error Code:${data.errorCode} ${data.message}`);
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
  //실제

  // async function postcard(card) { //입력
  //   const response = await fetch(`http://localhost:3002/${params.id}`, {
  //     method: 'POST',
  //     body: JSON.stringify(card),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   });

  async function loginSubmit() {
    const response = await fetch("http://localhost:3001/login", {
      method: "POST",
     
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        studentId: Number(id),
        password: password,
      })
     
    });

    try {
      if (!response.ok) {
        throw new Error(`${response.status} 에러가 발생했습니다.`);
      }
      const data = await response.json();
      // errorCode !== 0 에러
      if (data.errorCode !== 0) {
        throw new Error(`Error Code:${data.errorCode} ${data.message}`);
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
  

  // const set = () => {
  //   props.onlogin("a", "b");
  // };
  // const unset = () => {
  //   props.onlogout();
  // };

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
    const passRegExp = /^[a-zA-Zㄱ-힣0-9~!@#$%^&*()_+|<>?:{}]{8,30}$/;
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
    <div className="entire">
      <img src={logo} className="logo" />
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <div>
            <div className="login-form-el">
              <label htmlFor="ID">ID:</label>
              <br />
              <input id="id" name="id" value={id} onChange={onChangeId} />
              <i className={isId ? "alert-ok" : "alert"}> {idMessage} </i>
            </div>
            <div className="login-form-el">
              <label htmlFor="password">PASSWORD:</label>
              <br />
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={onChangePass}
              />
              <i className={isPass ? "alert-ok" : "alert"}>
                {" "}
                {passwordMessage}{" "}
              </i>
            </div>
          </div>

          <div className="login-actions">
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
      {/* <button
        onClick={() => {
          set();
        }}
      >
        Logged in
      </button>
      <button
        onClick={() => {
          unset();
        }}
      >
        logout
      </button>

      <button
        onClick={() => {
          datatestprint();
        }}
      >
        DataTestButton
      </button> */}
      <SignUp signUpOpen={signUpOpen} setSignUpOpen={setSignUpOpen}></SignUp>
    </div>
  );
}

export default Login;
