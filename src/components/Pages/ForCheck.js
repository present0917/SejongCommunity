import { Outlet, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useState } from "react";
const Forcheck = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [testData,setTestData] = useState([])
  const [sum,setSum]=useState(0);


  async function logintest() {
    const response = await fetch("/login");

    if (!response.ok) {
      navigate("/Errorlogin");
    }
    const data = await response.json();
    if (data.isLogin === false) navigate("/Errorlogin");
    
  }



  async function alarm() {
      const response = await fetch('/login');
      const data = await response.json();

        setTestData(data.alarmCount);
  };
  


  useEffect(() => {
    
    let test = testData.reduce((accumulator, currentObject) => accumulator + currentObject['count'], 0);
    setSum(test);
   

  }, [testData]);
  


  useEffect(() => {
    logintest();
    alarm();
  }, [location]);


  return (
    <Outlet context={{sum}}/>
  );

};
export default Forcheck;
