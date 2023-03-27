import { React, useState } from "react";
import "./SignUp.css";
const SignUp = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [idMessage, setIdMessage] = useState("");
  const [nameMessage, setNameMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  const [isId, setIsId] = useState(false);
  const [isname, setIsName] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

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
    <div className="form">
      <form>
        <div className="form-el">
          <label htmlFor="Id">Id</label> <br />
          <input id="id" name="id" value={id} onChange={onChangeId} />
          <p> {idMessage} </p>
        </div>

        <div className="form-el">
          <label htmlFor="name">Nick Name</label> <br />
          <input id="name" name="name" value={name} onChange={onChangeName} />
          <p>{nameMessage}</p>
        </div>

        <div className="form-el">
          <label htmlFor="password">Password</label> <br />
          <input id="password" name="password" value={password} />
          <p>{passwordMessage}</p>
        </div>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default SignUp;
