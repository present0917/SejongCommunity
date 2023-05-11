import { useNavigate } from "react-router"
import { useEffect } from "react";
const Error =()=>
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
            에러가 발생했습니다.
            3초 후 로그인 화면으로 이동합니다.
        </div>
    )
}
export default Error