import Show from "../components/Modal/Show";
import styled from "styled-components";
import { useState } from "react";
const imgg = styled.img`
position: relative;
`;
const Crd = ( props ) => {
  const { image, text, top, left,title } = props.data;
  const style = { top, left }; // 스타일 객체 생성
  return (
    <div className="Crd">
        <img src={image} style=
        {{width:"10vmin", height:"12vmin"}}
        
        />
        <div className="text-container" 
        onClick={()=>{
          props.func();
          
          }}>
          {image}
      </div>
    </div>
  );
};
export default Crd;
