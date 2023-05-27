import { React, useState,useEffect } from "react";
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
const Fixtreeform = (props) => {

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

  const [title, settitle] = useState('a');
  const [message, setmessage] = useState('a');
  const [thiskey,setthiskey]=useState(-1);

function fun(){
  console.log('수정프롭')

  console.log(props)
  console.log(props.datas)
  if (props.datas && props.datas.hasOwnProperty('title')) {
    setName(props.datas.title)
  }
  if (props.datas && props.datas.hasOwnProperty('description')) {
    setPassword(props.datas.description)
  }
  if (props.datas && props.datas.hasOwnProperty('treeKey')) {
    setthiskey(props.datas.treeKey)
  }
}

  useEffect(() => {
    fun();
  }, []);

  const navigat = useNavigate();
  const modalStyle = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.75)",
      zIndex:100,
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
        tags: tags,
      };
      signUpSubmit(signUpData);
    }
    setDisabled(false);
  };
  async function signUpSubmit(info) {
    const response = await fetch(`/forest/${thiskey}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });
    try {
      if (!response.ok) {
        throw new Error(`${response.status} 에러가 발생했습니다.`);
      }
      const data = await response.json();
      if (data.errorCode != 0) {
        throw new Error(`Error Code:${data.errorCode} ${data.message}`);
      }
      props.reload();
      props.setmaketreeOpen(false);
    } catch (e) {
      alert(e);
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
          {/* <button className="button" onClick={()=>{datatestprint();}}>PostTest</button> */}
          <div className="actions">
            <button type="submit" className="button" disabled={disabled}>
              수정
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

export default Fixtreeform;
