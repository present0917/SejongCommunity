import '.././My.css'
import board from '../../../pic/board.png'
import Crdtest from "../../../etc/Crdtest"
import post from "../../../pic/post.png"
import post1 from "../../../pic/post1.png"
import post2 from "../../../pic/post2.png"
import { useState,useEffect } from "react"
import Form from "../../Modal/Form";
import Show from "../../Modal/Show"
import Patchform from '../../Modal/Patchform'
import { useParams } from 'react-router-dom'
const imagePaths = [
  post,
  post1,
  post2
];
const Myfinal = () => {
  const [ModalIsShown, setModalIsShown] = useState(false);
  const [showmadalshow, setshowmodalshow] = useState(false);
  const [patchmadalshow, setpatchmodalshow] = useState(false);
  const [cardInfo, setCardInfo] = useState(null);
  const [idopen, setidopen] = useState(null);
  const [majoropen, setmajoropen] = useState(null);
  const [cards, setCards] = useState([]); //입력 내용 담을곳
  const [ismine, setismine] = useState(false); //입력 내용 담을곳

  const params = useParams();
  const showpatchmodal = () => {//수정 모달
    setpatchmodalshow(true);
    // console.log('show');
  };

  const hidepatchmodal = () => { //수정 모달 숨기기
    setpatchmodalshow(false);
  };
  const showmodal = (info) => {// 뷰 모달
    setCardInfo(info.data);
    if(info.data.user==1||info.ismine)
    {
      setshowmodalshow(true);
    }
    else
    setshowmodalshow(false);
    // console.log('show');
  };
  const hidemodal = () => { //뷰 모달 숨기기
    setshowmodalshow(false);
  };

  const showModalHandler = () => {//입력 모달
    setModalIsShown(true);
    // console.log('show');
  };

  const hideModalHandler = () => { //입력 모달 숨기기
    setModalIsShown(false);
  };
  

  async function deletecard(data) { //삭제
    const response = await fetch(`http://localhost:3002/${params.id}/${+data.id}` , {
      method: 'DELETE',
    });
    console.log('delete');
    fetchcard();
  }

  async function fix(data) { //수정
    const response = await fetch(`/${params.id}/${+data.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    console.log('fixed');
    console.log(data);
    fetchcard();
  }

  // async function fetchcard() { //불러오기
  //   const num=params.id;
  //   const response = await fetch(`http://localhost:3002/db/`);
  //   if (!response.ok) {
  //     throw new Error('Failed to fetch card data');
  //   }
  //   const data = await response.json();
  //   // if (!data.tree1) {
  //   //   throw new Error('Invalid card data');
  //   // }
  //   const mapping = await data[num].map((element) => {
  //     return {
  //       name: element.name,
  //       text: element.text,
  //       id:element.id,
  //       memo:element.memo,
  //       user:element.user
  //     };
  //   });
  //   setCards(mapping);
  // };

  // async function fetchcard() { //불러오기
  //   const num=params.id;
  //   console.log(num);
  //   const response = await fetch(`http://localhost:3002/${num}`);
  //   if (!response.ok) {
  //     throw new Error('Failed to fetch card data');
  //   }
  //   const data = await response.json();
  //   // if (!data.tree1) {
  //   //   throw new Error('Invalid card data');
  //   // }
    
  //   const mapping = await data.map((element) => {
  //     return {
  //       name: element.name,
  //       text: element.text,
  //       id:element.id,
  //       user:element.user
  //     };
  //   });
  //   setCards(mapping);
  // };

  async function fetchcard() { //불러오기 연동시
    const num=params.id;
    const response = await fetch(`/forest/${num}`);
    if (!response.ok) {
      throw new Error('Failed to fetch card data');
    }
    const data = await response.json();
    console.log(data)
    const mapping = await data.stickers.map((element) => {
      return {
        name: 1,
        text: element.title,
        id:element.stickerKey,
        memo:element.message,
        user:element.writer
      };
    });
    const status =await data.isMine;
    setCards(mapping);
    console.log(status);
    setismine(status);
    console.log(cards);
  };

    // async function ismine() { //내 트리인지 불러오기
  //   const num=params.id;
  //   const response = await fetch(`/forest/${num}`,;
  //   if (!response.ok) {
  //     throw new Error('Failed to fetch card data');
  //   }
  //   const data = await response.json();
  //   const mapping = await data.map((element) => {
  //     return {
  //      mine:element.ismine
  //     };
  //   });
  //   setismine(mapping.mine);
  // };

  useEffect(() => {
    fetchcard();
  }, []);

  async function postcard(card) { //입력
    const response = await fetch(`http://localhost:3002/${params.id}`, {
      method: 'POST',
      body: JSON.stringify(card),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    const data = await response.json();
    console.log('데이터');
    console.log(data);
    fetchcard();
  }

  function handleClick(data) { // 이거로 값을 채워서 스티커를 post로 보낸다.

    const newObject = {
      id: Math.random(), // 연동시 주석
      name: `${data.name}`,
      text: `${data.text}`,
      memo: `${data.memo}`,
      user: 1,//연동시주석
      treeid:params.id
    };
     setCards([...cards, newObject]);
     postcard(newObject);
  }
 

  return (
    <div>
      <div>{params.id}</div>
      <div className="container">
        <img src={board} className="board" />
         {cards.map((cardData) => (
          <Crdtest key={Math.random()} data={cardData}
            func={showmodal} ismine={ismine}
          />
        ))} 
      </div>
      {showmadalshow && <Show onClose={hidemodal} data={cardInfo} delete={deletecard} open={showpatchmodal} treeid={params.id}/>}
      {ModalIsShown && <Form onClose={hideModalHandler} onClick={handleClick} />}
      {patchmadalshow && <Patchform onClose={hidepatchmodal} onClick={fix} data={cardInfo} />}
      <button onClick={showModalHandler} className='test'>스티커붙이기</button>

      {/* <span className="spa" onClick={handleClick}>
            <Circle />
            </span>    */}

    </div>
  )
}
export default Myfinal