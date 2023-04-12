import { React, useState } from "react";
import ReactModal from "react-modal";
import "./SignUp.css";
const SignUp = (props) => {
  

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [idMessage, setIdMessage] = useState("");
  const [nameMessage, setNameMessage] = useState("");

  const [isId, setIsId] = useState(false);
  const [isName, setIsName] = useState(false);

  //id 유효성검사
  const onChangeId = (e) => {
    const currentId = e.target.value;
    setId(currentId);
    const idRegExp = /^[0-9]{8}$/;
    //유효성검사 확인필요

    if (!idRegExp.test(currentId)) {
      setIdMessage("학번을 입력해주세요!");
      setIsId(false);
    } else {
      setIdMessage("");
      setIsId(true);
    }
  };

  const onChangePassword = (e) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
  }
  //닉네임 유효성검사
  const onChangeName = (e) => {
    const currentName = e.target.value;
    setName(currentName);

    if (currentName.length < 2 || currentName.length > 5) {
      setNameMessage("닉네임은 2글자 이상 5글자 이하로 입력해주세요!");
      setIsName(false);
    } else {
      setNameMessage("사용가능한 닉네임 입니다.");
      setIsName(true);
    }
  };


  return (
    // “/members/add”
    
    <ReactModal isOpen={props.signUpOpen}
    onRequestClose={() => props.setSignUpOpen(false)}
    style={{
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
      },
      content: {
        position: 'absolute',
        top: '20%',
        left: '20%',
        right: '20%',
        bottom: '20%',
        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '20px',
        outline: 'none',
        padding: '20px'
      }
    }}
    ariaHideApp={false}>
      <div className="form">
      <form action="/members/add"> {/*action="/members/add"*/}
        <div className="form-el">
          <label htmlFor="Id">Id</label> <br />
          <input id="id" name="id" value={id} onChange={onChangeId} />
          <i className="alert"> {idMessage} </i>
        </div>

        <div className="form-el">
          <label htmlFor="password">Password</label> <br />
          <input id="password" name="password" value={password}onChange={onChangePassword}  />
        </div>

        <div className="form-el">
          <label htmlFor="name">Nick Name</label> <br />
          <input id="name" name="name" value={name} onChange={onChangeName} />
          <i className={isName ? "alert-ok":"alert"}>{nameMessage}</i>
        </div>

        <br />
        <br />
        <br />
        <br />
        <div className="actions">
          <button type="submit" className="button">가입</button>
          <button type="button" className="button--alt" onClick={()=>props.setSignUpOpen(false)}>취소</button>
        </div>
      </form>
      
    </div>
    </ReactModal>
  );
};
export default SignUp;
