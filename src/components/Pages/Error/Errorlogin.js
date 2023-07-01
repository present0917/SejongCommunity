import { useNavigate } from "react-router";
import { useEffect } from "react";
import errorimg from "../../../pic/log.png";
const Errorlogin = () => {
  const navigate = useNavigate();
  async function logout() {
    const response = await fetch(`/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    try {
      if (!response.ok) {
        throw new Error("서버 응답 없음");
      }
      navigate("/login");
      console.log(response);
    } catch (e) {
      alert(e);
    }
  }
  useEffect(() => {
    logout();
    const delayedFunction = () => {
      console.log("redirect");
      navigate("/login");
    };

    const timer = setTimeout(delayedFunction, 3000);

    return () => clearTimeout(timer); // Cleanup function to clear the timer if the component unmounts before the 5 seconds
  }, []);
  return (
    <div className="containera">
      <img src={errorimg} className="imga" />
      <div className="errormessage">
        로그인이 만료되었습니다.<br></br>
        3초 후 로그인 화면으로<br></br> 이동합니다.
      </div>
    </div>
  );
};
export default Errorlogin;
