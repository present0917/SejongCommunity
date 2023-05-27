import { useLocation, useNavigate } from "react-router-dom";

const Waypoint = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    if(state !== true){
        alert("잘못된 접근입니다.");
        navigate("/");
       }
    return<></>
}
export default Waypoint