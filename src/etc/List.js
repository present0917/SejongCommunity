import styled from "styled-components";
import { useState } from "react";
const imgg = styled.img`
position: relative;
`;
const List = ( props ) => {
  const { image, text, top, left,title } = props.data;
  const style = { top, left }; // 스타일 객체 생성
  return (
    <div className="Crd">
        <div className="text-container" 
        onClick={()=>{
          props.func();
          
          }}>
      </div>
    </div>
  );
};
export default List;
