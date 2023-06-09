import { Outlet, Navigate, useLocation, useNavigate } from "react-router-dom";
const TreeAuth = () => {
  const location = useLocation();

  const navigate = useNavigate();

  async function authCheck() {
    //실제
    const response = await fetch("http://localhost:3001/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sessionId: `${sessionStorage.getItem("token")}`,
      }),
    });
    try {
      //서버 응답 x
      if (!response.ok) { 
        throw new Error("서버와의 연결이 끊어졌습니다. 다시 로그인해주세요.");
      }
      const data = await response.json();
      //서버 sessionId와 클라 sessionId 불일치
      if (!data.res) {
        sessionStorage.setItem("token", "");
        throw new Error("로그인이 만료되었습니다.");
      }
      localStorage.setItem("isLoggedin", "1");
    } catch (e) {
      alert(e);
      localStorage.setItem("isLoggedin", "0");
      navigate('/login');
    }
  }

  async function authTest() {
    //테스트용
    const response = await fetch("http://localhost:3001/auth");
    try {
      const data = await response.json();
      if (!response.ok) {
        throw new Error("로그인 정보가 없습니다.");
      }
      sessionStorage.setItem("tokenkey", data.token);
      if (
        sessionStorage.getItem("tokenkey") !== sessionStorage.getItem("token")
      ) {
        throw new Error("로그인이 만료되었습니다.");
      }
      localStorage.setItem("isLoggedin", "1");
    } catch (e) {
      alert(e);
      localStorage.setItem("isLoggedin", "0");
      sessionStorage.setItem("token", "");
      sessionStorage.setItem("tokenkey", "");
      navigate('/login');
    }
  }

  authTest(); // 테스트
  return localStorage.getItem("isLoggedin") === "1" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};
export default Forcheck;
