import { React, useState, useEffect } from "react";
import ReactModal from "react-modal";
import CheckboxGroup from "../../ui/checkbox/CheckboxGroup";
import Checkbox from "../../ui/checkbox/Checkbox";
import "./SignUp.css";
import "../../Modal/ModalAnimation.css";
const SignUp = (props) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [allowId, setAllowId] = useState(false);
  const [allowDepartment, setAllowDepartment] = useState(false);

  const [idMessage, setIdMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [nameMessage, setNameMessage] = useState("");

  const [isId, setIsId] = useState(false);
  const [isPass, setIsPass] = useState(false);
  const [isName, setIsName] = useState(false);

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    initInput();
  }, []);

  const onChangeId = (e) => {
    const currentId = e.target.value;
    setId(currentId);
    const idRegExp = /^[0-9]{8}$/;

    if (!idRegExp.test(currentId)) {
      setIdMessage("학번을 입력해주세요!");
      setIsId(false);
      setDisabled(true);
    } else {
      setIdMessage("ok!");
      setIsId(true);
      setDisabled(false);
    }
  };
  const onChangePassword = (e) => {
    const currentPass = e.target.value;
    setPassword(currentPass);
    const passRegExp = /^[a-zA-Zㄱ-힣0-9~!@#$%^&*()-_+|<>?:{}]{8,30}$/;
    if (!passRegExp.test(currentPass)) {
      setPasswordMessage("비밀번호를 확인해주세요!");
      setIsPass(false);
      setDisabled(true);
    } else {
      setPasswordMessage("ok!");
      setIsPass(true);
      setDisabled(false);
    }
  };
  const onChangeName = (e) => {
    const currentName = e.target.value;
    setName(currentName);

    if (currentName.length < 2 || currentName.length > 5) {
      setNameMessage("닉네임은 2글자 이상 5글자 이하로 입력해주세요!");
      setIsName(false);
      setDisabled(true);
    } else {
      setNameMessage("ok!");
      setIsName(true);
      setDisabled(false);
    }
  };
  const initInput = () => {
    setIsId(false);
    setIsPass(false);
    setIsName(false);
    setId("");
    setPassword("");
    setName("");
    setAllowId(false);
    setAllowDepartment(false);
  };
  const handleSubmit = (e) => {
    setDisabled(true);
    e.preventDefault();
    if (!isId || !isPass || !isName) {
      alert("입력 정보를 다시 확인해주세요.");
    } else {
      const signUpData = {
        studentId: id,
        password: password,
        nickname: name,
        openStudentId: allowId,
        openDepartment: allowDepartment,
        // dataRange: {
        //   studentId: allowId,
        //   department: allowDepartment,
        // },
      };
      // signUpSubmitTest(signUpData); //test
      signUpSubmit(signUpData); //실제
    }
    setDisabled(false);
  };
  // async function signUpSubmitTest(info) {
  //   const response = await fetch("http://localhost:3001/signup", {
  //     ///members/add"
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(info),
  //   });
  //   try {
  //     if (!response.ok) {
  //       throw new Error(`${response.status} 에러가 발생했습니다.`);
  //     }
  //     const data = await response.json();
  //     if (data.errorCode !== 0) {
  //       throw new Error(`Error Code:${data.errorCode} ${data.message}`);
  //     }
  //     alert("회원가입이 완료되었습니다.");
  //     props.setSignUpOpen(false);
  //   } catch (e) {
  //     alert(e);
  //     initInput();
  //   }
  // }
  async function signUpSubmit(info) {
// <<<<<<< Updated upstream
//     let headers = new Headers();

//     headers.append("Content-Type", "application/json");
//     headers.append("Accept", "application/json");

//     headers.append(
//       "Access-Control-Allow-Origin",
//       "http://sejongsticker.s3-website.ap-northeast-2.amazonaws.com"
//     );
//     headers.append("Access-Control-Allow-Credentials", "true");

//     headers.append("GET", "POST", "OPTIONS");
//     const response = await fetch(
//       "http://ec2-3-24-166-96.ap-southeast-2.compute.amazonaws.com:8080/members",
//       {
//         method: "POST",
//         headers: headers,
//         body: JSON.stringify(info),
//       }
//     );
// =======
    const response = await fetch("/members", {
      ///members/add"
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });
    try {
      const data = await response.json();
      if (!response.ok) {
        throw new Error(`${data.message}`);
      }

      if (data.errorCode !== 0) {
        throw new Error(` ${data.message}`);
      }
      alert("회원가입이 완료되었습니다.");
      props.setSignUpOpen(false);
    } catch (e) {
      alert(e);
      initInput();
    }
  }

  return (
    <ReactModal
      isOpen={props.signUpOpen}
      onRequestClose={() => props.setSignUpOpen(false)}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
        content: {
          position: "absolute",
          top: "20%",
          left: "20%",
          right: "20%",
          bottom: "20%",
          border: "1px solid #ccc",
          background: "#fff",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "20px",
          outline: "none",
          padding: "20px",
          animationName: "slide-down",
          animationDuration: "300ms",
          animationTimingFunction: "ease-in-out",
        },
      }}
      ariaHideApp={false}
    >
      <div className="form">
        <form onSubmit={handleSubmit}>
          {" "}
          {}
          <br></br>
          <div className="form-el">
            <label htmlFor="Id">Id</label> <br />
            <input id="id" name="id" value={id} onChange={onChangeId} />
            <i className={isId ? "alert-ok" : "alert"}> {idMessage} </i>
          </div>
          <br></br>
          <div className="form-el">
            <label htmlFor="password">Password</label> <br />
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={onChangePassword}
            />
            <i className={isPass ? "alert-ok" : "alert"}>{passwordMessage}</i>
          </div>
          <br></br>
          <div className="form-el">
            <label htmlFor="name">Nick Name</label> <br />
            <input id="name" name="name" value={name} onChange={onChangeName} />
            <i className={isName ? "alert-ok" : "alert"}>{nameMessage}</i>
            <br></br>
          </div>
          <div>
            <br></br>
            공개할 정보
            <br />
            <Checkbox
              values="studentId"
              checked={allowId}
              onChange={setAllowId}
            >
              학번
            </Checkbox>
            <Checkbox
              values="department"
              checked={allowDepartment}
              onChange={setAllowDepartment}
            >
              학과
            </Checkbox>
          </div>
          {/* <button
            className="button"
            onClick={() => {
              datatestprint();
            }}
          >
            PostTest
          </button> */}
          <div className="actions">
            <button type="submit" className="button" disabled={disabled}>
              가입
            </button>
            <button
              type="button"
              className="button--alt"
              onClick={() => props.setSignUpOpen(false)}
            >
              취소
            </button>
          </div>
        </form>
      </div>
    </ReactModal>
  );
};
export default SignUp;
