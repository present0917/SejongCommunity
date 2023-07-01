import { Outlet, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useState } from "react";
import Errorlogin from "./Error/Errorlogin";
const Forcheck = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [testData,setTestData] = useState([])
  const [sum,setSum]=useState(0);


  async function logintest() {
    try{
    const response = await fetch("http://ec2-3-24-166-96.ap-southeast-2.compute.amazonaws.com:8080/login");

    if (!response.ok) {
      console.log('re at for');
      navigate("/Errorlogin");
    }
    const data = await response.json();
    if (data.isLogin === false) navigate("/Errorlogin");
  }
  catch(error)
  {
    console.log('redirect from logintest catch')
    navigate('/errorlogin')
  }
}



  async function alarm() {
      const response = await fetch('http://ec2-3-24-166-96.ap-southeast-2.compute.amazonaws.com:8080/login');
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
