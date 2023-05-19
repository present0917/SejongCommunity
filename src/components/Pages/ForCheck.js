import { Outlet, Navigate, useLocation, useNavigate } from "react-router-dom";
import AuthLogin from "../../context/auto-login";
import { useContext, useEffect } from "react";
import Errorlogin from "./Error/Errorlogin";
import { useState } from "react";
const Forcheck = () => {
  const location = useLocation();
  console.log("forcheck입니다.");
  const navigate = useNavigate();

  async function logintest() {
    //실제
    const response = await fetch("/login");

    //서버 응답 x
    if (!response.ok) {
      navigate("/Errorlogin");
    }
    const data = await response.json();
    console.log(data);
    if (data.isLogin === false) navigate("/Errorlogin");
  }

  const [testData,setTestData] = useState([])
  const [sum,setSum]=useState(0);

  async function alarm() {
      const response = await fetch('/login');
      const data = await response.json();

     console.log(data);

      // console.log(data.alarmCount[0].count);
  };
  
  useEffect(() => {
    alarm();
  }, []);
  useEffect(() => {
    let test = testData.reduce((accumulator, currentObject) => accumulator + currentObject['count'], 0);
    setSum(test);
  }, [testData]);
  


  let alarmcount=sum;
  logintest();
  return (
    // localStorage.getItem("isLoggedin") === "1" ? (
    <Outlet context={{alarmcount}}/>
  );
  // ) : (
  //   <Navigate to="/login" replace state={{ from: location }} />
  // );
};
export default Forcheck;
