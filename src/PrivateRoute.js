import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ authenticated, component:Component}) => {
    const test=()=>{
        console.log(authenticated);
    }
    return(
        
       authenticated===1 ?  <Navigate to="/login" {...alert("로그인이 필요합니다.")}></Navigate> : Component
    )
}

export default PrivateRoute;