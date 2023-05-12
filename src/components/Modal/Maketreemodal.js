import { React, useState, useEffect } from "react";
import ReactModal from "react-modal";
import CheckboxGroup from "../ui/checkbox/pre/CheckboxGroup";
import Checkbox from "../ui/checkbox/pre/Checkbox";
import ToggleButton from "../ui/toggle/toggleButton";
import ToggleButtonGroup from "../ui/toggle/toggleButtonGroup";
import styles from "../Nav/Header/SearchBar.module.css";
import tagData from "../../dataJson/tagdata.json";
const Maketreemodal = (props) => {
  const [tags, setTags] = useState([1]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [allowId, setAllowId] = useState(false);
  const [allowDepartment, setAllowDepartment] = useState(false);
  const [allows, setAllows] = useState(["studentId", "department"]);

  const [passwordMessage, setPasswordMessage] = useState("");
  const [nameMessage, setNameMessage] = useState("");

  const [isPass, setIsPass] = useState(false);
  const [isName, setIsName] = useState(false);

  const [disabled, setDisabled] = useState(true);

  const onChangePassword = (e) => {
    const currentPass = e.target.value;
    setPassword(currentPass);
    const passRegExp = /^.+$/;
    if (!passRegExp.test(currentPass)) {
      setPasswordMessage("작성해주세요");
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

    const passRegExp = /^.+$/;
    if (!passRegExp.test(currentName)) {
      setNameMessage("작성해주세요");
      setIsName(false);
      setDisabled(true);
    } else {
      setNameMessage("ok!");
      setIsName(true);
      setDisabled(false);
    }
  };
  const initInput = () => {
    setIsPass(false);
    setIsName(false);
    setPassword("");
    setName("");
    setAllowId(false);
    setAllowDepartment(false);
  };
  const handleSubmit = (e) => {
    //제출
    setDisabled(true);
    e.preventDefault();
    if (!isPass || !isName) {
      alert("입력 정보를 다시 확인해주세요.");
    } else {
      const signUpData = {
        description: password,
        title: name,
        requestId: allowId,
        requestDepartment: allowDepartment,
        tag: tags,
      };
      signUpSubmit(signUpData);
      console.log(signUpData);
      alert(`${name}트리가 생성되었습니다`);
    }
    setDisabled(false);
  };
  async function signUpSubmit(info) {
    const response = await fetch("/forest", {
      ///members/add"
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });
    if (!response.ok) {
      throw new Error(`${response.status} 에러가 발생했습니다.`);
    }
    const data = await response.json();
    if (data.errorCode != null) {
      throw new Error(`Error Code:${data.errorCode} ${data.message}`);
    }
    console.log("생성할때보낸정보");
    console.log(info);
    props.setmaketreeOpen(false);
  }

  const datatestprint = () => {
    const authData = {
      id: { id },
      password: { password },
      name: { name },
    };
    console.log(authData);
  };
  return (
    // “/members/add”

    <ReactModal
      isOpen={props.maketreeOpen}
      onRequestClose={() => props.setmaketreeOpen(false)}
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
        },
      }}
      ariaHideApp={false}
    >
      <div className="form">
        <form onSubmit={handleSubmit}>
          {" "}
          {}
          <div className="form-el">
            <label>제목</label> <br />
            <input value={name} onChange={onChangeName} />
            <i className={isName ? "alert-ok" : "alert"}> {nameMessage} </i>
          </div>
          <div className="form">
            <label>설명</label> <br />
            <textarea value={password} onChange={onChangePassword} />
            <i className={isPass ? "alert-ok" : "alert"}>{passwordMessage}</i>
          </div>
          <CheckboxGroup label="스티커 작성자의 정보 공개 범위를 선택하세요.">
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
          </CheckboxGroup>
          <ToggleButtonGroup
            values={tags}
            onChange={setTags}
            style={styles.searchToggleBox}
            mode="multi"
          >
            {tagData.tags.map((tag) => (
              <ToggleButton
                style={
                  tags.find((v) => v === tag.value)
                    ? styles.default
                    : styles.checked
                }
                value={tag.value}
                key={Math.random()}
              >
                #{tag.text}
              </ToggleButton>
            ))}
            {/* <ToggleButton
              style={
                tags.find((v) => v === 1)
                  ? styles.default
                  : styles.checked
              }
              value={2}
            >
              #팀플
            </ToggleButton>
            <ToggleButton
              style={
                tags.find((v) => v === 2)
                  ? styles.default
                  : styles.checked
              }
              value="공모전"
            >
              #공모전
            </ToggleButton>
            <ToggleButton
              style={
                tags.find((v) => v === "번개") ? styles.default : styles.checked
              }
              value="번개"
            >
              #번개
            </ToggleButton> */}
          </ToggleButtonGroup>
          {/* <button className="button" onClick={()=>{datatestprint();}}>PostTest</button> */}
          <div className="actions">
            <button type="submit" className="button" disabled={disabled}>
              생성
            </button>
            <button
              type="button"
              className="button--alt"
              onClick={() => props.setmaketreeOpen(false)}
            >
              취소
            </button>
          </div>
        </form>
      </div>
    </ReactModal>
  );
};

export default Maketreemodal;
