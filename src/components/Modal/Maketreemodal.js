import { React, useState, useContext } from "react";
import ReactModal from "react-modal";
import CheckboxGroup from "../ui/checkbox/pre/CheckboxGroup";
import Checkbox from "../ui/checkbox/pre/Checkbox";
import ToggleButton from "../ui/toggle/toggleButton";
import ToggleButtonGroup from "../ui/toggle/toggleButtonGroup";
import tagData from "../../dataJson/tagdata.json";
import "./Maketreemodal.css";
import tagBox from "../ui/toggle/toggleButton.module.css";
import "./ModalAnimation.css";
import { useNavigate } from "react-router-dom";
import LoadingContext from "../Nav/LoadingContext";
const Maketreemodal = (props) => {
  const [tags, setTags] = useState([1]);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [allowId, setAllowId] = useState(false);
  const [allowDepartment, setAllowDepartment] = useState(false);

  const [isPass, setIsPass] = useState(false);
  const [isName, setIsName] = useState(false);

  const [disabled, setDisabled] = useState(false);
  const {updateLoading} = useContext(LoadingContext);
  const navigate = useNavigate();
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
      animationName: "slide-down",
      animationDuration: "300ms",
      animationTimingFunction: "ease-in-out",
    },
  };

  const onChangePassword = (e) => {
    const currentPass = e.target.value;
    setPassword(currentPass);
    if(currentPass === ""){
      setIsPass(false);
    } else{
      setIsPass(true);
    }
  };
  const onChangeName = (e) => {
    const currentName = e.target.value;
    setName(currentName);
    if(currentName === ""){
      setIsName(false);
    } else{
      setIsName(true);
    }

  };

  const handleSubmit = (e) => {
    //제출
    setDisabled(true);
    e.preventDefault();
    if (!isPass || !isName) {
      alert("제목과 내용을 입력해주세요");
    } else {
      const signUpData = {
        description: password,
        title: name,
        requestId: allowId,
        requestDepartment: allowDepartment,
        tags: tags,
      };
      signUpSubmit(signUpData);
    }
    setDisabled(false);
  };
  async function signUpSubmit(info) {
    updateLoading(true,"보드 생성중...");
    const response = await fetch("http://ec2-3-24-166-96.ap-southeast-2.compute.amazonaws.com:8080/forest", {
      ///members/add"
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
      
        credentials: 'include',
     
    });
    try {
      if (!response.ok) {
        throw new Error(`${response.status} 에러가 발생했습니다.`);
      }
      const data = await response.json();
      if (data.errorCode != null) {
        throw new Error(`Error Code:${data.errorCode} ${data.message}`);
      }
      alert(`${name}트리가 생성되었습니다`);
      props.setmaketreeOpen(false);
      window.location.reload();
    } catch (e) {
      alert(e);

    } finally {
      updateLoading(false);
    }
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
            mode="single"
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
