import React ,{ useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom";

const Waypoint = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    useEffect(()=>{
       if(state !== true){
        alert("잘못된 접근입니다.");
        navigate("/");
       }
    },[state])
    return<></>
}
export default Waypoint