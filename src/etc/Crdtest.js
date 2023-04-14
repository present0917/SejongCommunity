import Show from "../components/Modal/Show";
import styled from "styled-components";
import { useState } from "react";
import post from '../pic/post.png'
import post1 from '../pic/post1.png'
import post2 from '../pic/post2.png'
const imgg = styled.img`
position: relative;
`;
const Crdtest = ( props ) => {
  const { name, text, top, left,title } = props.data;
  // const style = { top, left }; // 스타일 객체 생성
  let imagePath;
  if (name === "1") {
    imagePath = post;
  } else if (name === "2") {
    imagePath = post1;
  }
  else if (name === "3") {
    imagePath = post2;
  }
  return (
    <div className="Crd">
        <img src={imagePath} style=
        {{width:"10vmin", height:"12vmin"}}
        
        />
        <div className="text-container" 
        onClick={()=>{
          props.func(props.data);

          }
          }
          >
          {text}
      </div>
    </div>
  );
};
export default Crdtest;
