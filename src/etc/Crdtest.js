import Show from "../components/Modal/Show";
import styled from "styled-components";
import { useState,useEffect } from "react";
import post from '../pic/post.png'
import post1 from '../pic/post1.png'
import post2 from '../pic/post2.png'
const imgg = styled.img`
position: relative;
`;
const Crdtest = ( props ) => {
  const { type, message, top, left,title,stickerKey } = props.data;
  const [backdatas,setbackdatas]=useState(null);
  // const style = { top, left }; // 스타일 객체 생성
  let imagePath;
  if (type == 1) {
    imagePath = post;
  } else if (type == 2) {
    imagePath = post1;
  }
  else if (type == 3) {
    imagePath = post2;
  }

  async function backdata() { 
    console.log(stickerKey);
    const response = await fetch(`/stickers/${stickerKey}`, {
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const dat = await response.json();
    props.backfunc(dat);
    // console.log(dat);

    // setbackdatas(dat);
    // console.log(backdatas);
  }

  useEffect(() => {
    // backdata();
  }, []);

  return (
    <div className="Crd">
        <img src={imagePath} style=
        {{width:"12vmin", height:"12vmin"}}
        />
        <div className="text-container" 
        onClick={()=>{
          
          console.log(props);
          props.func(props);
         
          
          }
          }
          >
          {title}
      </div>
    </div>
  );
};
export default Crdtest;
