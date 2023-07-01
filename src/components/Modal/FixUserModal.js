import { React, useState, useEffect, useContext } from "react";
import ReactModal from "react-modal";
import CheckboxGroup from "../ui/checkbox/pre/CheckboxGroup";
import Checkbox from "../ui/checkbox/pre/Checkbox";
import { useNavigate } from "react-router";
import "./ModalAnimation.css";
import LoadingContext from "../Nav/LoadingContext";
const FixUserModal = (props) => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [allowId, setAllowId] = useState(false);
  const [allowDepartment, setAllowDepartment] = useState(false);
  const [initValue, setInitValue] = useState([]);

  const [nameMessage, setNameMessage] = useState("");

  const [isName, setIsName] = useState(true);

  const [disabled, setDisabled] = useState(true);
  const {updateLoading} = useContext(LoadingContext);

  async function getdata() {
    const response = await fetch("http://ec2-3-24-166-96.ap-southeast-2.compute.amazonaws.com:8080/members", {
      ///members/add"
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    try {
      updateLoading(true);
      if (!response.ok) {
        navigate("/error");
        throw new Error(`${response.status} 에러가 발생했습니다.`);
      }
      const data = await response.json();
      if (data.errorCode != null) {
        throw new Error(`Error Code:${data.errorCode} ${data.message}`);
      }
      setName(data.member.nickname);
      setId(data.member.studentId);
      setAllowId(data.member.openStudentId);
      setAllowDepartment(data.member.openDepartment);
      setInitValue([data.member.openStudentId, data.member.openDepartment]);
      updateLoading(false);
    } catch (e) {
      alert(e);
      updateLoading(false);
    }
  }
  useEffect(() => {
    getdata();
    setIsName(true);
    setDisabled(true);
  }, []);
  useEffect(() => {
    if (
      (initValue !== []) &
      (initValue[0] !== allowId || initValue[1] !== allowDepartment)
    ) {
      setDisabled(false);
    }
  }, [allowId, allowDepartment]);
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
  const handleSubmit = (e) => {
    setDisabled(true);
    // e.preventDefault();
    if (!isName) {
      alert("입력 정보를 다시 확인해주세요.");
    } else {
      const signUpData = {
        studentId: id,
        nickname: name,
        openStudentId: allowId,
        openDepartment: allowDepartment,
      };

      signUpSubmit(signUpData);
    }
    setDisabled(false);
  };
  async function signUpSubmit(info) {
    updateLoading(true,"사용자 정보 수정중...");
    const response = await fetch("/members", {
      ///members/add"
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
      if (data.errorCode !== 0) {
        throw new Error(`Error Code:${data.errorCode} ${data.message}`);
      }
      alert("수정완료.");
      props.setSignUpOpen(false);
    } catch (e) {
      alert(e);
    } finally {
      updateLoading(false);
    }
  }

  return (
    // “/members/add”

    <ReactModal
      isOpen={props.signUpOpen}
      onRequestClose={() => props.setSignUpOpen(false)}
      className="modalstyle"
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
          <div className="form-el">
            <label htmlFor="Id">Id</label> <br />
            <input disabled id="id" name="id" value={id} />
          </div>
          <div className="form-el">
            <label htmlFor="name">Nick Name</label> <br />
            <input id="name" name="name" value={name} onChange={onChangeName} />
            <i className={isName ? "alert-ok" : "alert"}>{nameMessage}</i>
          </div>
          <fieldset>
            <legend>공개할 정보를 선택하세요.</legend>
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
          </fieldset>
          {/* <button className="button" onClick={()=>{datatestprint();}}>PostTest</button> */}
          <div className="actions">
            <button type="submit" className="button" disabled={disabled}>
              수정
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
export default FixUserModal;
