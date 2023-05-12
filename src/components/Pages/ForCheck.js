import { Outlet, Navigate, useLocation, useNavigate } from "react-router-dom";
import AuthLogin from "../../context/auto-login";
import { useContext, useEffect } from "react";
import Errorlogin from "./Error/Errorlogin";
const Forcheck = () => {
  const location = useLocation();
  console.log("forcheck입니다.");
  const navigate = useNavigate();

  async function logintest() {
    //실제
    const response = await fetch("/login");

    //서버 응답 x
    if (!response.ok) {
      //navigate("/login");
    }
    const data = await response.json();
    console.log(data);
    if (data == false) navigate("/Errorlogin");
  }

  logintest();
  return (
    // localStorage.getItem("isLoggedin") === "1" ? (
    <Outlet />
  );
  // ) : (
  //   <Navigate to="/login" replace state={{ from: location }} />
  // );
};
export default Forcheck;
