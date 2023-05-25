import { Outlet, Navigate, useLocation, useNavigate } from "react-router-dom";
import AuthLogin from "../../context/auto-login";
import { useContext, useEffect } from "react";
import Errorlogin from "./Error/Errorlogin";
import { useState } from "react";
const Forcheck = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [testData,setTestData] = useState([])
  const [sum,setSum]=useState(0);


  async function logintest() {
    //실제
    console.log('테스트');
    const response = await fetch("/login");

    //서버 응답 x
    if (!response.ok) {
      navigate("/Errorlogin");
    }
    const data = await response.json();
    if (data.isLogin === false) navigate("/Errorlogin");
    
  }



  async function alarm() {
      const response = await fetch('/login');
      const data = await response.json();
      // let check = response.data.hasOwnProperty('alarmCount')
      // if(check)
      //   setTestData(data.alarmCount);
  };
  


  // useEffect(() => {
    
  //   let test = testData.reduce((accumulator, currentObject) => accumulator + currentObject['count'], 0);
  //   setSum(test);
   

  // }, [testData]);
  


  useEffect(() => {
    logintest();
    alarm();
  }, [location]);


  return (
    // localStorage.getItem("isLoggedin") === "1" ? (
    <Outlet context={{sum}}/>
  );
  // ) : (
  //   <Navigate to="/login" replace state={{ from: location }} />
  // );
};
export default Forcheck;
