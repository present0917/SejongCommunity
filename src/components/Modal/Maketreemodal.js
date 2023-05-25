import { React, useState } from "react";
import ReactModal from "react-modal";
import CheckboxGroup from "../ui/checkbox/pre/CheckboxGroup";
import Checkbox from "../ui/checkbox/pre/Checkbox";
import ToggleButton from "../ui/toggle/toggleButton";
import ToggleButtonGroup from "../ui/toggle/toggleButtonGroup";
import tagData from "../../dataJson/tagdata.json";
import "./Maketreemodal.css";
import tagBox from "../ui/toggle/toggleButton.module.css";
const Maketreemodal = (props) => {
  const [tags, setTags] = useState([1]);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [allowId, setAllowId] = useState(false);
  const [allowDepartment, setAllowDepartment] = useState(false);

  const [passwordMessage, setPasswordMessage] = useState("");
  const [nameMessage, setNameMessage] = useState("");

  const [isPass, setIsPass] = useState(false);
  const [isName, setIsName] = useState(false);

  const [disabled, setDisabled] = useState(true);

  const toggleGroupStyle = {};
  const modalStyle = {
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
  };

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
  const testGene = (e) => {
    for (let index = 0; index < 30; index++) {
      const signUpData = {
        description: "테스트용",
        title: `테스트${index}`,
        requestId: true,
        requestDepartment: true,
        tags: [1, 2, 3],
      };
      signUpSubmit(signUpData);
    }
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
        tags: tags,
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
    // if (!response.ok) {
    //   throw new Error(`${response.status} 에러가 발생했습니다.`);
    // }
    const data = await response.json();
    // if (data.errorCode != null) {
    //   throw new Error(`Error Code:${data.errorCode} ${data.message}`);
    // }
    console.log("생성할때보낸정보");
    console.log(info);
    props.setmaketreeOpen(false);
  }
  return (
    <ReactModal
      isOpen={props.maketreeOpen}
      onRequestClose={() => props.setmaketreeOpen(false)}
      style={modalStyle}
      ariaHideApp={false}
    >
      <div className="container">
        <form onSubmit={handleSubmit}>
          <p>
            <input
              className="title"
              placeholder="제목"
              value={name}
              onChange={onChangeName}
            />
          </p>
          <p>
            <textarea
              className="text"
              value={password}
              onChange={onChangePassword}
              placeholder="내용"
            />
          </p>
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
            style={tagBox.tagBox}
            values={tags}
            onChange={setTags}
            mode="multi"
          >
            {tagData.tags.map((tag) => (
              <ToggleButton
                value={tag.value}
                style={
                  tags.find((v) => v === tag.value)
                    ? tagBox.createDefault
                    : tagBox.createChecked
                }
                key={Math.random()}
              >
                #{tag.text}
              </ToggleButton>
            ))}
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
        <button type="button" onClick={testGene}>
          테스트트리 생성
        </button>
      </div>
    </ReactModal>
  );
};

export default Maketreemodal;
