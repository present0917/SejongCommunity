import { useNavigate } from "react-router"
import { useEffect } from "react";
import errorimg from '../../../pic/log.png'
const Errorlogin =()=>
{
    const navigate= useNavigate();
    useEffect(() => {
        const delayedFunction = () => {
          console.log('redirect');
          navigate('/login');
        };
    
        const timer = setTimeout(delayedFunction, 3000);
    
        return () => clearTimeout(timer); // Cleanup function to clear the timer if the component unmounts before the 5 seconds
    
      }, []); 
    return(
      <div className="containera">
      <img src={errorimg} className="imga" />
        <div className="errormessage">
            로그인이 만료되었습니다.<br></br>
            3초 후 로그인 화면으로<br></br> 이동합니다.
        </div>
        </div>
    )
}
export default Errorlogin