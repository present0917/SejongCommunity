import { useNavigate } from "react-router"
import { useEffect } from "react";
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
        <div className="error">
            로그인이 만료되었습니다.<br></br>
            3초 후 로그인 화면으로 이동합니다.
        </div>
    )
}
export default Errorlogin