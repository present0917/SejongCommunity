import { useNavigate } from "react-router"
import { useEffect } from "react";
import './Error.css'
import errorimg from '../../../pic/404.png'
const Error =()=>
{
    const navigate= useNavigate();
    useEffect(() => {
        const delayedFunction = () => {
          console.log('redirect');
          navigate('/login');
        };
    
        const timer = setTimeout(delayedFunction, 10000);
    
        return () => clearTimeout(timer); // Cleanup function to clear the timer if the component unmounts before the 5 seconds
    
      }, []); 
    return(
      <div className="containera">
      <img src={errorimg} className="imga" />
        <div className="errormessage">
            잘못된 접근입니다<br></br>
            3초 후 로그인 화면으로<br></br> 이동합니다.
        </div>
        </div>
    )
}
export default Error