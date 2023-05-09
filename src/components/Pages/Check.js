import { Outlet, Navigate, useLocation, useNavigate } from "react-router-dom";
import AuthLogin from "../../context/auto-login";
import { useState } from "react";
const Check = () => {
  const location = useLocation();
  console.log("check중");

  const navigate = useNavigate();
  const [status, setstatus] = useState(false);
  async function authTest() {
    //테스트용
    const response = await fetch("http://localhost:3001/auth");
    try {
      const data = await response.json();
      console.log(data.status);
      if (!response.ok) {
        throw new Error("로그인 정보가 없습니다.");
      }
      
       if (
            data.status==0
       ) {
        throw new Error("로그인이 만료되었습니다.");
       }
      
       console.log('로그인확인')
       setstatus(data.status);
       console.log(status);
    } catch (e) {
        console.log('error');
      navigate('/login');
    }
  }


  authTest();



  

  
  if(status)
  console.log('ok')
  else
  console.log('no')

  return status ==1 ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};
export default Check;
